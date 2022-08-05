import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddProject from "./views/AddProject";
import Register from "./views/Register";
import { AuthProvider } from "./context/AuthProvider";
import "flowbite";
import HomePage from "./views/HomePage";
import DetailedProject from "./views/DetailedProject";
import Profile from "./views/Profile";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <AuthProvider>
            <Routes>
                <Route path="/homePage" exact element={<HomePage />} />
                <Route path="/register" element={<Register />} />
                <Route path="/" element={<App />} />
                <Route path="/addProject" element={<AddProject />} />
                <Route path="/detailed" element={<DetailedProject />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </AuthProvider>
    </BrowserRouter>
);
