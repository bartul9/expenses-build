import { makeAutoObservable } from "mobx";

class HomeStore {



    constructor(rootStore) {
        makeAutoObservable(this);
        this.rootStore = rootStore;
    }

}

export default HomeStore;