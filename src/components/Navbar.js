import React from "react";
import { Icon } from "../icons";
import avatar from "../images/avatar.png";

function Navbar() {
    return (
        <nav className="h-20 flex-auto bg-gray-700 text-white p-6 flex justify-between">
            <a href="#" className="">
                Projects
            </a>
            <div className="flex justify-center">
                <a
                    href="/addProject"
                    className="hover:bg-pink-700 w-8 rounded-full flex items-center justify-center font-mono"
                >
                    <Icon name="add" />
                </a>
                <a
                    href="/profile"
                    className="rounded-full flex items-center justify-center font-mono p-2"
                >
                    <img
                        className="w-10 h-10 rounded-full"
                        src={avatar}
                        alt="Avatar"
                    />
                </a>
            </div>
        </nav>
    );
}

export default Navbar;
