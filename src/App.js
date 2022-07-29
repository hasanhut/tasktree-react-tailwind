import { React, useState, useEffect, useContext } from "react";
import Content from "./components/Content";
import Navbar from "./components/Navbar";
import AuthContext from "./context/AuthProvider";

function App() {
    const { auth, setAuth } = useContext(AuthContext);
    useEffect(() => {
        console.log(auth);
    });
    return (
        <>
            <Navbar />
            <div className="wrapper">
                <Content />
            </div>
        </>
    );
}

export default App;
