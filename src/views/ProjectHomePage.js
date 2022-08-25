import React from "react";
import ProjectNavbar from "../components/ProjectNavbar";
import ProjectSideBar from "../components/ProjectSideBar";
import ProjectContent from "../components/ProjectContent";
import { useLocation } from "react-router-dom";

function ProjectHomePage() {
    const location = useLocation();
    const { name } = location.state;
    return (
        <>
            <ProjectNavbar projectName={name} />
            <div className="wrapper @apply flex">
                <ProjectSideBar />
                <ProjectContent />
            </div>
        </>
    );
}

export default ProjectHomePage;
