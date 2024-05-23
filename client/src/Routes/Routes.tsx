import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MainPage from "../Pages/MainPage/MainPage";
import AuthPage from "../Pages/AuthPage/AuthPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {path: '', element: <MainPage />},
            {path: 'auth', element: <AuthPage />},
        ]
    }
])