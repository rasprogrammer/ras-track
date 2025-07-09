import { Descriptions, notification } from "antd";
import codeMessage from "./codeMessage";
import { notify } from "@/utils/notificationService";


const errorHandler = (error) => {
    if (!navigator.onLine) {        

        notification.config({
            duration: 15,
            maxCount: 1,
        });

        notify('error', {
            message: "No internet connection",
            description: "Cannot connet to the Internet, Check your internet network"
        });

        return {
            success: false,
            result: null,
            message: "Cannot connect to the server, Check your internet network",
        }
    }


    return {
        success: false,
        result: null,
        message: "Cannot connect to the server, Check your internet network",
    }
};

export default errorHandler;