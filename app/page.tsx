"use client"
import "./globals.css";
import "./card.css";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat"
dayjs.extend(customParseFormat)
import Card from "../components/Card";
import { useSearchParams } from "next/navigation";
import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import {supabase} from "@/lib/supabase";
export default function HomePage() {
    const searchParams = useSearchParams();
    const value = searchParams.get("key");
  return (
      <main>
          <div id="MainContainer">
              <div className="MainCard">
                  <h1 >JOSH'S CREATIVE DOMAIN</h1>
                  <p>
                      Welcome Welcome! This is my blog for all my creative/cs ideas, projects, work, thoughts WHATEVER.
                      Everything here has been coded by yours truly so I hope you enjoy what I've made here!</p>
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
        if(post.Images && post.Post_Text) {
            DisplayPost(post)
        } else if (post.Images) {
            DisplayImages(post)
        } else if (post.Post_Text) {
            DisplayText(post)
        } else {
            alert("You fucked up nigga")
        }
    }
}
async function DisplayPost(Post){
    const PostCon = document.getElementById("PostContainer")
    const PostCard = document.createElement("div")
    const ProfileName = document.createElement("h1")
    const DateText = document.createElement("h4")
    DateText.innerText= await ParseDate(Post)
    PostCard.className = "PostCard"
    ProfileName.innerText= "JOSH"
    const TextDisplay = document.createElement("p")
    const imageDisplay = document.createElement("img")
    TextDisplay.innerText= Post.Post_Text
    imageDisplay.src = Post.Images
    PostCard!.appendChild(imageDisplay)
    PostCard!.appendChild(TextDisplay)
    PostCard!.prepend(ProfileName)
    PostCard!.appendChild(DateText)
    PostCon!.prepend(PostCard)
}

async function DisplayText(Post) {
    const PostCon = document.getElementById("PostContainer") // post container
    const PostCard = document.createElement("div")// Post individual
    const ProfileName = document.createElement("h1")
    const DateText = document.createElement("h4")
    DateText.innerText= await ParseDate(Post)
    ProfileName.innerText= "JOSH"
    PostCard.className = "PostCard"
    const TextDisplay = document.createElement("p")
    TextDisplay.innerText= Post.Post_Text
    PostCard!.appendChild(TextDisplay)
    PostCard!.prepend(ProfileName)
    PostCard!.appendChild(DateText)
    PostCon!.prepend(PostCard)
}
async function DisplayImages(Post) {
    const PostCon = document.getElementById("PostContainer")
    const PostCard = document.createElement("div")
    const ProfileName = document.createElement("h1")
    const DateText = document.createElement("h4")
    DateText.innerText= await ParseDate(Post)
    ProfileName.innerText= "JOSH"
    PostCard.className = "PostCard"
    const imageDisplay = document.createElement("img")
    imageDisplay.src = Post.Images
    PostCard!.prepend(imageDisplay)
    PostCard!.prepend(ProfileName)
    PostCard!.appendChild(DateText)
    PostCon!.prepend(PostCard)
}


