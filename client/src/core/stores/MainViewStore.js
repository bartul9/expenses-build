import { makeAutoObservable } from "mobx";

class MainViewStore {

    get showUi() {
        return this.rootStore.routerStore.routerState.routeName !== "home" && this.rootStore.routerStore.routerState.routeName !== "createUser";
    }

    get currentRoute() {
       return this.rootStore.routerStore.routes.find(r => r.name === this.rootStore.routerStore.routerState.routeName).title;
    }
    
    constructor(rootStore){
        makeAutoObservable(this);
        this.rootStore = rootStore;
    }
}

export default MainViewStore;