import axios from "axios";
import { use } from "react";
import { AuthContext } from "../Context/AuthContext/AuthContext";


const instance = axios.create({
    baseURL: `http://localhost:5025`
})

const useAxiosSecure = () => {
    const { user } = use(AuthContext);
    //setting the token in the header for all api call using axios secure hook
    instance.interceptors.request.use((config) => {
        console.log(config);
        config.headers.authorization = `Bearer ${user.accessToken}`
        return config;
    })
    return instance;
}
export default useAxiosSecure;