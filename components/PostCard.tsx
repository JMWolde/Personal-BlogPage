import {use, useEffect, useState} from "react";
import {supabase} from "@/lib/supabase";
import { PostType } from "./types";
import dayjs from "dayjs";

export default function PostCard(){
return <GetPosts/>
}

     function GetPosts() {
const [posts, setPosts] = useState<PostType[] | null>(null);
        useEffect(() => {
            const GetPosts = async () => {
                const {data: posts} = await supabase
                    .from("Posts")
                    .select("*")
                    .order("created_at",{ ascending: false })
                    .returns<PostType[]>();
                setPosts(posts);
            }
            GetPosts();
        }, []);

         return (
             <div id = "PostContainer">
                 {posts?.map((post) => (
                     <BuildPostCard key={post.id} post={post} />
                 ))}
             </div>
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
// async function handleDate(post){
//     const dateYear = post.created_at.split("T")[0];
//     const rawTime = post.created_at.split("T")[1].split(".")[0];
//     const formattedDate = `${dateYear} ${dayjs(rawTime, "HH:mm:ss").format("h:mm A")}`;
//     return formattedDate
// }
async function commentCount(post) {
    const {count, error} = await supabase
        .from("Comments")
        .select('*', {count: 'exact', head: true})
        .eq('post_id', post.id)
    return count
}
    function BuildPostCard({post}){
        const [count, setCount] = useState(0);

        useEffect(() => {
            commentCount(post).then(setCount);
        }, [post.id]);
        console.log(post);
    return (
        <div className="PostCard">
            <h1>JOSH</h1>
            <p>{post.Post_Text}</p>
            {post.Images && <img src={post.Images} alt="post"/>}
            <h2>{post.id}</h2>
            <h4>{post.created_at?.split("T")[0]}</h4>
            {post.CREATIVE_WORK && <h4 id = "Creative-Flair">*CREATIVE WORK*</h4>}
            <button className="RemoveBTN" onClick={() => handleRemove(post)}>Remove</button>
            <button className="CommentBTN" onClick={() => handleComment(post)}>Comment</button>
            <button id="CommentCounterBTN" onClick={() => handleComment(post)}>
                Comments({count})
            </button>
        </div>
    )
    }



