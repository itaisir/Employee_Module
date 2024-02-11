import axios, { AxiosHeaders, AxiosInstance } from "axios";
import { CURRENT_BASE_URL } from "./apiConstants";
import { errorHanlder } from "./errorHandler";

declare module 'axios' {
    export interface AxiosResponse<T = any> extends Promise<T> { }
}
class APIManger {
    axiosInstance: AxiosInstance;
    static sessionExpiredToastShown: boolean = false;

    token: string = ""

    constructor() {
        this.token = localStorage.getItem("Token") || "";
        this.axiosInstance = axios.create({ baseURL: CURRENT_BASE_URL });
        this.axiosInstance.interceptors.response.use((response) => {
            // Any status code that lie within the range of 2xx cause this function to trigger
            // Do something with response data
            if (response.data.hasOwnProperty('detail'))
                return response.data.detail;
            return response.data;
        }, (error) => {
            // Any status codes that falls outside the range of 2xx cause this function to trigger
            // Do something with response error
            errorHanlder(error);
            /**
             * TODO: Handle errors that require UI
             */
            return error;
        });
        this.axiosInstance.interceptors.request.use((request) => {
            const headers = new AxiosHeaders();
            headers.set('Content-type', `application/json`);
            if (this.token && this.token !== '')
                headers.set('Authorization', `Token ${this.token}`);
            request.headers = headers;
            return request
        }, (error) => {
            // Any status codes that falls outside the range of 2xx cause this function to trigger
            // Do something with response error
            errorHanlder(error);
            return Promise.reject(error);
        });
    }

    get = async (url: string) => this.axiosInstance.get(url)

    delete = async (url: string, data?:object) => this.axiosInstance.delete(url, { data: data })

    post = async (url: string, data?:object) => this.axiosInstance.post(url, data)

    put = async (url: string, data:object) => this.axiosInstance.put(url, data)

    // this function is implemeted at the AuthContext 
    static logout(): void { };
}

export default APIManger