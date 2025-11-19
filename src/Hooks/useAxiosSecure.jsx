import axios from "axios";
import { use, useEffect } from "react";
import { AuthContext } from "../Context/AuthContext/AuthContext";
import { useNavigate } from "react-router";


const instance = axios.create({
    baseURL: `http://localhost:5025`
})

const useAxiosSecure = () => {
    const { user, logOut } = use(AuthContext);
    const path = useNavigate();
    //setting the token in the header for all api call using axios secure hook
    useEffect(() => {
        const requestInterceptor = instance.interceptors.request.use((config) => {
            config.headers.authorization = `Bearer ${user.accessToken}`
            return config;
        })

        //here will be interceptor for the response
        const responseInterceptor = instance.interceptors.response.use((response) => {
            return response;
        }, (error) => {
            const status = error.status;
            if (status === 401 || status === 403) {
                // console.log('Loging out the user for the bad request!');
                logOut()
                    .then(() => {
                        path('/login');
                    })
            }
        })

        return () => {
            instance.interceptors.request.eject(requestInterceptor);
            instance.interceptors.response.eject(responseInterceptor);
        }
    }, [user, path, logOut])

    return instance;
}
export default useAxiosSecure;