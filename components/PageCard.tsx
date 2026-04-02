import {useEffect, useState} from "react";
import {PostType} from "@/components/types";
import {supabase} from "@/lib/supabase";
import {useSearchParams} from "next/navigation";

export default function PageCard(PostID){
    return <GetPosts PostID = {PostID}></GetPosts>
}


function GetPosts(PostID) {
    return (
<div id = "PageContainer">
    {CreatePost(PostID)}
</div>
    )
}
async function CreatePost(PostID) {
    const {data: post } = await supabase.from("Posts").select().eq('id', PostID)
    const {data: comments} = await supabase.from("Comments").select().eq('post_id', PostID)
    return BuildPostCard({post: post?.[0]})

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
async function commentCount(post) {
    const {count, error} = await supabase
        .from("Comments")
        .select('*', {count: 'exact', head: true})
        .eq('post_id', post.id)
    return count
}
function BuildPostCard({post}){
    return (
        <div className="PostCard">
            <h1>JOSH</h1>
            <p>{post.Post_Text}</p>
            {post.Images && <img src={post.Images} alt="post" />}
            <h2>{post.id}</h2>
            <h4>{post.created_at?.split("T")[0]}</h4>
            <button className="RemoveBTN" onClick={() => handleRemove(post)}>Remove</button>
            <button className="CommentBTN" onClick={() => handleComment(post)}>Comment</button>
            <button id="CommentCounterBTN" onClick={() => handleComment(post)}>
                Comments({count})
            </button>
        </div>
    )
}
