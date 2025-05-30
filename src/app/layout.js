import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from '../components/Navbar';
import ThemeProviderWrapper from "@/components/ThemeProvideWrapper";
import { cookies } from "next/headers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "My Portfolio",
  description: "Personal Website",
};

export default async function RootLayout({ children }) {
    const cookieStore = await cookies();
    const cookieTheme = await (cookieStore.get("theme")?.value) || "light";

    return (
        <html lang="en" suppressHydrationWarning data-theme={cookieTheme}>
        <body>
            <ThemeProviderWrapper>
                <Navbar/>
                {children}
            </ThemeProviderWrapper>
        </body>
    </html>
  );
}
