"use client"
import "./css/globals.css";
import "./css/card.css";
import "./css/MainCard.css";
import "./css/PostCard.css";
import "./css/Button.css";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat"
dayjs.extend(customParseFormat)
import {createElement, use, useEffect, useState} from "react";
import {supabase} from "@/lib/supabase";
import MainCard from "../components/MainCard";
import PostCard from "@/components/PostCard";
export default function HomePage() {
    return (
        <main>
            <div className= "Home-Container">
                <PostCard/>
                <MainCard/>
            </div>
        </main>
    )
}
