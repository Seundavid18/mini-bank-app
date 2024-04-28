import axios from 'axios'

export const axiosInstance = axios.create({
    baseURL: "https://seunbankapp.azurewebsites.net/api"
    //baseURL: "http://localhost:8080/api"
})