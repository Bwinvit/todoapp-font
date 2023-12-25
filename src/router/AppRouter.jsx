import { Routes, Route } from "react-router-dom";
import LoginScreen from "../page/Login/LoginScreen";
import styled from "styled-components";

const WrapperComponent = styled.div`
      width: 100vw;
      height: 100vh;
      background-color: ${props => props.theme.color.primary};
      color: ${props => props.theme.color.fontText};
`;
const MainComponent = styled.div``;

export const AppRoutes = () => {
    return (
        <WrapperComponent>
            <MainComponent>
                <Routes>
                    <Route path="/" element={<>Home</>} />
                    <Route path="/login" element={<LoginScreen />} />
                </Routes>
            </MainComponent>
        </WrapperComponent>
    );
};
