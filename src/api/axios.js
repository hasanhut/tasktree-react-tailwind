import React from "react";
import axios from "axios";

export default axios.create({
    baseURL: "https://localhost:7274/api/",
});
