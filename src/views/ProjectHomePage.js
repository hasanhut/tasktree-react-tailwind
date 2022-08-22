import React from "react";
import Navbar from "../components/Navbar";
import ProjectSideBar from "../components/ProjectSideBar";
import ProjectContent from "../components/ProjectContent";

function ProjectHomePage() {
    return (
        <>
            <Navbar />
            <div className="wrapper @apply flex">
                <ProjectSideBar />
                <ProjectContent />
            </div>
        </>
    );
}

export default ProjectHomePage;
