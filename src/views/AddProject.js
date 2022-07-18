import React, { useState } from "react";
import axios from "axios";
const url = "https://localhost:7274/api/project";

function AddProject() {
    const [projectName, setProjectName] = useState("");
    const [projectExplanation, setProjectExplanation] = useState("");
    const postData = () => {
        axios.post(url, {
            projectName,
            projectExplanation,
        });
    };
    return (
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <img
                        className="mx-auto h-12 w-auto"
                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                        alt="Workflow"
                    />
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Create a TaskTree Project
                    </h2>
                </div>
                <form className="mt-8 space-y-6" action="#" method="POST">
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="projectName" className="sr-only">
                                Project Name
                            </label>
                            <input
                                id="projectName"
                                name="projectName"
                                required
                                className="appearance-none rounded-none relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-t-md
                  focus:outline-none focus:ring-indigo-500
                  focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Project Name"
                                onChange={(e) => setProjectName(e.target.value)}
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="projectExplanation"
                                className="sr-only"
                            >
                                Project Explanation
                            </label>
                            <input
                                id="projectExplanation"
                                name="projectExplanation"
                                required
                                className="appearance-none rounded-none relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-b-md
                  focus:outline-none focus:ring-indigo-500
                  focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Project Explanation"
                                onChange={(e) =>
                                    setProjectExplanation(e.target.value)
                                }
                            />
                        </div>
                        {/*<div>
                            <label htmlFor="start-date" className="sr-only">
                                Project Start-Date
                            </label>
                            <input
                                id="start-date"
                                name="start-date"
                                required
                                className="appearance-none rounded-none relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-b-md
                  focus:outline-none focus:ring-indigo-500
                  focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Project Start-Date"
                            />
                        </div>
                        <div>
                            <label htmlFor="end-date" className="sr-only">
                                Project End-Date
                            </label>
                            <input
                                id="end-date"
                                name="end-date"
                                required
                                className="appearance-none rounded-none relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-b-md
                  focus:outline-none focus:ring-indigo-500
                  focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Project End-Date"
                            />
                        </div>*/}
                    </div>

                    <div>
                        <button
                            type="submit"
                            onClick={postData}
                            className="group relative w-full flex justify-center
                py-2 px-4 border border-transparent text-sm font-medium
                rounded-md text-white bg-indigo-600 hover:bg-indigo-700
                focus:outline-none focus:ring-2 focus:ring-offset-2
                focus:ring-indigo-500"
                        >
                            Create Project
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddProject;
