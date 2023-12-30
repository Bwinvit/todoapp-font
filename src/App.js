// import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./router/AppRouter";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import MyThemeProvider from "./Theme/ThemeProvider";
import AuthProvider from "./redux/AuthProvider";
import { CookiesProvider } from "react-cookie";

function App() {
    return (
        <Provider store={store}>
            <MyThemeProvider>
                <CookiesProvider>
                    <AuthProvider>
                        <BrowserRouter>
                            <AppRoutes />
                        </BrowserRouter>
                    </AuthProvider>
                </CookiesProvider>
            </MyThemeProvider>
        </Provider>
    );
}

export default App;
