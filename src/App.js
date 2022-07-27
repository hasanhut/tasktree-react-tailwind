import { React, useState, useEffect } from "react";
import Content from "./components/Content";
import Navbar from "./components/Navbar";

function App() {
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
