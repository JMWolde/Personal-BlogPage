"use client"
import "./css/globals.css";
import "./css/card.css";
import "./css/MainCard.css";
import "./css/PostCard.css";
import "./css/Button.css";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat"
dayjs.extend(customParseFormat)
import Card from "../components/Card";
import {createElement, use, useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import {supabase} from "@/lib/supabase";
import {resolveUrl} from "next/dist/lib/metadata/resolvers/resolve-url";
export default function HomePage() {
  return (
      <main>
          <div id="MainContainer">
              <div className="MainCard">
                  <h1 >JOSH'S CREATIVE DOMAIN</h1>
                  <p>
                      Welcome Welcome! This is my blog for all my creative/cs ideas, projects, work, thoughts WHATEVER.
                      Everything here has been coded by yours truly and still VERY EARLY in development so I hope you enjoy what I've made here!</p>
              </div>
          </div>
          <RetrievePosts/>

      </main>
  )
}

// HELPER FUNCTIONS

function RetrievePosts() {
    const [Posts, setPosts] = useState([])

    useEffect(() => {
        GetPosts(setPosts)
    }, [])
    return ( <div id="PostContainer"></div>

    )
}

async function GetPosts(setPosts) {
    const {data : Post} = await supabase
    .from("Posts")
    .select("")
        .order("created_at")
    setPosts()
    DisplayAllPosts(Post)
}
async function ParseDate(Post){
    const Date = document.createElement("h4");
    Date.innerText = Post.created_at;
    const DateYear = document.createElement("h4");
    const DateTime = document.createElement("h4");
    DateYear.innerText = Date.innerText.split("T")[0]; // day of year
    DateTime.innerText = Date.innerText.split("T")[1]; // time of day
    DateTime.innerText = DateTime.innerText.split(".")[0]; // time of day cleaned up
    DateTime.innerText = dayjs( DateTime.innerText, "HH:mm:ss").format("h:mm A") // 24 -> 12
    DateTime.prepend(" ")
    DateYear.appendChild(DateTime);
    return DateYear.innerText;
}


// * DISPLAYING POSTS *

async function DisplayAllPosts(Post) {
    for (const post of Post) {
       await buildPostCard(post)
    }
}

function CommentPage(PostCard1){
    const PostID = PostCard1.querySelector("h2")
   window.location.href = `/posts?id=${PostID.innerText}`
}

async function removeCard(PostCard) {
    const key = process.env.NEXT_PUBLIC_MY_SECRET_KEY
    const PostCon = document.getElementById("PostContainer")
    const PostID = PostCard.querySelector("h2")
    const value = window.prompt("Enter Master Key To Remove")
    if (value == key) {
        PostCon!.removeChild(PostCard)
        await supabase.from("Posts").delete().eq('id', PostID.innerText)
    } else {
        alert("NAH NAH")
    }
}

async function buildPostCard(Post){
    if(Post.Images || Post.Post_Text) {
        const PostCon = document.getElementById("PostContainer")
        const PostCard = document.createElement("div")
        const ProfileName = document.createElement("h1")
        const DateText = document.createElement("h4")
        const PostID = document.createElement("h2")
        const CommentCounter = document.createElement("button")
        CommentCounter.id = "CommentCounterBTN"
        CommentCounter.onclick = () => CommentPage(PostCard)


        PostID.innerText = Post.id;
        DateText.innerText = await ParseDate(Post)
        PostCard.className = "PostCard"
        ProfileName.innerText = "JOSH"

        if (Post.Post_Text) {
            const TextDisplay = document.createElement("p") // text post
            TextDisplay.innerText = Post.Post_Text
            PostCard!.appendChild(TextDisplay)
        }
        if (Post.Images) {
            const imageDisplay = document.createElement("img") // image post
            imageDisplay.src = Post.Images
            PostCard!.appendChild(imageDisplay)
        }
        PostCard!.prepend(ProfileName)
        PostCard!.appendChild(PostID)
        const PostCardNEW = getButtons(PostCard)
        PostCardNEW!.appendChild(DateText)
        CommentCounter.innerText = await countComments(PostCardNEW)
        PostCardNEW!.appendChild(CommentCounter)
        PostCon!.prepend(PostCardNEW)
    } else {
        alert("There is nothing")
    }
}
function getButtons(PostCard) {
    const RemoveBTN = document.createElement("button")
    RemoveBTN.className = "RemoveBTN"
    RemoveBTN.innerText= "Remove"
    RemoveBTN.onclick = () => removeCard(PostCard);
    const CommentBTN = document.createElement("button")
    CommentBTN.className = "CommentBTN"
    CommentBTN.innerText= "Comment"
    CommentBTN.onclick = () => CommentPage(PostCard)

    PostCard!.appendChild(RemoveBTN)
    PostCard!.appendChild(CommentBTN)
    return PostCard
}
async function countComments(item) {
    const PostID = item.querySelector("h2")
    const CommentCounter = document.createElement("button")
    const {count, error} = await supabase
    .from("Comments")
        .select('*', {count: 'exact', head: true})
        .eq('post_id', PostID.innerText)
    return `Comments(${count})`

}
