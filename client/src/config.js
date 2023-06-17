import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://monify-app-75e153959749.herokuapp.com"
})
