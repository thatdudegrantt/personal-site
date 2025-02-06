"use client";

import { ThemeProvider, useTheme} from "next-themes";
import {useEffect, useState} from "react";

export default function ThemeProviderWrapper({ children }) {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="bg-base-100 min-h-screen"></div>; // Prevents flashing
    }

    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem={true}>
            {children}
        </ThemeProvider>
    );
}
