import React from "react";
import { Icon } from "../icons";

function ProjectSideBar() {
    return (
        <div className="w-60 h-screen bg-gray-100">
            <div className="p-3">
                <ul className="flex flex-col">
                    <li className="mb-2 flex">
                        <a
                            href="#"
                            className="flex items-center text-sm font-semibold rounded active:text-blue-400"
                        >
                            <div className="m-2">
                                <Icon name="dashboardIcon" />
                            </div>
                            Dashboard
                        </a>
                    </li>
                    <li className="mb-2 flex">
                        <a
                            href="#"
                            className="flex items-center text-sm font-semibold rounded active:text-blue-400"
                        >
                            <div className="m-2">
                                <Icon name="reportIcon" size={16} />
                            </div>
                            Reports
                        </a>
                    </li>
                    <li className="mb-2 flex">
                        <a
                            href="#"
                            className="flex items-center text-sm font-semibold rounded active:text-blue-400"
                        >
                            <div className="m-2">
                                <Icon name="dashboardIcon" />
                            </div>
                            DENEME
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default ProjectSideBar;
