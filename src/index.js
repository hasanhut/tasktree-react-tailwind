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
import Profile from "./views/Profile";
import ProjectHomePage from "./views/ProjectHomePage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <AuthProvider>
            <Routes>
                <Route path="/homePage" exact element={<HomePage />} />
                <Route path="/register" element={<Register />} />
                <Route path="/" element={<App />} />
                <Route path="/addProject" element={<AddProject />} />
                <Route
                    path="/project/:projectId"
                    element={<ProjectHomePage />}
                />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </AuthProvider>
    </BrowserRouter>
);
