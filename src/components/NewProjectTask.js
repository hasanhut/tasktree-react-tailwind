import React from "react";

function NewProjectTask(props) {
    return props.trigger ? (
        <div className="fixed top-0 left-0 w-full h-screen bg-popUpColor flex justify-center items-center">
            <div className="relative p-8 w-full max-w-screen-sm bg-white">
                <button
                    className="absolute top-4 right-4"
                    onClick={() => props.setTrigger(false)}
                >
                    close
                </button>
                {props.children}
            </div>
        </div>
    ) : (
        ""
    );
}

export default NewProjectTask;
