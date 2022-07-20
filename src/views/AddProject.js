import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const url = "https://62d7dee29c8b5185c77dd58a.mockapi.io/project";

function AddProject() {
    const [name, setName] = useState("");
    const [explanation, setExplanation] = useState("");
    const postData = (e) => {
        e.preventDefault();
        axios.post(url, {
            name,
            explanation,
        }).then((res) => console.log(res));
    };
    return (
        <>
            <div className="bg-gray-700 min-h-screen flex items-center">
                <div className="w-full">
                    <h2 className="text-center text-blue-400 font-bold text-2xl uppercase mb-10">Create a new Project</h2>
                    <div className="bg-white p-10 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2">
                        <form action="">
                            <div className="mb-5">
                                <label htmlFor="name" className="block mb-2 font-bold text-gray-600">Project Name</label>
                                <input type="text" id="name" name="name" onChange={(e) => setName(e.target.value)} placeholder="Put in your project name." className="border border-gray-300 shadow p-3 w-full rounded mb-" />
                            </div>

                            <div className="mb-5">
                                <label htmlFor="explanation" className="block mb-2 font-bold text-gray-600">Project Explanation</label>
                                <input type="text" id="explanation" name="explanation" onChange={(e) => setExplanation(e.target.value)} placeholder="Put in your project explanation." className="border border-gray-300 shadow p-3 w-full rounded mb-" />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="startDate" className="block mb-2 font-bold text-gray-600">Project Start Date</label>
                                <input type="text" id="startDate" name="startDate" onChange={(e) => setExplanation(e.target.value)} placeholder="Put in your project start date." className="border border-gray-300 shadow p-3 w-full rounded mb-" />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="endDate" className="block mb-2 font-bold text-gray-600">Project End Date</label>
                                <input type="text" id="endDate" name="endDate" onChange={(e) => setExplanation(e.target.value)} placeholder="Put in your project end date." className="border border-gray-300 shadow p-3 w-full rounded mb-" />
                            </div>

                            <button className="block w-full bg-blue-500 text-white font-bold p-4 rounded-lg" onClick={postData}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>


        </>
    );
}

export default AddProject;
