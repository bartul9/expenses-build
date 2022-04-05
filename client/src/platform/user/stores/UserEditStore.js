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
                this.createUserForm.clear();
            },
            onError:() => {}
        });

        this.currencyDropdownStore = new DropdownStore(
            currenciesList, 
            { 
                dataItemValue: "text", 
                dataItemKey: "code", 
                label: "Currency" 
            },
            {
                onChange: (currency) => this.createUserForm.$("currency").onChange(currency)
            }
        );

        this.countriesDropdownStore = new DropdownStore(
            countryList.map(i => ({name: i, id:i})),
            { 
                label: "Country" 
            },
            {
                onChange: (country) => this.createUserForm.$("country").onChange(country)
            }
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
            this.createUserForm.$("currency").set(currency);
            this.createUserForm.$("country").set(country);
        }
    }

    // Have to fix bug when updatin user country somethint doesnt work fine, so everything in form is lost after save
    handleUser = async (type) => {
        try {
            const { email, password, firstName, lastName, currency, country } = this.createUserForm.values();

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
                await this.rootStore.service.updateUser({ 
                    firstName, 
                    lastName, 
                    email, 
                    password, 
                    currency, 
                    country, 
                });
                this.rootStore.notificationsStore.success("User updated successfully");
                await this.rootStore.userStore.init();

                await this.init();
            }
        } catch(err) {
            this.rootStore.notificationsStore.error(err.response.data.message);
        }
    }

}

export default UserEditStore;