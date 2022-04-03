import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://monify-expenses-app.herokuapp.com"
})