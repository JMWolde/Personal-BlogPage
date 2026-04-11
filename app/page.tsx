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
import DecryptedText from "../components/DecryptedText";
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
                            <div style={{marginTop: '1rem'}}><b>
                                <DecryptedText
                                    text="CREATIVE DOMAIN"
                                    animateOn="inViewHover"
                                    revealDirection="start"
                                    sequential
                                    useOriginalCharsOnly={false}
                                />

                            </b></div>
                            {/*<img src="assets/gifs/firstSprite.gif" alt="My GIF"/>*/}
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
                        <div className="Right-Corner">
                            <img src="/assets/Miscellaneous/FixedMiiRender.png" id="MiiCorner"/>
                        </div>
                        <div id="BlogHeader" style={{marginTop: '1rem', marginLeft: '1.5rem'}}><b>
                            <DecryptedText
                                text="MY SOCIALS"
                                animateOn="inViewHover"
                                revealDirection="start"
                                sequential
                                useOriginalCharsOnly={false}
                            />

                        </b></div>
                        <ul>
                            <li><a href="https://letterboxd.com/Jwolde/">LetterBoxd</a></li>
                            <li><a href="https://pin.it/25ry1CVF1">Pinterest</a></li>
                            <li><a href="https://github.com/JMWolde">Github</a></li>
                            <li><a
                                href="https://open.spotify.com/user/ym91kzcbwmjp4vw0u8nxvw10n?si=de9f091ed67b44f4">Spotify</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    )
}
