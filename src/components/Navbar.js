import React from "react";
import { Icon } from "../icons";
import avatar from "../images/avatar.png";
import { Link } from "react-router-dom";

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

export default Navbar;
