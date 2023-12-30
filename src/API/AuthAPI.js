import axios from "axios";

const AuthLoginAPI = async (username, password) => {
    const res = await axios({
        method: "post",
        url: `${process.env.REACT_APP_SERVICE_PORT}/auth/login`,
        headers: {},
        data: {
            username: username,
            password: password,
        },
    });

    return res.data;
};
const AuthProfileAPI = async (id) => {
    const res = await axios({
        method: "post",
        url: `${process.env.REACT_APP_SERVICE_PORT}/auth/profile`,
        headers: {},
        data: {
            id: id,
        },
    });

    return res.data;
};

export const AuthLoginService = (username, password) =>
    AuthLoginAPI(username, password);
export const AuthProfileService = (id) => AuthProfileAPI(id);
