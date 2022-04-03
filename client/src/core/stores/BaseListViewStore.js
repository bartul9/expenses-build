import { makeObservable, observable } from "mobx";
import moment from "moment";

import LoaderStore from "./LoaderStore";
import TableStore from "./TableStore";


class BaseListViewStore {

    dateValue = { from: new Date(moment().startOf("year")), to: new Date(moment().endOf("year")) };

    constructor(rootStore) {
        makeObservable(this, {
            dateValue: observable
        });

        this.rootStore = rootStore;
        this.loaderStore = new LoaderStore();
    }


    setTableStore = (...args) => {
        this.tableStore = new TableStore(...args);
    }
}

export default BaseListViewStore;