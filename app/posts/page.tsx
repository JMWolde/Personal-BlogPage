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
    const [commentName, setCommentName] = useState("Commenter");

    async function SaveComment(comment) {
        const { data, error } = await supabase.from("Comments").insert({ comment_text: comment, post_id: post.id, comment_Name: commentName})
        setCommentSection(true);
        alert("Comment Posted!")
    }
    return (
        <div className="PageContainer">
            <div className="PageCard">
                <h1>JOSH</h1>
                <p>{post.Post_Text}</p>
                {post.Images && <img src={post.Images} alt="post"/>}
                <h2>{post.id}</h2>
                <h4>{post.created_at?.split("T")[0]}</h4>
                <button className="RemoveBTN" onClick={() => handleRemove(post)} style={{display: CommentBox ? 'none' : 'flex'}}>REMOVE</button>
                <button className="CommentBTN" onClick={() => SetCommentBox(true)} style={{display: CommentBox ? 'none' : 'flex'}} >COMMENT</button>
                {CommentBox &&
                    <div className="CommentSection">
                        <div className="TopRow">



                            <input type="text" placeholder={"  Name"} onChange={e => {
                                setCommentName(e.target.value)
                            }} style={{display: CommentBox ? 'flex' : 'none'}} id="CommentNameBox"></input>



                            <button className="BTN" onClick={() => SetCommentBox(false)}
                                    style={{display: CommentBox ? 'flex' : 'none'}}>X
                            </button>
                            <button className="BTN" onClick={() => SaveComment(comment, commentName)}>SUBMIT
                            </button>
                        </div>
                        <textarea placeholder={"  Comment here"} onChange={e => {
                            setComment(e.target.value)
                        }} style={{display: CommentBox ? 'flex' : 'none'}} id="CommentBox"></textarea>
                    </div>
                }
            </div>
            {CommentSection && <CommentCard PostID={post.id}/>}
        </div>

    )
}


