import axios, { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from "axios"

class Api {
    // class members/properties
    private static instance: Api // to maintain single instance and avoid creating multiple instances
    private axiosInstance: AxiosInstance // only one instance that has all axios configuration

    // static variables share same copy to all class instances - any modification reflects all 
    // constructor does not create new 'instance' everytine a new instance of Api is created because static
    constructor() { // where class members/properties gets initialized
        console.log(process.env.REACT_APP_API_BASE_URL)
        this.axiosInstance = axios.create({
            baseURL: 'http://localhost:4000/api/',
            timeout: 5000
        })

        // request-> config
        this.axiosInstance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
            if (config.url !== 'users/login' && config.url !== 'users/register') {
                if (sessionStorage.getItem('authtoken') !== null)
                    config.headers.Authorization = sessionStorage.getItem('authtoken')
            }
            return config
        }, (error) => {
            return Promise.reject()
        })

        // response -> response
        this.axiosInstance.interceptors.response.use((response: AxiosResponse) => {
            console.log(response.config.url)
            if (response.config.url === 'users/login') {
                sessionStorage.removeItem('authtoken')
                sessionStorage.setItem('authtoken', response.data.token)
            }
            return response
        }, (error) => {
            return Promise.reject()
        })
    }

    public static getInstance(): AxiosInstance { // direct access - no new instance needed to be created
        if (!Api.instance) { // single instance is created here
            Api.instance = new Api()
            // instance can be directly accessed by class name without creating instance because it is a static
        }
        return Api.instance.axiosInstance
        // same instance is returned always Api.getInstance and outside world does not need to know how instance doing
    }
}

export default Api
