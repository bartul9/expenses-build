import { merge } from 'lodash';
import { makeAutoObservable } from 'mobx';

class PaginationStore {
    items = [];
    currentPage = 1;

    options = {
        pageSize: 14,
    }

    get hasItems() {
        return this.items.length > 0;
    }

    get totalPages(){
        return Math.ceil(this.items.length / this.options.pageSize);
    }

    get itemsToRender() {
        const indexOfLastPost = this.currentPage * this.options.pageSize;
        const indexOfFirstPost = indexOfLastPost - this.options.pageSize;
        return this.items.slice(indexOfFirstPost, indexOfLastPost);
    }


    constructor(options) {
        makeAutoObservable(this);
        if (options) merge(this.options, options);
    }
  
    changePage = (event, value) => {
        this.currentPage = value;
    }

    setItems(items) {
        this.currentPage = 1;
        this.items = items || [];
    }
}

export default PaginationStore;