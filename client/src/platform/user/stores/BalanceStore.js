import { computed, makeObservable, observable, reaction } from "mobx";

import { BaseListViewStore } from "core/stores";


class BalanceStore extends BaseListViewStore {

    balanceData = {};
    
    get balance() {
        return this.balanceData.balance;
    }

    constructor(rootStore) {
        super();
        makeObservable(this, {
            balanceData: observable,
            balance: computed
        })
        this.rootStore = rootStore;

        reaction(() => this.rootStore.userStore.isAuthenticated, async isAuthenticated => {
            if(isAuthenticated){
                await this.getBalanceData();
            } 
        })
    }

    async getBalanceData() {
        try {
            const response = await this.rootStore.service.getBalanceData();
            this.balanceData = response.data;

        } catch(err) {
            console.log(err);
        }
    }

    createBalance = async (type, amount) => {
        try {
            await this.rootStore.service.createBalance({ type, amount });
            await this.getBalanceData();
        } catch(err) {
            console.log(err);
        }
    }

}

export default BalanceStore;