import { makeAutoObservable } from "mobx";


class QueryUtility {
    
    filter = {
        orderBy: "createdAt",
        searchQuery: "",
        rpp: 5,
        page: 0,
        order: "asc",
    }

    constructor(rootStore, onFetch = () => {}) {
        makeAutoObservable(this);
        this.rootStore = rootStore;
        this.onFetch = onFetch;
    }

    fetch = async (filter) => {
        await this.onFetch({ ...this.filter, ...filter });
    }

}

export default QueryUtility;