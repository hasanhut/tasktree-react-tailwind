import React, { useState, useEffect } from "react";
function Content() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const url = "https://localhost:7274/api/project";
        const fetchData = async () => {
            const res = await fetch(url);
            const json = await res.json();
            setData(json);
        };
        fetchData();
    }, []);

    return (
        <div className="grid grid-cols-4 gap-2">
            {data?.map((item) => (
                <span
                    key={item.id}
                    className="m-6 outline outline-1 h-72 w-72 rounded-md"
                >
                    <span className="bg-projectgray flex flex-auto p-5 h-16 text-sm font-bold">
                        <a href="#"> {item.name} </a>
                    </span>
                    <span className="bg-projectwhite flex flex-auto h-56 text-sm p-2">
                        <a> {item.explanation}</a>
                    </span>
                </span>
            ))}
        </div>
    );
}

export default Content;
