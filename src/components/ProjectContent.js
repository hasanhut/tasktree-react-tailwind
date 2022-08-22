import { React, useEffect, useState } from "react";
import axios from "../api/axios";

function ProjectContent() {
    const [data, setData] = useState(null);
    const url = "https://localhost:7274/api";
    useEffect(() => {
        const fetchData = async () => {
            axios
                .get(url + "/projectTask/" + 1, {
                    headers: {
                        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJKV1RTZXJ2aWNlQWNjZXNzVG9rZW4iLCJqdGkiOiJjNTkzNTZmMi02MzNkLTQzNjgtOGIwOS0wNzA5M2UzOTNhMTciLCJpYXQiOiI5LjA4LjIwMjIgMDY6MTE6NDIiLCJJZCI6IjIiLCJVc2VybmFtZSI6Imhhc2FuIiwiRW1haWwiOiJoYXNhbkBnbWFpbC5jb20iLCJleHAiOjE2NjYwMjU0NDIsImlzcyI6IkpXVEF1dGhlbnRpY2F0aW9uU2VydmVyIiwiYXVkIjoiSldUU2VydmljZVBvc3RtYW5DbGllbnQifQ.1SUbYhsTde4n1R0knBqoueg1OMzfrxDEBAucX7qDcaQ`,
                    },
                })
                .then((res) => {
                    //console.log(res.data);
                    setData(res.data);
                });
        };
        fetchData();
    });

    return (
        <div className="flex-auto">
            <h1>DASHBOARD</h1>

            <h1>TASKS</h1>

            <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="py-3 px-6">
                                Task Id
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Task name
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Start Date
                            </th>
                            <th scope="col" className="py-3 px-6">
                                End Date
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Assignee
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Reporter
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Project Id
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                                {data.id}
                            </td>
                            <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                                {data.name}
                            </td>
                            <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                                {data.explanation}
                            </td>
                            <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                                {data.startDate}
                            </td>
                            <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                                {data.endDate}
                            </td>
                            <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                                1
                            </td>
                            <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                                1
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ProjectContent;
