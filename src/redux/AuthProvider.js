import axios from "axios";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useCookies } from "react-cookie";
import { AuthProfileService } from "../API/AuthAPI";
import { useDispatch } from "react-redux";
import { profile } from "./reducer/authReducer";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [cookies, setCookies, removeCookie] = useCookies(["auth"]);
    const dispatch = useDispatch()

    const checkExpire = async () => {
        const now = Math.floor(Date.now() / 1000);
        const decodeToken = jwtDecode(cookies.authToken);

        if (decodeToken.exp < now) {
            removeCookie("authToken");
        }

        await AuthProfileService(decodeToken.userId).then(res => {
            dispatch(profile(res))
        })
    };

    useEffect(() => {
        if (cookies.authToken) {
            checkExpire();
        }
    }, [cookies]);

    return <AuthContext.Provider value={[]}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    return useContext(AuthContext);
};

export default AuthProvider;
