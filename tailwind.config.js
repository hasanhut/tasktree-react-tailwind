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
                projectwhite: "#FFFFFF",
            },
        },
    },
    plugins: [require("flowbite/plugin")],
};
