// import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./router/AppRouter";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import MyThemeProvider from "./Theme/ThemeProvider";

function App() {
    return (
        <MyThemeProvider>
            <Provider store={store}>
                <BrowserRouter>
                    <AppRoutes />
                </BrowserRouter>
            </Provider>
        </MyThemeProvider>
    );
}

export default App;
