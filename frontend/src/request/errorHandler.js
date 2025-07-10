import { Descriptions, notification } from "antd";
import codeMessage from "./codeMessage";
import { notify } from "@/utils/notificationService";


const errorHandler = (error) => {
    if (!navigator.onLine) {
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

    const { response } = error;

    if (!response) {
        notify('error', {
            message: "Problem connecting to server.",
            description: "Cannot connect to server, Try again later.",
        });
        return {
            success: false,
            result: null,
            message: "Cannot connect to the server, Check your internet network",
        }
    }

    console.log('resonse end > ', response);
};

export default errorHandler;