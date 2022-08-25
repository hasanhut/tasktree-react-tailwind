import React from "react";
import avatar from "../images/avatar.png";
import { Link } from "react-router-dom";

function ProjectNavbar(props) {
    return (
        <nav className="h-20 flex-auto bg-gray-700 text-white p-6 flex justify-between">
            <a href="/homePage" className="font-bold text-2xl">
                Projects HomePage
            </a>
            <h1 className="font-bold text-2xl">{props.projectName}</h1>
            <div className="flex justify-center">
                <Link
                    to="/profile"
                    className="rounded-full flex items-center justify-center font-mono p-2"
                >
                    <img
                        className="w-10 h-10 rounded-full"
                        src={avatar}
                        alt="Avatar"
                    />
                </Link>
            </div>
        </nav>
    );
}

export default ProjectNavbar;
