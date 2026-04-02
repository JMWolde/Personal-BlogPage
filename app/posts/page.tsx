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
import customParseFormat from "dayjs/plugin/customParseFormat"
import {PostType} from "@/components/types";
export default function PostPageContent() {
    const searchParams = useSearchParams();
    const id = searchParams.get("id")
        return <GetPost PostID={id}/>
}
function GetPost(props) {
    const [post, setPost] = useState<PostType | null>(null);
    const [comments, setComments] = useState<PostType[] | null>(null);
    useEffect(() => {
        const GetPost = async () => {
            const {data: post } = await supabase.from("Posts").select().eq('id', props.PostID).single();
            const {data: comments} = await supabase.from("Comments").select().eq('post_id', props.PostID)
            setPost(post);
            setComments(comments);
        }
        GetPost();
    }, [props.PostID]);

    return (
        <div id="PageContainer">
            {post && <BuildPostCard post={post} />}
        </div>
    // <div id="CommentContainer">
    //     <BuildCommentCard comments={comments}/>
    // </div>
)
}

async function handleRemove(post) {
    const key = process.env.NEXT_PUBLIC_MY_SECRET_KEY
    const value = window.prompt("Enter Master Key To Remove")
    if (value == key) {
        await supabase.from("Posts").delete().eq('id', post.id)
        alert("Post Removed!")
    } else {
        alert("NAH NAH")
    }
}
function handleComment(post){
    window.location.href = `/posts?id=${post.id}`
}
// async function commentCount(post) {
//     const {count, error} = await supabase
//         .from("Comments")
//         .select('*', {count: 'exact', head: true})
//         .eq('post_id', post.id)
//     return count
// }
function BuildPostCard({post}){
    const [count, setCount] = useState(0);

    return (
        <div className="PageCard">
            <h1>JOSH</h1>
            <p>{post.Post_Text}</p>
            {post.Images && <img src={post.Images} alt="post" />}
            <h2>{post.id}</h2>
            <h4>{post.created_at?.split("T")[0]}</h4>
            <button className="RemoveBTN" onClick={() => handleRemove(post)}>Remove</button>
            <button className="CommentBTN" onClick={() => handleComment(post)}>Comment</button>
            {/*<button id="CommentCounterBTN" onClick={() => handleComment(post)}>*/}
            {/*    Comments({count})*/}
            {/*</button>*/}
        </div>
    )
}


