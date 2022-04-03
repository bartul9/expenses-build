import { axiosInstance as axios } from "config";

class ApiClient {

    constructor(rootStore) {
        this.rootStore = rootStore;
        this.serviceOptions = {
            withCredentials: true
        }    
    }

    async interceptRequest(request) {
        try {
            await request;
        } catch(err) {
            if (err.response.status === 408) {
                this.rootStore.routerStore.goTo("home");
                this.rootStore.notificationsStore.error("Session expired")
            }
        }
        if (!this.rootStore.userStore.user && this.rootStore.mainViewStore.currentRoute !== "home") {
            this.rootStore.routerStore.goTo("home");
        }
        return request;
    }

    async get(url, resources) {
        return await this.interceptRequest(axios.get(url, { params: resources, ...this.serviceOptions }));
    }

    async post(url, data) {
        return await this.interceptRequest(axios.post(url, data, this.serviceOptions));
    }

    async patch(url, data) {
        return await this.interceptRequest(axios.patch(url, data, this.serviceOptions));
    }

    async delete(url) {
        return await this.interceptRequest(axios.delete(url, this.serviceOptions));
    }
}

export default ApiClient;
