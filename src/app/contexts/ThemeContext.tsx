"use client";

import { createContext, useEffect, useState, ReactNode, useContext } from 'react'
import { ThemeName } from '../enums/ThemeName';

export const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [themeName, setThemeName] = useState<ThemeName>(ThemeName.light);

    useEffect(() => {
        const savedTheme = localStorage.getItem('themeName') as ThemeName;
        
        requestAnimationFrame(() => {
            if (savedTheme) {
                setThemeName(savedTheme);
            } else {
                const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
                setThemeName(darkMediaQuery.matches ? ThemeName.dark : ThemeName.light);
            }
        });

        const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handler = (e: MediaQueryListEvent) => {
            if (!localStorage.getItem('themeName')) {
                setThemeName(e.matches ? ThemeName.dark : ThemeName.light);
            }
        };

        darkMediaQuery.addEventListener('change', handler);
        return () => darkMediaQuery.removeEventListener('change', handler);
    }, []);

    function toggleTheme() {
        const name = themeName === ThemeName.dark ? ThemeName.light : ThemeName.dark;
        localStorage.setItem('themeName', name);
        setThemeName(name);
    }

    return (
        <ThemeContext.Provider value={{ themeName, toggleTheme }}>
            { children }
        </ThemeContext.Provider>
    )
}

export const useThemeContext = () => {
    const context = useContext(ThemeContext);
    if (!context) throw new Error("Theme context not found.");
    return context;
};

interface ThemeContextType {
    themeName: ThemeName;
    toggleTheme: () => void;
}