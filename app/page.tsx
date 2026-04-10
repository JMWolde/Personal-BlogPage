"use client"
import "./css/globals.css";
import "./css/card.css";
import "./css/MainCard.css";
import "./css/PostCard.css";
import "./css/Button.css";
import "./css/Home.css"
import MainCard from "../components/MainCard";
import PostCard from "@/components/PostCard";
import DailyChar from "../components/DailyChar";
import ProfileCard from "../components/ProfileCard";
export default function HomePage() {
    return (
        <main>
            <div className="Home-Container">
                <div className="Left-Column">
                    <div id="CharCard" className="TopCard">
                        <DailyChar></DailyChar>
                    </div>
                </div>
                <div className="Center-Column">
                    <div id="Header-Main-Cards">
                        <div id="Profile-Card">
                        <ProfileCard></ProfileCard>
                        </div>
                    </div>
                    <div className="MainCard">
                        <div className="Header-Container">
                            <h1><b>JOSH'S CREATIVE DOMAIN</b></h1>
                            <img src="assets/gifs/firstSprite.gif" alt="My GIF"/>
                        </div>
                        <p>
                            Welcome Welcome! This is my blog for all my creative/cs ideas, projects, work, thoughts
                            WHATEVER.
                            Everything here has been coded by yours truly and still VERY EARLY in development so I hope
                            you
                            enjoy what I've made here!</p>
                    </div>
                    <PostCard/>
                </div>
                <div className="Right-Column">
                    <div className="SideCard">
                        <h1><b>My Socials</b></h1>
                        <ul>
                            <li><a href="https://letterboxd.com/Jwolde/">LetterBoxd</a></li>
                            <li><a href="https://pin.it/25ry1CVF1">Pinterest</a></li>
                            <li><a href="https://github.com/JMWolde">Github</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    )
}
