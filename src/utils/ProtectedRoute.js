import React from "react";
import { Navigate, Outlet, Routes, useLocation } from "react-router-dom";
import { useCookies } from "react-cookie";

const ProtectedRoute = () => {
    const [cookies ] = useCookies(["auth"]);
    let location = useLocation();

    return (
        cookies.authToken ? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace />
    )
};

export default ProtectedRoute;
