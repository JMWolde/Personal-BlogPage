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
import CommentCard from "@/components/CommentCard";
import customParseFormat from "dayjs/plugin/customParseFormat"
import {PostType} from "@/components/types";

export default function PostsPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <PostPageContent />
        </Suspense>
    )
}
function PostPageContent() {
    const searchParams = useSearchParams();
    const id = searchParams.get("id")
        return <GetPost PostID={id}/>
}
function GetPost(props) {
    const [post, setPost] = useState<PostType | null>(null);
    useEffect(() => {
        const GetPost = async () => {
            const {data: post } = await supabase.from("Posts").select().eq('id', props.PostID).single();
            const {data: comments} = await supabase.from("Comments").select().eq('post_id', props.PostID)
            setPost(post);
        }
        GetPost();
    }, [props.PostID]);

    return (
        <div id="PageContainer">
            {post && <BuildPostCard post={post!} />}
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

function BuildPostCard({ post, comments }: { post: PostType; comments: PostType[] }){

    const [CommentBox, SetCommentBox] = useState(false);
    const [CommentSection, setCommentSection] = useState(true);
    const [comment, setComment] = useState<PostType[] | null>(null);
    // async function checkComments(){
    //     const { data } = await supabase
    //         .from('Comments')
    //         .select().eq('post_id', post.id)
    //         .maybeSingle();
    //     const exists = !!data;
    //     if (exists != null) {
    //         setCommentSection(true)
    //     }
    // }
    function handleComment(post){
        return (
            <div className="CreateComment">
                <textarea id="CommentBox">Write Comment...</textarea>
                <button id="PageSubmitBTN" onClick={() => SaveComment(document.getElementById("CommentBox"))}>Submit</button>
            </div>

        )
    }
    async function SaveComment(comment) {
        const { data, error } = await supabase.from("Comments").insert({ comment_text: comment, post_id: post.id })
        setCommentSection(true);
        alert("Comment Posted!")
    }
    async function FetchComments(){
        const {data: comments} = await supabase.from("Comments").select().eq('post_id', post.id)
        comments.map((comment) => {

            return (
                    <p>{comment.comment_text}</p>
            )
        });
    }
    return (
        <div className="PageContainer">
            <div className="PageCard">
                <h1>JOSH</h1>
                <p>{post.Post_Text}</p>
                {post.Images && <img src={post.Images} alt="post"/>}
                <h2>{post.id}</h2>
                <h4>{post.created_at?.split("T")[0]}</h4>
                <button className="RemoveBTN" onClick={() => handleRemove(post)} style={{display: CommentBox ? 'none' : 'flex'}}>Remove</button>
                <button className="CommentBTN" onClick={() => SetCommentBox(true)} style={{display: CommentBox ? 'none' : 'flex'}} >Comment</button>
                {console.log(CommentBox)}
                {CommentBox &&
                    <div className="CommentSection">
                    <textarea placeholder={"Comment here"} onChange={e => {
                        setComment(e.target.value)
                    }} style={{display: CommentBox ? 'flex' : 'none'}} id="CommentBox"></textarea>
                        <button className="CommentBTN" onClick={() => SetCommentBox(false)}style={{display: CommentBox ? 'flex' : 'none'}} >X</button>
                        <button className="CommentBTN" onClick={() => SaveComment(comment)} >Submit</button>
                    </div>
                }
            </div>
            {/*{checkComments()}*/}
            {CommentSection && <CommentCard PostID={post.id}/>}
        </div>

    )
}


