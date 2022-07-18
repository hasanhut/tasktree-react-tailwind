import React from "react";
import { Icon } from "../icons";

function Navbar() {
    return (
        <nav className="h-20 flex-auto bg-gray-700 text-white p-6 flex justify-between">
            <a href="#" className="">
                Projects
            </a>
            <a
                href="/addProject"
                className="hover:bg-pink-700 w-8 rounded-full flex items-center justify-center font-mono"
            >
                <Icon name="add" />
            </a>
        </nav>
    );
}

export default Navbar;
