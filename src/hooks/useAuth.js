import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { refresh } from "../redux/userSlice";

export const useAuth = () => {
    const refreshToken = Cookies.get("refresh");
    const { accessToken } = useSelector((state) => state.user);
    const [isAuthenticated, setIsAuthenticated] = useState(!!refreshToken);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!accessToken && refreshToken) {
            const user = jwtDecode(refreshToken);
            const isExisted = user.exp > moment().unix() + 1;

            if (isExisted) {
                dispatch(refresh()).then(() => {
                    setIsAuthenticated(true);
                });
            } else {
                setIsAuthenticated(false);
            }
        } else {
            setIsAuthenticated(false);
        }
    }, [refreshToken, dispatch, accessToken]);

    return isAuthenticated;
};
