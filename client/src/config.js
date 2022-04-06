import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://monify-app.herokuapp.com"
})