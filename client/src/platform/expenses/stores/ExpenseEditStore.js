import { makeAutoObservable } from "mobx";

import { DropdownStore } from "core/stores";
import { CreateExpenseForm } from "platform/expenses/forms";
import { priorityItems } from "core/priorityItems";


class ExpenseEditStore {

    expense = null;

    get isEdit() {
        return this.id != null;
    }

    constructor(expensesStore, id) {
        makeAutoObservable(this);
        
        this.rootStore = expensesStore.rootStore;
        this.expensesStore = expensesStore;
        this.id = id;

        this.form = new CreateExpenseForm({
            onSuccess: async () => { 
                if(!this.expense){
                    await this.createExpense();
                } else {
                    await this.updateExpense();
                }
                
            },
        });
        
        this.priorityDropdownStore = new DropdownStore(priorityItems, 
            { 
                dataItemKey: "name", label: "Priority" 
            }, 
            { 
                onChange: (value) => {
                    this.form.$("priority").set(value);
                }
            }
        );

        this.init();

    }

    async init() {
        if(this.id) {
            const response = await this.rootStore.service.findExpense(this.id);
            this.expense = response.data;
            const { name, description, cost, isActive, priority } = response.data;
            this.form.$("name").set(name);
            this.form.$("description").set(description);
            this.form.$("cost").set(cost);
            this.form.$("isActive").set(isActive);
            this.priorityDropdownStore.selectedItem = priority;
        }
    }

    createExpense = async () => {
        try {
            await this.rootStore.service.createExpense(this.getFieldsToUpdate());
            await this.rootStore.balanceStore.getBalanceData();
            await this.expensesStore.queryUtility.fetch();

            this.rootStore.notificationsStore.success("Expense created successfully");
        } catch(err) {
            this.rootStore.notificationsStore.error(err.response.data.message || "Error occurred");
        }
    }

    updateExpense = async () => {
        try {
            await this.rootStore.service.updateExpense(this.expense._id, this.getFieldsToUpdate());
            this.rootStore.notificationsStore.success("Expense updated successfully");
            
            await this.init();
            await this.rootStore.balanceStore.getBalanceData();
            await this.expensesStore.queryUtility.fetch();
        } catch(err) {
            this.rootStore.notificationsStore.success("Error occurred");
        }
    }

    toggleCheckbox = () => {
        this.form.$("isActive").value = !this.form.$("isActive").value;
    }

    deleteExpense = async () => {
        try {
            await this.rootStore.service.deleteExpense(this.id);
            await this.rootStore.balanceStore.getBalanceData();
        } catch(err) {
            console.log(err);
        }
    }

    getFieldsToUpdate = () => {
        const { name, description, cost, isActive } = this.form.values();

        const priority = this.priorityDropdownStore.selectedItem;

        return {
            name,
            description,
            cost,
            isActive,
            userId: this.rootStore.userStore.user.userId,
            priority
        };
    }

}

export default ExpenseEditStore;