import React, { useState, useEffect, Fragment } from "react";
import { Icon } from "../icons";
import { Menu, Transition } from "@headlessui/react";
import axios from "axios";

function Content() {
    const [data, setData] = useState(null);
    const url = "https://localhost:7274/api/project";
    const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJKV1RTZXJ2aWNlQWNjZXNzVG9rZW4iLCJqdGkiOiJjMWQxZjU4Mi0wZTgwLTQ0NGUtOWIwMS1jYjA0YTk1OTY2ZTYiLCJpYXQiOiIyNy4wNy4yMDIyIDExOjA2OjE2IiwiSWQiOiIxIiwiVXNlcm5hbWUiOiJoYXNhbiIsIkVtYWlsIjoiaGFzYW5AZ21haWwuY29tIiwiZXhwIjoxNjY0OTE5OTE2LCJpc3MiOiJKV1RBdXRoZW50aWNhdGlvblNlcnZlciIsImF1ZCI6IkpXVFNlcnZpY2VQb3N0bWFuQ2xpZW50In0.nug5iBXCEluxqapzT0jk7AgDK-rclAx5-XaSXw3gIg8";
    useEffect(() => {
        const fetchData = async () => {
            axios
                .get(url, {
                    headers: { Authorization: `Bearer ${token}` },
                })
                .then((res) => {
                    setData(res.data);
                });
        };
        fetchData();
    }, []);

    function deleteProject(id) {
        axios
            .delete(`https://localhost:7274/api/project/${id}`, {
                headers: { Authorization: `Bearer ${token}` },
            })
            .then((res) => {
                data.filter((item) => item.id !== id);
            });
    }

    return (
        <>
            <div className="grid grid-cols-4 gap-2">
                {data?.map((item) => (
                    <span
                        key={item.id}
                        className="m-6 outline outline-1 h-72 w-72 rounded-md"
                    >
                        <span className="bg-projectgray flex flex-row justify-between p-5 h-16 text-sm text-white font-bold">
                            <a href="#"> {item.name} </a>
                            <Menu
                                as="div"
                                className="relative inline-block text-left"
                            >
                                <div>
                                    <Menu.Button className="  rounded-md bg-projectgray bg-opacity-20 px-2 py-2 -mt-2 text-white text-sm font-medium hover:bg-projectgraybold focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                                        <Icon name="more" />
                                    </Menu.Button>
                                </div>
                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <div className="px-1 py-1 ">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <button
                                                        className={`${
                                                            active
                                                                ? "bg-projectgray text-white"
                                                                : "text-gray-900"
                                                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                                    >
                                                        {active ? (
                                                            <Icon name="editActive" />
                                                        ) : (
                                                            <Icon name="editInactive" />
                                                        )}
                                                        Edit
                                                    </button>
                                                )}
                                            </Menu.Item>
                                        </div>
                                        <div className="px-1 py-1">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <button
                                                        className={`${
                                                            active
                                                                ? "bg-projectgray text-white"
                                                                : "text-gray-900"
                                                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                                    >
                                                        {active ? (
                                                            <Icon name="moveActive" />
                                                        ) : (
                                                            <Icon name="moveInactive" />
                                                        )}
                                                        More
                                                    </button>
                                                )}
                                            </Menu.Item>
                                        </div>
                                        <div className="px-1 py-1">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <button
                                                        onClick={(e) =>
                                                            deleteProject(
                                                                item.id
                                                            )
                                                        }
                                                        className={`${
                                                            active
                                                                ? "bg-projectgray text-white"
                                                                : "text-gray-900"
                                                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                                    >
                                                        {active ? (
                                                            <Icon name="deleteActive" />
                                                        ) : (
                                                            <Icon name="deleteInactive" />
                                                        )}
                                                        Delete
                                                    </button>
                                                )}
                                            </Menu.Item>
                                        </div>
                                    </Menu.Items>
                                </Transition>
                            </Menu>
                        </span>
                        <span className="bg-projectwhite grid grid-rows-4 grid-flow-col h-56 text-sm p-2">
                            <a>Project Explanation: {item.explanation}</a>
                            <a>Project Start Date: {item.startDate}</a>
                            <a>Project End Date: {item.endDate}</a>
                        </span>
                    </span>
                ))}
            </div>
        </>
    );
}

export default Content;
