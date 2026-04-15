import {use, useEffect, useState} from "react";
import {supabase} from "@/lib/supabase";
import { CommentType } from "./types";
import dayjs from "dayjs"
import '../app/css/CommentCard.css'
import DecryptedText from "@/components/DecryptedText";

export default function CommentCard({PostID}){
    return <GetComments PostID = {PostID}/>
}

function GetComments({PostID}) {
    // const [CreativeFilter,setCreativeFilter] = useState(false);
    const [comments, setComments] = useState<CommentType[] | null>(null);
    useEffect(() => {
        const GetComments = async () => {
            const {data: comments} = await supabase.from("Comments").select().eq('post_id', PostID)
                .returns<CommentType[]>();
            setComments(comments);
        }
        GetComments();
    }, []);

    return (
        <div id="CommentContainer">
            <div id="BlogHeader" style={{marginTop: '1rem'}}><b>
                <DecryptedText
                    text="Comments"
                    animateOn="inViewHover"
                    revealDirection="start"
                    sequential
                    useOriginalCharsOnly={false}
                />
            </b></div>
            {comments?.map((comment) => (<BuildCommentCard key={comment.id} comment={comment}/>))}
        </div>
    )
}

async function handleRemove(comment) {
    const key = process.env.NEXT_PUBLIC_MY_SECRET_KEY
    const value = window.prompt("Enter Master Key To Remove")
    if (value == key) {
        await supabase.from("Comments").delete().eq('id', comment.id)
        alert("Post Removed!")
    } else {
        alert("NAH NAH")
    }
}

async function commentCount(post) {
        const {count, error} = await supabase
            .from("Comments")
            .select('*', {count: 'exact', head: true})
            .eq('post_id', post.id)
        return count
    }
    function BuildCommentCard({comment}) {
        return (
            <>
        <div className="CommentCard">

            <div className="Profile-Header">
                <img src="/assets/ProfilePics/JoshuaMIIPFP.png"></img>
                <h1>Commenter</h1>
            </div>
            <p>{comment.comment_text}</p>
            {/*{post.Images && <img src={post.Images} alt="post"/>}*/}
                        <h2>{comment.id}</h2>
                        <h4>{comment.created_at?.split("T")[0]}</h4>
                        {/*<button className="RemoveBTN" onClick={() => handleRemove(post)}>Remove</button>*/}
                        {/*<button className="CommentBTN" onClick={() => handleComment(post)}>Comment</button>*/}
                    </div>
            </>
        )
    }


