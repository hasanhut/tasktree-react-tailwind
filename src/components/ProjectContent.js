import { React, useEffect, useState, Component } from "react";
import axios from "../api/axios";
import Chart from "react-apexcharts";
import { Icon } from "../icons.js";
import NewProjectTask from "../components/NewProjectTask";

function ProjectContent() {
    const [tasks, setTasks] = useState(null);
    const [buttonPopup, setButtonPopup] = useState(false);
    const [data, setData] = useState(null);
    const [taskName, setTaskName] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [assigneeId, setAssigneeId] = useState();
    const [reporterId, setReporterId] = useState();
    const [projectId, setProjectId] = useState();
    const [status, setStatus] = useState("");
    const url = "https://localhost:7274/api";
    useEffect(() => {
        const fetchData = async () => {
            axios
                .get(url + "/projectTask/project/1", {
                    headers: {
                        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJKV1RTZXJ2aWNlQWNjZXNzVG9rZW4iLCJqdGkiOiJjNTkzNTZmMi02MzNkLTQzNjgtOGIwOS0wNzA5M2UzOTNhMTciLCJpYXQiOiI5LjA4LjIwMjIgMDY6MTE6NDIiLCJJZCI6IjIiLCJVc2VybmFtZSI6Imhhc2FuIiwiRW1haWwiOiJoYXNhbkBnbWFpbC5jb20iLCJleHAiOjE2NjYwMjU0NDIsImlzcyI6IkpXVEF1dGhlbnRpY2F0aW9uU2VydmVyIiwiYXVkIjoiSldUU2VydmljZVBvc3RtYW5DbGllbnQifQ.1SUbYhsTde4n1R0knBqoueg1OMzfrxDEBAucX7qDcaQ`,
                    },
                })
                .then((res) => {
                    console.log(res.data);
                    setTasks(res.data);
                });
        };
        fetchData();
    }, []);
    const createTask = (e) => {
        e.preventDefault();
        axios
            .post(
                url + "/projectTask",
                {
                    taskName,
                    startDate,
                    endDate,
                    assigneeId,
                    reporterId,
                    projectId,
                    status,
                }
                //{ headers: { Authorization: `Bearer ${token}` } }
            )
            .then((res) => {
                console.log("Posting data :", res);
            })
            .catch((err) => console.log(err));
    };

    return (
        <div className="flex-auto">
            <hr />
            <h1 className="font-bold text-2xl p-4 uppercase">dashboard</h1>
            <hr />
            <div className="flex justify-center">
                <Chart
                    type="pie"
                    width={720}
                    height={460}
                    series={[23, 43]}
                    options={{
                        labels: ["Done", "In Progress"],
                    }}
                />
            </div>
            <hr />
            <div className="flex justify-between">
                <h1 className="font-bold text-2xl p-4 uppercase">tasks</h1>
                <button
                    onClick={() => {
                        setButtonPopup(true);
                    }}
                    className="flex pr-4 items-center"
                >
                    <h3 className="text-sm pr-4">Create a Task</h3>
                    <Icon name="addTaskIcon" size={24} />
                </button>
            </div>

            <hr />
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
                        {tasks?.map((task) => (
                            <tr
                                key={task.id}
                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                            >
                                <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                                    {task.id}
                                </td>
                                <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                                    {task.taskName}
                                </td>
                                <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                                    {task.startDate}
                                </td>
                                <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                                    {task.endDate}
                                </td>
                                <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                                    {task.assignee.username}
                                </td>
                                <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                                    {task.reporter.username}
                                </td>
                                <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                                    {task.projectId}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <NewProjectTask trigger={buttonPopup} setTrigger={setButtonPopup}>
                <form className="flex flex-col" action="">
                    <div className="flex justify-center">
                        <label className="pr-4" htmlFor="taskName">
                            Task Name
                        </label>
                        <input
                            type="text"
                            id="taskName"
                            name="taskName"
                            onChange={(e) => setTaskName(e.target.value)}
                        />
                    </div>
                    <div className="flex justify-center">
                        <label className="pr-4" htmlFor="startDate">
                            Task Start Date
                        </label>
                        <input
                            type="text"
                            id="startDate"
                            name="startDate"
                            onChange={(e) => setStartDate(e.target.value)}
                        />
                    </div>
                    <div className="flex justify-center">
                        <label className="pr-4" htmlFor="endDate">
                            Task End Date
                        </label>
                        <input
                            type="text"
                            id="endDate"
                            name="endDate"
                            onChange={(e) => setEndDate(e.target.value)}
                        />
                    </div>
                    <div className="flex justify-center">
                        <label className="pr-4" htmlFor="assigneeId">
                            Assignee
                        </label>
                        <input
                            type="text"
                            id="assigneeId"
                            name="assigneeId"
                            onChange={(e) => setAssigneeId(e.target.value)}
                        />
                    </div>
                    <div className="flex justify-center">
                        <label className="pr-4" htmlFor="reporterId">
                            Reporter
                        </label>
                        <input
                            type="text"
                            id="reporterId"
                            name="reporterId"
                            onChange={(e) => setReporterId(e.target.value)}
                        />
                    </div>
                    <div className="flex justify-center">
                        <label className="pr-4" htmlFor="projectId">
                            Project
                        </label>
                        <input
                            type="text"
                            id="projectId"
                            name="projectId"
                            onChange={(e) => setProjectId(e.target.value)}
                        />
                    </div>
                    <div className="flex justify-center">
                        <label className="pr-4" htmlFor="status">
                            Status
                        </label>
                        <input
                            type="text"
                            id="status"
                            name="status"
                            onChange={(e) => setStatus(e.target.value)}
                        />
                    </div>
                    <button
                        onClick={(event) => {
                            createTask(event);
                            setButtonPopup(false);
                        }}
                    >
                        Create
                    </button>
                </form>
            </NewProjectTask>
        </div>
    );
}

export default ProjectContent;
