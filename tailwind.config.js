/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                projectgray: "#566E7A",
                projectgraybold: "#324047",
                projectwhite: "#FFFFFF",
                popUpColor: "rgba(0, 0, 0, 0.2)",
            },
        },
    },
    plugins: [require("flowbite/plugin")],
};
