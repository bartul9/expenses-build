import { makeObservable, observable, computed } from "mobx";
import moment from "moment";
import { orderBy } from "lodash";

import { BaseListViewStore, QueryUtility } from "core/stores";

import { depositIcon, expenseIcon, highestExpenseIcon } from "assets";

import { TableBooleanCell, TableColoredCell } from "core/components";

import { parseMoney } from "core/utils/parseMoney";
import { parseDate } from "core/utils/parseDate";

class ExpensesStore extends BaseListViewStore {

    expenses = null;
    sliderType = null;
    statisticData = null;
    expenseId = null;

    get currency() {
        return this.rootStore.userStore.currency;
    }

    get chartData() {
        return this.statisticData && orderBy(this.statisticData.items, this.tableStore.filter.orderBy, this.tableStore.filter.order).map(i => (
            { ...i, "Expense cost": i.cost, createdAt: parseDate(i.createdAt), Balance: i.balance }));
    }

    get cardsData() {
        return this.statisticData && {
            depositCardData: { color: "#2195f3a8", icon: depositIcon, name: "Deposits", value: parseMoney(this.rootStore.balanceStore.balanceData.deposits, this.currency)},
            expensesCardData: { color: "#d9544f98", icon: expenseIcon, name: "Withdrawals", value: parseMoney(Math.abs(this.rootStore.balanceStore.balanceData.withdrawals), this.currency)},
            highestExpense: { color: "#f0ad4e", icon: highestExpenseIcon, name: "Highest expense", value: parseMoney(this.statisticData.highestExpense, this.currency)},
        }
    }

    constructor(rootStore) {
        super();
        makeObservable(this, {
            expenses: observable,
            sliderType: observable,
            statisticData: observable,
            expenseId: observable,
            currency: computed,
            chartData: computed,
            cardsData: computed,
        })

        this.rootStore = rootStore;

        this.queryUtility = new QueryUtility(rootStore, async filter => {
            filter.from = moment(this.dateValue.from).toDate();
            filter.to = moment(this.dateValue.to).toDate();

            await this.getExpenses(filter);
            await this.getChartData(filter)
        });

        this.setTableStore(this.queryUtility,   
            [
                {
                    id: 'name',
                    numeric: false,
                    disablePadding: true,
                    label: 'Name',
                    sortable: true,
                    headerClass: "cell--width--100 cell--hide--text"
                },
                {
                    id: 'cost',
                    numeric: true,
                    disablePadding: false,
                    label: 'Cost',
                    sortable: true,
                    className:"txt--type--money-table" ,
                    headerClass: "cell--width--100"
                },    
                {
                    id: 'balance',
                    numeric: true,
                    disablePadding: false,
                    label: 'Balance',
                    sortable: true,
                    className:"txt--type--money-table" ,
                    headerClass: "cell--width--100"
                },
                {
                    id: 'description',
                    label: 'Description',
                    sortable: false,
                    className: "description--cell"
                },
                {
                    id: 'priority',
                    numeric: true,
                    disablePadding: false,
                    label: 'Priority',
                    align: "left",
                    className: "priority--cell",
                    Cell: TableColoredCell
                },
                {
                    id: 'createdAt',
                    numeric: true,
                    disablePadding: false,
                    label: 'Created at',
                    align: "left",
                    sortable: true,
                    headerClass: "cell--width--150"
                },
                {
                    id: 'isActive',
                    numeric: false,
                    disablePadding: false,
                    align: "left",
                    label: 'Active',
                    Cell: TableBooleanCell
                },
                {
                    label: "Actions",
                    disablePadding: true,
                    align: "right"

                }
            ],
            {
                title: "Expenses"
            }, 
            {
                edit: (_id) => this.editExpense(_id),
                remove: (_id) => this.deleteExpense(_id),
            }
        );

        this.init();
    }
    
    async init() {
        try {
            this.loaderStore.suspend();
            await this.queryUtility.fetch();     
            await this.getChartData(); 
        } catch(err) {
            console.log(err);
        } finally {
            this.loaderStore.resume();
        }
    }

    getExpenses = async (filter) => {
        try {
            this.tableStore.isLoading = true;
            const expenses = await this.rootStore.service.getExpenses(filter);
            this.expenses = expenses.data;
            this.tableStore.setData(expenses.data.items.map(e => ({ ...e, cost: parseMoney(e.cost, this.currency), balance: parseMoney(e.balance, this.currency), createdAt: parseDate(e.createdAt, "DD-MM-YYYY HH:mm") })), expenses.data.quantity);
       
        } catch(err) {
            console.log(err);
        } finally {
            this.tableStore.isLoading = false;
        }
    }

    async getChartData() {
        try {
            const { from, to } = this.dateValue;
            const response = await this.rootStore.service.getChartData({ from, to });
            this.statisticData = response.data;
        } catch(err) {
            console.log(err);
        }
    }

    editExpense = (id) => {
        this.expenseId = id;
        this.sliderType = "expense";
    }

    setDate = (date, type) => {
        this.dateValue[type.toLowerCase()] = date; 
    }

    deleteExpense = async (id) => {
        try {
            await this.rootStore.service.deleteExpense(id);

            await this.rootStore.balanceStore.getBalanceData();            
            await this.queryUtility.fetch();

            this.rootStore.notificationsStore.success("Expense deleted successfully");
        } catch(err) {
            console.log(err);
        }
    }

    openSlider = (type) => {
        this.sliderType = type;
        this.expenseId = null;
    }

    closeSlider = () => {
        this.sliderType = null;
        this.expenseId = null;
    }

    onFilterClick = async () => {
        await this.queryUtility.fetch();
    }

}

export default ExpensesStore;