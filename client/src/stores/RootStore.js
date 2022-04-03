import { makeAutoObservable, configure, reaction } from "mobx";
import {
    createRouterState,
} from 'mobx-state-router';

import { MainViewStore, RouterStore, NotificationsStore } from "core/stores";
import { UserStore, BalanceStore } from "platform/user/stores";
import { Service } from "service";
import { mapRoutes } from "core/utils";
import { Routes } from 'routes';

const notFound = createRouterState('notFound');

configure({
    enforceActions: "never",
})

class RootStore {

    constructor() {
        makeAutoObservable(this);
        this.initializeRoutes();

        this.service = new Service(this);
        this.userStore = new UserStore(this);
        this.balanceStore = new BalanceStore(this);
        this.mainViewStore = new MainViewStore(this);
        this.notificationsStore = new NotificationsStore(this);

    }

    initializeRoutes() {
        const [ viewMap, routes ] = mapRoutes(Routes);
        this.viewMap = viewMap;
        this.routerStore = new RouterStore(routes, notFound, this);
    }

}


export default RootStore;