import { makeAutoObservable } from "mobx";


class LoaderStore {

    isLoading = false;

    constructor() {
        makeAutoObservable(this);
    }

    suspend() {
        this.isLoading = true;
    }

    resume() {
        this.isLoading = false;
    }
}

export default LoaderStore;