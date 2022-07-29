import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddProject from "./views/AddProject";
import Login from "./views/Login";
import Register from "./views/Register";
import { AuthProvider } from "./context/AuthProvider";
import "flowbite";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <AuthProvider>
            <Routes>
                <Route path="/login" exact element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/*" element={<App />} />
                <Route path="/addProject" element={<AddProject />} />
            </Routes>
        </AuthProvider>
    </BrowserRouter>
);
