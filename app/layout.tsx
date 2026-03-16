"use client"
import { useEffect } from "react";
import "./css/globals.css";

import type { ReactNode } from "react";
import BgVideo from "../components/bgvideo";
export default function RootLayout({children,}: {
    children: ReactNode;
}) {
    return (
        <html lang="en">
        <body>

        {children}
        <BgVideo />
        </body>

        </html>
    );
}