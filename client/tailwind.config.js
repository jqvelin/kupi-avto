/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {},
        fontFamily: {
            inter: ["Inter", "sans-serif"]
        },
        colors: {
            "white": "#fff",
            "black": "#000",

            "cyan": "#1E8FFF",

            "blue-1": "#6C47FF",
            "blue-2": "#4F2CD9",
            "blue-3": "#3213AC",
            "blue-4": "#240C86",

            "gray-1": "#F8F8F8",
            "gray-2": "#D9D9D9",
            "gray-3": "#595959",

            "red-1": "#D73737",
            "red-2": "#B72121"
        }
    },
    plugins: []
};
