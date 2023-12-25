import React, { useState } from "react";
import styled from "styled-components";

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    width: 300px;
    margin: 0 auto;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
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
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Username:", username, "Password:", password);
    };

    return (
        <FormContainer>
            <h2>Login Form</h2>
            <form onSubmit={handleSubmit}>
                <Label htmlFor="username">Username:</Label>
                <Input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <Label htmlFor="password">Password:</Label>
                <Input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button type="submit">Login</Button>
            </form>
        </FormContainer>
    );
};

export default LoginScreen;
