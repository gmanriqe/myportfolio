import { createContext, useState } from "react";

const ThemeInitial = true

// Creacion de context
export const ThemeContext = createContext(ThemeInitial);

// Creacion de provider
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(ThemeInitial);

    return (
        // llamado al contexto y sus valores
        <ThemeContext.Provider value={[theme, setTheme]}>
            {children}
        </ThemeContext.Provider>
    )
}