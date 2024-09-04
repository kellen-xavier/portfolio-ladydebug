/** @type {import('tailwindcss').Config} */
export const content = [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
];
export const theme = {
    extend: {
        colors: {
            'primary': '#1f2937', // Cor primária
            'secondary': '#f97316', // Cor secundária
        },
        fontFamily: {
            'sans': ['Inter', 'sans-serif'], // Fonte principal
        },
    },
};
export const plugins = [];