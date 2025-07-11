
import { WindowsFilled } from "@ant-design/icons";
import * as actionTypes from "./types"
import * as authService from "@/auth";

export const login =
    ({ loginData }) =>
        async (dispatch) => {
            dispatch({
                type: actionTypes.REQUEST_LOADING
            });

            const data = await authService.login({ loginData });

            // artification delay
            await new Promise(resolve => setTimeout(resolve, 1000));


            if (data.success === true) {
                const auth_state = {
                    current: data.result,
                    isLoggedIn: true,
                    isLoading: false,
                    isSuccess: true,
                };
                window.localStorage.setItem("auth", JSON.stringify(auth_state));
                window.localStorage.removeItem("isLogout");
                dispatch({
                    type: actionTypes.REQUEST_SUCCESS,
                    payload: data.result
                });
            } else {
                dispatch({
                    type: actionTypes.REQUEST_FAILED,
                });
            }

        };

export const register =
    ({ registerData }) =>
        async (dispatch) => {
            dispatch({ type: actionTypes.REQUEST_LOADING });
            await new Promise(resolve => setTimeout(resolve, 500));

            const data = await authService.register({ registerData });
            console.log(data);

            if (data.success === true) {

            } else {
                dispatch({ type: actionTypes.REQUEST_FAILED });
            }

        };
