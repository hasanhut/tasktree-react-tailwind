import React from "react";
import Navbar from "../components/Navbar";
import Content from "../components/Content";

function HomePage() {
    return (
        <>
            <Navbar />
            <div className="wrapper">
                <Content />
            </div>
        </>
    );
}

export default HomePage;
