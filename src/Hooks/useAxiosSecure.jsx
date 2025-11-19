import axios from "axios";
import { use, useEffect } from "react";
import { AuthContext } from "../Context/AuthContext/AuthContext";


const instance = axios.create({
    baseURL: `http://localhost:5025`
})

const useAxiosSecure = () => {
    const { user } = use(AuthContext);
    //setting the token in the header for all api call using axios secure hook
    useEffect(() => {
        const requestInterceptor = instance.interceptors.request.use((config) => {
            config.headers.authorization = `Bearer ${user.accessToken}`
            return config;
        })

        return () => {
            instance.interceptors.request.eject(requestInterceptor);
        }
    }, [user])

    return instance;
}
export default useAxiosSecure;