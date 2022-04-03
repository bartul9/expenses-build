import { merge } from "lodash";
import { makeAutoObservable } from "mobx";


class DropdownStore {

    options = {
        dataItemKey: "id",
        dataItemValue: "name",
        label: "",
        placeholder: ""
    }

    actions = {
        onChange: null
    }

    items = [];
    selectedItem = "";

    constructor(items = [], options, actions) {
        makeAutoObservable(this);
        merge(this.options, options);
        merge(this.actions, actions);
        this.setItems(items);
    }

    setItems(items) {
        this.items = items;
    }

    handleChange = (e) => {
        this.selectedItem = e.target.value;
        if(this.actions.onChange) {
            this.actions.onChange(e.target.value);
        }
    }
};

export default DropdownStore;