"use client"
import {Suspense, useState} from "react";
import {useSearchParams} from "next/navigation";
import {supabase} from "@/lib/supabase";
import {useEffect} from "react";
import dayjs from "dayjs";
import "../css/globals.css";
import "../css/PageCard.css";
import "../css/Button.css";
import "../css/Comment.css";
import "../css/CommentCard.css";
import {BlogType} from "@/components/types";

export default function BlogPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <PostBlogContent />
        </Suspense>
    )
}
function PostBlogContent() {
    const searchParams = useSearchParams();
    const id = searchParams.get("id")
    return <GetBlog BlogID={id}/>
}
function GetBlog(props) {
    const [blog, setBlog] = useState<BlogType | null>(null);
    useEffect(() => {
        const GetPost = async () => {
            const {data: blog } = await supabase.from("Blog").select().eq('id', props.BlogID).single();
            setBlog(blog);
        }
        GetPost();
    }, [props.BlogID]);

    return (
        <div id="PageContainer">
            {blog && <BuildBlogCard blog={blog!} />}
        </div>
    )
}


function BuildBlogCard({ blog }: { blog: BlogType }){

    return (
        <div className="PageContainer">
            <div className="PageCard">
                <h1>{blog.Blog_Title}</h1>
                <p>{blog.Blog_Text}</p>
                {blog.Images && <img src={blog.Images} alt="post"/>}
                <h2>{blog.id}</h2>
                <h4>{blog.created_at?.split("T")[0]}</h4>
        </div>
        </div>

    )
}


