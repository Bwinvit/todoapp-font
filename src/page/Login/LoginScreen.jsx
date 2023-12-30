import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { login } from "../../redux/reducer/authReducer";
import { useNavigate } from "react-router-dom";
import { AuthLoginService } from "../../API/AuthAPI";
import { useAuth } from "../../redux/AuthProvider";
import { jwtDecode } from "jwt-decode";
import { useCookies } from "react-cookie";

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    width: 70%;
    margin: 20vh auto;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

    .form_container {
        .username {
            display: grid;
            grid-template-columns: 1fr 4fr;
            align-items: baseline;
            gap: 1em;
        }
        .password {
            display: grid;
            grid-template-columns: 1fr 4fr;
            align-items: baseline;
            gap: 1em;
        }

        .button {
            width: 100%;
            background-color: ${(props) => props.theme.color.fontText};
            color: ${(props) => props.theme.color.primary};
        }
    }
`;

const Label = styled.label`
    margin-bottom: 0.5rem;
    font-weight: bold;
`;

const Input = styled.input`
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
    margin-bottom: 1rem;
    font-size: 16px;

    &:focus {
        outline: none;
        border-color: #666;
    }
`;

const Button = styled.button`
    background-color: #4285f4;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 3px;
    cursor: pointer;

    &:hover {
        background-color: #357ae8;
    }
`;

const LoginScreen = () => {
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [cookies, setCookies] = useCookies(["auth"]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await AuthLoginService(username, password).then((res) => {
            dispatch(login(res));

            const decodeToken = jwtDecode(res.token);
            setCookies("authToken", res.token, {
                path: "/",
                expires: new Date(decodeToken.exp * 1000),
            });
        });
    };

    useEffect(() => {
        if (auth.success) {
            navigate("/");
        }
    }, [auth]);

    return (
        <FormContainer>
            <h2>Login Form</h2>
            <form onSubmit={handleSubmit} className="form_container">
                <div className="username">
                    <Label htmlFor="username">Username:</Label>
                    <Input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="password">
                    <Label htmlFor="password">Password:</Label>
                    <Input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <Button type="submit" className="button">
                    Login
                </Button>
            </form>
        </FormContainer>
    );
};

export default LoginScreen;
