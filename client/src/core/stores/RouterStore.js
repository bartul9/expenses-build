import {
    browserHistory,
    HistoryAdapter,
    RouterStore as Router,
} from 'mobx-state-router';


class RouterStore extends Router {

    constructor(routes, notFound, rootStore) {
        super(routes, notFound);

        this.historyAdapter = new HistoryAdapter(this, browserHistory);
        this.historyAdapter.observeRouterStateChanges();

        this.rootStore = rootStore;
    }

    goBack = () => {
        this.historyAdapter.goBack()
    }
}

export default RouterStore;