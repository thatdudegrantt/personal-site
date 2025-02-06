"use client";

import { ThemeProvider, useTheme} from "next-themes";
import {useEffect} from "react";

export default function ThemeProviderWrapper({ children }) {
    useEffect(() => {
        const savedTheme = document.cookie.split("; ").find(row => row.startsWith("theme="))?.split("=")[1];
        if (savedTheme) {
            document.documentElement.setAttribute("data-theme", savedTheme);
        }
    }, []);
    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem={true}>
            {children}
        </ThemeProvider>
    );
}
