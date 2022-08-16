import { React, useState, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import AuthContext from "../context/AuthProvider";
import axios from "../api/axios";
import NewProjectTask from "../components/NewProjectTask";

function DetailedProject() {
    const location = useLocation();
    const id = location.state.id;
    const [buttonPopup, setButtonPopup] = useState(false);
    const [data, setData] = useState(null);
    const [taskName, setTaskName] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [assignee, setAssignee] = useState("");
    const { auth, setAuth } = useContext(AuthContext);
    const url = "https://localhost:7274/api/project/";
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            axios
                .get(url + id, {
                    headers: {
                        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJKV1RTZXJ2aWNlQWNjZXNzVG9rZW4iLCJqdGkiOiJjNTkzNTZmMi02MzNkLTQzNjgtOGIwOS0wNzA5M2UzOTNhMTciLCJpYXQiOiI5LjA4LjIwMjIgMDY6MTE6NDIiLCJJZCI6IjIiLCJVc2VybmFtZSI6Imhhc2FuIiwiRW1haWwiOiJoYXNhbkBnbWFpbC5jb20iLCJleHAiOjE2NjYwMjU0NDIsImlzcyI6IkpXVEF1dGhlbnRpY2F0aW9uU2VydmVyIiwiYXVkIjoiSldUU2VydmljZVBvc3RtYW5DbGllbnQifQ.1SUbYhsTde4n1R0knBqoueg1OMzfrxDEBAucX7qDcaQ`,
                    },
                })
                .then((res) => {
                    //console.log(res.data);
                    setData(res.data);
                    setLoading(true);
                });
        };
        fetchData();
    }, []);
    const createTask = () => {
        console.log(taskName);
    };
    return (
        <>
            {loading ? (
                <div>
                    <h1>Project id :{data.id}</h1>
                    <h1>Project name :{data.name}</h1>
                    <h2>Project Explanation :{data.explanation}</h2>
                    <h2>Project Start Date :{data.startDate}</h2>
                    <h2>Project End Date :{data.endDate}</h2>
                    <button
                        onClick={() => {
                            setButtonPopup(true);
                        }}
                        className="bg-blue-500 p-4"
                    >
                        Create a Task
                    </button>
                    <NewProjectTask
                        trigger={buttonPopup}
                        setTrigger={setButtonPopup}
                    >
                        <form action="">
                            <div>
                                <label htmlFor="taskName">Task Name</label>
                                <input
                                    type="text"
                                    id="taskName"
                                    name="taskName"
                                    onChange={(e) =>
                                        setTaskName(e.target.value)
                                    }
                                />
                            </div>
                            <div>
                                <label htmlFor="startDate">
                                    Task Start Date
                                </label>
                                <input
                                    type="text"
                                    id="startDate"
                                    name="startDate"
                                    onChange={(e) =>
                                        setStartDate(e.target.value)
                                    }
                                />
                            </div>
                            <div>
                                <label htmlFor="endDate">Task End Date</label>
                                <input
                                    type="text"
                                    id="endDate"
                                    name="endDate"
                                    onChange={(e) => setEndDate(e.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor="assignee">assignee</label>
                                <input
                                    type="text"
                                    id="assignee"
                                    name="assignee"
                                    onChange={(e) =>
                                        setAssignee(e.target.value)
                                    }
                                />
                            </div>
                            <button onClick={createTask}>Create</button>
                        </form>
                    </NewProjectTask>
                </div>
            ) : (
                <div>Loading</div>
            )}
        </>
    );
}

export default DetailedProject;
