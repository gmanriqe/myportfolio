// 1ero: Paquetes de terceros
import { createContext, useState } from "react";

const ThemeInitial = true
// Creando el contexto (1)
export const ThemeContext = createContext(ThemeInitial);
// Creando el provider (2)
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(ThemeInitial);

    return (
        // Llamado al contexto y sus valores
        <ThemeContext.Provider value={[theme, setTheme]}>
            {children}
        </ThemeContext.Provider>
    )
}