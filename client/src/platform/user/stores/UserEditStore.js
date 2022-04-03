import { makeAutoObservable } from "mobx";
import { CreateUserForm } from "platform/user/forms";
import { DropdownStore } from "core/stores";
import { countryList } from "core/countries";

import { currenciesList } from "core/currenciesList";


class UserEditStore {

    get isEdit() {
        return this.routeName === "expenses";
    }

    constructor(rootStore) {
        makeAutoObservable(this);

        this.rootStore = rootStore;

        this.routeName = this.rootStore.routerStore.routerState.routeName;

        this.createUserForm = new CreateUserForm({
            onSuccess: async () => { 
                await this.handleUser(this.isEdit ? "edit" : "create"); 
            },
            onError:() => {}
        });

        this.currencyDropdownStore = new DropdownStore(
            currenciesList, 
            { 
                dataItemValue: "text", 
                dataItemKey: "code", 
                label: "Currency" 
            }
        );

        this.countriesDropdownStore = new DropdownStore(
            countryList.map(i => ({name: i, id:i})),
            { label: "Country" }
        )

        this.init();
    }

    async init() {
        if (this.isEdit) {
            const { email, password, firstName, lastName, currency, country } = this.rootStore.userStore.user;
            this.createUserForm.$("email").set(email);
            this.createUserForm.$("password").set(password);
            this.createUserForm.$("passwordConfirm").set(password);
            this.createUserForm.$("firstName").set(firstName);
            this.createUserForm.$("lastName").set(lastName);
            this.currencyDropdownStore.selectedItem = currency;
            this.countriesDropdownStore.selectedItem = country;
        }
    }

    handleUser = async (type) => {
        try {
            const { email, password, firstName, lastName } = this.createUserForm.values();
            const currency = this.currencyDropdownStore.selectedItem;
            const country = this.countriesDropdownStore.selectedItem;

            if (type === "create") {

                await this.rootStore.service.createUser({ 
                    firstName, 
                    lastName, 
                    email, 
                    password, 
                    currency, 
                    country, 
                });

                this.rootStore.notificationsStore.success("User created successfully");
                this.rootStore.routerStore.goTo("expenses");
            } else {
                this.rootStore.notificationsStore.success("User updated successfully");
                await this.rootStore.service.updateUser({ 
                    firstName, 
                    lastName, 
                    email, 
                    password, 
                    currency, 
                    country, 
                });
                await this.init();
                await this.rootStore.userStore.init();
            }
        } catch(err) {
            console.log(err);
        }
    }

}

export default UserEditStore;