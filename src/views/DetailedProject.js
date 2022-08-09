import { React, useState, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import AuthContext from "../context/AuthProvider";
import axios from "../api/axios";

function DetailedProject() {
    const location = useLocation();
    const id = location.state.id;
    const [data, setData] = useState(null);
    const { auth, setAuth } = useContext(AuthContext);
    const url = "https://localhost:7274/api/project/";
    const token = auth.accessToken;
    useEffect(() => {
        const fetchData = async () => {
            axios
                .get(url + id, {
                    headers: {
                        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJKV1RTZXJ2aWNlQWNjZXNzVG9rZW4iLCJqdGkiOiJjNTkzNTZmMi02MzNkLTQzNjgtOGIwOS0wNzA5M2UzOTNhMTciLCJpYXQiOiI5LjA4LjIwMjIgMDY6MTE6NDIiLCJJZCI6IjIiLCJVc2VybmFtZSI6Imhhc2FuIiwiRW1haWwiOiJoYXNhbkBnbWFpbC5jb20iLCJleHAiOjE2NjYwMjU0NDIsImlzcyI6IkpXVEF1dGhlbnRpY2F0aW9uU2VydmVyIiwiYXVkIjoiSldUU2VydmljZVBvc3RtYW5DbGllbnQifQ.1SUbYhsTde4n1R0knBqoueg1OMzfrxDEBAucX7qDcaQ`,
                    },
                })
                .then((res) => {
                    console.log(res.data);
                    setData(res.data);
                });
        };
        fetchData();
    }, []);
    return (
        <div>
            {data?.map((item) => (
                <div key={item.id}>
                    <h1>{item.name}</h1>
                    <h1>{item.explanation}</h1>
                </div>
            ))}
        </div>
    );
}

export default DetailedProject;
