import { merge } from "lodash";
import { makeAutoObservable, reaction } from "mobx";


class TableStore {

    config = {
      title: "Table",
    }

    isLoading = false;
    actions = {};
    columns = [];
    data = [];
    quantity;

    filter = {
      rpp: 5,
      page: 0,
      orderBy: "createdAt",
      order: "asc",
    }

    get emptyRows() {
      return this.filter.page > 0 ? Math.max(0, (1 + this.filter.page) * this.filter.rpp - this.renderData.length) : 0;
    }

    get renderData() {
      return this.data;
    }

    get hasData() {
      return this.data.length > 0;
    }

    get allSelected() {
      return this.data.length === this.selectedItems.length;
    }

    constructor(queryUtility, columns, config, actions) {
      makeAutoObservable(this);
      
      this.queryUtility = queryUtility;
      this.columns = columns;
      this.actions = actions;
      merge(this.config, config);

      this.queryUtilityReactionDisposer = reaction(() => ({
        order: this.filter.order,
        orderBy: this.filter.orderBy,
        page: this.filter.page,
        rpp :this.filter.rpp,
      }), 
      async filter => {
        await this.queryUtility.fetch(filter);
      });

    }

    handleChangePage = (event, newPage) => {
        this.filter.page = newPage;
    };
    
    handleChangeRowsPerPage = (event) => {
        this.filter.rpp = parseInt(event.target.value, 10);
        this.filter.page = 0;
    };

    toggleOrderDirection = (orderBy) => {
        this.filter.orderBy = orderBy;
        this.filter.order = this.filter.order === "asc" ? "desc" : "asc";
    };

    setData = (data, quantity) => {
        this.data = data;
        this.quantity = quantity;
    }

    onDispose = () => {
      this.resetFilter();
      this.queryUtilityReactionDisposer();
    }

    resetFilter = () => {
      this.filter = {
        rpp: 5,
        page: 0,
        orderBy: "createdAt",
        order: "asc",
      }
    }
}

export default TableStore;