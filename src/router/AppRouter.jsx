import { Routes, Route, Outlet } from "react-router-dom";
import LoginScreen from "../page/Login/LoginScreen";
import styled from "styled-components";
import NavBar from "../page/Nav/NavBar";
import { useSelector } from "react-redux";
import ProtectedRoute from "../utils/ProtectedRoute";
import Home from "../page/Home/Home";

const WrapperComponent = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.color.primary};
    color: ${(props) => props.theme.color.fontText};
`;
const MainComponent = styled.div`
    padding: 2em;
`;

export const AppRoutes = () => {
    return (
        <WrapperComponent>
            <MainComponent>
                <NavBar />
                <Routes>
                    <Route element={<ProtectedRoute />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/dashboard" element={<>dashboard</>} />
                        <Route path="/profile" element={<>profile</>} />
                    </Route>
                    <Route path="/login" element={<LoginScreen />} />
                    <Route path="*" element={<>404 Not Found</>} />
                </Routes>
            </MainComponent>
        </WrapperComponent>
    );
};
