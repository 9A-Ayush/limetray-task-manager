import { useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";


export const ThemeToggle = () => {
// Persist theme preference using the custom hook
const [theme, setTheme] = useLocalStorage("theme", "light");


useEffect(() => {
// Apply theme as a data attribute for clean CSS theming
document.documentElement.setAttribute("data-theme", theme);
}, [theme]);


return (
<button
className="theme-toggle"
onClick={() => setTheme(theme === "light" ? "dark" : "light")}
>
{theme === "light" ? "🌙 Dark" : "☀️ Light"}
</button>
);
};