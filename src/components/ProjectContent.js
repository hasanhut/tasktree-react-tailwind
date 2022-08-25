import { React, useEffect, useState, Component } from "react";
import axios from "../api/axios";
import Chart from "react-apexcharts";
import { Icon } from "../icons.js";
import NewProjectTask from "../components/NewProjectTask";
import { useLocation } from "react-router-dom";

function ProjectContent() {
    const location = useLocation();
    const { id } = location.state;
    const [tasks, setTasks] = useState(null);
    const [statusDoneCount, setStatusDoneCount] = useState();
    const [statusInProgressCount, setStatusInProgressCount] = useState();
    const [tasksCount, setTasksCount] = useState();
    const [buttonPopup, setButtonPopup] = useState(false);
    const [taskName, setTaskName] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [assigneeId, setAssigneeId] = useState();
    const [reporterId, setReporterId] = useState();
    const [projectId, setProjectId] = useState(id);
    const [status, setStatus] = useState("");
    const url = "https://localhost:7274/api";
    useEffect(() => {
        fetchData();
    });
    const fetchData = async () => {
        axios
            .get(url + "/projectTask/project/" + id, {
                headers: {
                    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJKV1RTZXJ2aWNlQWNjZXNzVG9rZW4iLCJqdGkiOiJjNTkzNTZmMi02MzNkLTQzNjgtOGIwOS0wNzA5M2UzOTNhMTciLCJpYXQiOiI5LjA4LjIwMjIgMDY6MTE6NDIiLCJJZCI6IjIiLCJVc2VybmFtZSI6Imhhc2FuIiwiRW1haWwiOiJoYXNhbkBnbWFpbC5jb20iLCJleHAiOjE2NjYwMjU0NDIsImlzcyI6IkpXVEF1dGhlbnRpY2F0aW9uU2VydmVyIiwiYXVkIjoiSldUU2VydmljZVBvc3RtYW5DbGllbnQifQ.1SUbYhsTde4n1R0knBqoueg1OMzfrxDEBAucX7qDcaQ`,
                },
            })
            .then((res) => {
                //console.log(res.data);
                setTasks(res.data);
                setTasksCount(res.data.length);
                CountStatus();
            });
    };
    const CountStatus = () => {
        const done = tasks.filter((item) => item.status === "Done").length;
        setStatusDoneCount(done);
        const inProgress = tasks.filter(
            (item) => item.status === "In Progress"
        ).length;
        setStatusInProgressCount(inProgress);
    };
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
            <h1 className="font-bold text-3xl p-4 uppercase">dashboard</h1>
            <hr />
            <div className="flex justify-center">
                <Chart
                    type="pie"
                    width={720}
                    height={460}
                    series={[statusDoneCount, statusInProgressCount]}
                    options={{
                        labels: ["Done", "In Progress"],
                    }}
                />
            </div>
            <hr />
            <div className="flex justify-between">
                <h1 className="font-bold text-3xl p-4 uppercase">tasks</h1>
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
                            <th scope="col" className="py-3 px-6">
                                Status
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks?.length > 0 ? (
                            tasks?.map((task) => (
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
                                    <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                                        {task.status}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <h1 className="py-4 px-6 font-bold text-2xl">
                                NO DATA
                            </h1>
                        )}
                    </tbody>
                </table>
            </div>
            <NewProjectTask trigger={buttonPopup} setTrigger={setButtonPopup}>
                <form className="flex flex-col" action="">
                    <div className="grid justify-items-center mt-4">
                        <label
                            className="pr-4 flex items-center text-gray-700 text-sm font-bold"
                            htmlFor="taskName"
                        >
                            Task Name
                        </label>
                        <input
                            className="w-40 h-7 shadow appearance-none border rounded text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            id="taskName"
                            name="taskName"
                            onChange={(e) => setTaskName(e.target.value)}
                        />
                    </div>
                    <div className="grid justify-items-center mt-4">
                        <label
                            className="pr-4 flex items-center text-gray-700 text-sm font-bold"
                            htmlFor="startDate"
                        >
                            Task Start Date
                        </label>
                        <input
                            className="w-40 h-7 shadow appearance-none border rounded text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="date"
                            id="startDate"
                            name="startDate"
                            onChange={(e) => setStartDate(e.target.value)}
                        />
                    </div>
                    <div className="grid justify-items-center mt-4">
                        <label
                            className="pr-4 flex items-center text-gray-700 text-sm font-bold"
                            htmlFor="endDate"
                        >
                            Task End Date
                        </label>
                        <input
                            className="w-40 h-7 shadow appearance-none border rounded text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="date"
                            id="endDate"
                            name="endDate"
                            onChange={(e) => setEndDate(e.target.value)}
                        />
                    </div>
                    <div className="grid justify-items-center mt-4">
                        <label
                            className="pr-4 flex items-center text-gray-700 text-sm font-bold"
                            htmlFor="assigneeId"
                        >
                            Assignee
                        </label>
                        <input
                            className="w-40 h-7 shadow appearance-none border rounded text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            id="assigneeId"
                            name="assigneeId"
                            onChange={(e) => setAssigneeId(e.target.value)}
                        />
                    </div>
                    <div className="grid justify-items-center mt-4">
                        <label
                            className="pr-4 flex items-center text-gray-700 text-sm font-bold"
                            htmlFor="reporterId"
                        >
                            Reporter
                        </label>
                        <input
                            className="w-40 h-7 shadow appearance-none border rounded text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            id="reporterId"
                            name="reporterId"
                            onChange={(e) => setReporterId(e.target.value)}
                        />
                    </div>
                    <div className="grid justify-items-center mt-4">
                        <label
                            className="pr-4 flex items-center text-gray-700 text-sm font-bold"
                            htmlFor="projectId"
                        >
                            Project
                        </label>
                        <input
                            className="w-40 h-7 shadow appearance-none border rounded text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            readOnly
                            type="text"
                            id="projectId"
                            name="projectId"
                            value={id}
                        />
                    </div>
                    <div className="grid justify-items-center mt-4">
                        <label
                            className="pr-4 flex items-center text-gray-700 text-sm font-bold"
                            htmlFor="status"
                        >
                            Status
                        </label>
                        <input
                            className="w-40 h-7 shadow appearance-none border rounded text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            id="status"
                            name="status"
                            onChange={(e) => setStatus(e.target.value)}
                        />
                    </div>
                    <div className="grid justify-items-center mt-4">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-20 flex"
                            onClick={(event) => {
                                createTask(event);
                                setButtonPopup(false);
                            }}
                        >
                            Create
                        </button>
                    </div>
                </form>
            </NewProjectTask>
        </div>
    );
}

export default ProjectContent;
