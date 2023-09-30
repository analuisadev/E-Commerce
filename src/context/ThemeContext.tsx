import { createContext, useState } from "react";

import { dark, light } from "../globalStyles";

export const ThemeContext = createContext({});

export default function ThemeProvider({ children }: any) {
    const [currentTheme, setCurrentTheme] = useState('dark');

    const themes = { 'dark': dark, 'light': light };

    return (
        <ThemeContext.Provider value={{
            currentTheme,
            setCurrentTheme,
            chosenTheme: themes[currentTheme]
        }}>
            {children}
        </ThemeContext.Provider>
    );
}