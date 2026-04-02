"use client"
import {Suspense} from "react";
import {useSearchParams} from "next/navigation";
import {supabase} from "@/lib/supabase";
import {useEffect} from "react";
import dayjs from "dayjs";
import "../css/globals.css";
import "../css/PageCard.css";
import "../css/Button.css";
import "../css/Comment.css";
import customParseFormat from "dayjs/plugin/customParseFormat"
import PageCard from "@/components/PageCard";
export default function PostPageContent() {
    const searchParams = useSearchParams();
    const id = searchParams.get("id")
        return <PageCard PostID ={id}></PageCard>
}


