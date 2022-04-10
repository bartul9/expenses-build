import { makeAutoObservable } from "mobx";
import { LoginForm } from "platform/user/forms";


class UserStore {

    user = null;

    get isAuthenticated() {
        return this.user != null;
    }

    get currency() {
        if(this.user) {
            switch(this.user.currency) {
                case "USD":
                    return "$";
                case "EUR":
                    return "€";
                case "GBP":
                    return "£";
                case "HRK":
                    return "kn";
                default: return "";
            }
        }
        return "";
    }

    get userFullName() {
        return this.user && this.user.firstName + " " + this.user.lastName;
    }

    constructor(rootStore) {
        makeAutoObservable(this);

        this.rootStore = rootStore;

        this.loginForm = new LoginForm({
            onSuccess: async () => { 
                await this.loginUser();  
                this.loginForm.clear();              
            },
            onError:() => {}
        });

        this.init();
    }

    async init() {
        try {
            const response = await this.rootStore.service.getUser();
            this.user = response.data;

            if(this.user){
                const route = this.rootStore.routerStore.routerState.routeName;

                if(route === "home" || route === "createUser") {
                    this.rootStore.routerStore.goTo("expenses");
                }

            } else {
                this.rootStore.routerStore.goTo("home");
            }
        } catch(err) {
            console.log(err);
        } 
    }

    loginUser = async () => {
        try{ 
            const { email, password } = this.loginForm.values();
            const response = await this.rootStore.service.loginUser({
                email: email,
                password: password
            })
            this.user = response.data;
            
            this.rootStore.notificationsStore.success("User logged in successfully");
            this.rootStore.routerStore.goTo("expenses");
        } catch(err) {
            this.rootStore.notificationsStore.error(err.response.data.message)
        }
    }

    logoutUser = async () => {
        try{
            await this.rootStore.service.logoutUser();
            this.user = null;
            this.loginForm.clear();
            this.rootStore.notificationsStore.success("User logged out succesfully");
            this.rootStore.routerStore.goTo("home");
        } catch(err) {
            console.log(err);
        }
    }

}

export default UserStore;