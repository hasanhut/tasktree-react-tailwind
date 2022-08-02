import { React, useState, useEffect, useContext } from "react";
import AuthContext from "./context/AuthProvider";
import Login from "./views/Login";

function App() {
    const { auth, setAuth } = useContext(AuthContext);
    useEffect(() => {
        console.log(auth);
    });
    return (
        <>
            <Login />
        </>
    );
}

export default App;
