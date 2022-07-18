import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddProject from "./views/AddProject";
import "flowbite";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/*" element={<App />} />
            <Route path="/addProject" element={<AddProject />} />
        </Routes>
    </BrowserRouter>
);
