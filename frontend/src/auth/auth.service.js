import axios from "axios";
import { API_BASE_URL } from "@/config/serverApiConfig";
import errorHandler from "@/request/errorHandler";

export const login = async ({ loginData }) => {
    try {
        const response = await axios.post(
            API_BASE_URL + `login?timestamp=${new Date().getTime()}`,
            loginData
        );
        console.log('response > ', response);
    } catch (error) {
        console.log('error > ', error);
        return errorHandler(error);
    }
};