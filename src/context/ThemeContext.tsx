import { createContext, useState, useEffect } from "react";

import AsyncStorage from '@react-native-async-storage/async-storage';

import { dark, light } from "../globalStyles";

export const ThemeContext = createContext({});

export default function ThemeProvider({ children }: any) {
    const [currentTheme, setCurrentTheme] = useState('dark');

    const themes = { 'dark': dark, 'light': light };
    
    useEffect(() => {
        (async () => {
            const savedTheme = await AsyncStorage.getItem('@theme');
            if(savedTheme) {
                setCurrentTheme(savedTheme);
            }
        })();
    }, [])

    const saveData = async (theme) => {
        await AsyncStorage.setItem('@theme', theme)
        setCurrentTheme(theme)
    };

    return (
        <ThemeContext.Provider value={{
            currentTheme,
            setCurrentTheme,
            chosenTheme: themes[currentTheme],
            saveData
        }}>
            {children}
        </ThemeContext.Provider>
    );
}