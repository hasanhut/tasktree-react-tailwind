import React from "react";

function Content() {
    return (
        <div className="flex flex-auto h-full">
            <span className="m-6 outline outline-1 h-72 w-72 rounded-md">
                <span className="bg-projectgray flex flex-auto p-5 h-16 text-sm font-bold">
                    <a href="#"> Project 1</a>
                </span>
                <span className="bg-projectwhite flex flex-auto h-56 p-2">
                    <a> Some details ....</a>
                </span>
            </span>
            <span className="m-6 outline outline-1 h-72 w-72 rounded-md">
                <span className="bg-projectgray flex flex-auto p-5 h-16 text-sm font-bold">
                    <a href="#"> Project 2</a>
                </span>
                <span className="bg-projectwhite flex flex-auto h-56 p-2">
                    <a> Some details ....</a>
                </span>
            </span>
        </div>
    );
}

export default Content;
