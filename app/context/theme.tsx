import { createContext, useContext, useEffect, useState } from "react";

// Context for managing the theme
const ThemeContext = createContext<any>(null);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState<string>("light");

    useEffect(() => {
        // Load theme from localStorage if available
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            setTheme(savedTheme);
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme); // Save to localStorage
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div className={theme}>{children}</div> {/* Apply theme class */}
        </ThemeContext.Provider>
    );
};

// Custom hook to use theme context
export const useTheme = () => useContext(ThemeContext);
