"use client";
import { ThemeProvider } from "next-themes";

export default function ThemeProviderWrapper({ children }) {
    return (
        <ThemeProvider
            attribute="data-theme"
            defaultTheme="system"
            enableSystem={true}
            disableTransitionOnChange
        >
            {children}
        </ThemeProvider>
    );
}