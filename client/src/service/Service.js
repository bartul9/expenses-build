import ApiClient from "./ApiClient";

class Service {

    base = "/api"

    constructor(rootStore) {
        this.rootStore = rootStore;
        this.apiClient = new ApiClient(rootStore);
    }

    // ------------------------------------------------------------------------------------
    // Expenses
    async getExpenses(resources) {
        const response = await this.apiClient.get(`${this.base}/expenses`, resources);
        return response;
    }

    async findExpense(id) {
        const response = await this.apiClient.get(`${this.base}/expenses/${id}`);
        return response;
    }

    async createExpense(resources) {
        const response = await this.apiClient.post(`${this.base}/expenses`, resources);
        return response;
    }

    async deleteExpense(id) {
        const response = await this.apiClient.delete(`${this.base}/expenses/${id}`);
        return response;
    }

    async updateExpense(id, resources) {
        const response = await this.apiClient.patch(`${this.base}/expenses/${id}`, resources);
        return response;
    }

    // ------------------------------------------------------------------------------------
    // Users
    async createUser(resources) {
        const response = await this.apiClient.post(`${this.base}/users`, resources);
        return response;
    }

    async updateUser(resources) {
        const response = await this.apiClient.patch(`${this.base}/users`, resources);
        return response;
    }

    async getUser() {
        const response = await this.apiClient.get(`${this.base}/users`);
        return response;
    }

    async loginUser(resources) {
        const response = await this.apiClient.post(`${this.base}/users/login`, resources);
        return response;
    }
    
    async logoutUser() {
        const response = await this.apiClient.get(`${this.base}/users/logout`);
        return response;
    }

    // ------------------------------------------------------------------------------------
    // Deposit
    async getBalanceData(resources) {
        const response = await this.apiClient.get(`${this.base}/balances`, resources);
        return response;
    }

    async createBalance(resources) {
        const response = await this.apiClient.post(`${this.base}/balances`, resources);
        return response;
    }
}


export default Service