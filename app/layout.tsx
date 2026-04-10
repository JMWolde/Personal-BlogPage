
import "./css/globals.css";
import "./css/Noise.css"
import type { ReactNode } from "react";
import BgVideo from "../components/bgvideo";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});


export default function RootLayout({children,}: {
    children: ReactNode;
}) {
    return (

        <html lang="en" className={cn("font-sans", geist.variable)}>
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </head>
        <body>
        {children}
        <BgVideo/>
        </body>

        </html>
    );
}