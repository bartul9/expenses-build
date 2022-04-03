import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://monefy-app.herokuapp.com"
})