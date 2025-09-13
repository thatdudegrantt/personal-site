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
    manifest: '/site.webmanifest',
    icon: [
        { url: '/favicon.ico' },
        { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
        { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
        { url: '/apple-touch-icon.png' },
    ],
    other: [
        {
            rel: 'android-chrome',
            url: '/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png'
        },
        {
            rel: 'android-chrome',
            url: '/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png'
        },
    ],
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
        <head>
            <link rel="icon" href="/favicon.ico" sizes="any"/>
        </head>
        <body className={`${geistSans.variable} font-sans`}>
        <ThemeProviderWrapper>
            <Navbar/>
            {children}
        </ThemeProviderWrapper>
        </body>
        </html>
    );
}
