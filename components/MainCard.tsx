import {supabase} from "@/lib/supabase";
import {useEffect} from "react";
import DailyChar from "@/components/DailyChar";
import '../app/css/MainCard.css'
import ProfileCard from "@/components/ProfileCard"
export default function MainCard(){


    return (
        <div id="MainContainer">
            <div id="Header-Main-Cards">
                <div id="CharCard" className="TopCard">
                    <DailyChar></DailyChar>
                </div>
                <div id="Profile-Card">
                    <ProfileCard></ProfileCard>
                </div>
            </div>
            <div className="TopCard" id = "Banner-Card">
                <img id = "BannerIMG" src="/assets/Miscellaneous/creative_domain_banner_1.png"></img>
            </div>
            <div className="RowContainer">
                <div className="MainCard">
                    <div className="Header-Container">
                        <h1>JOSH'S CREATIVE DOMAIN</h1>
                        <img src="assets/gifs/firstSprite.gif" alt="My GIF"/>
                    </div>
                    <p>
                    Welcome Welcome! This is my blog for all my creative/cs ideas, projects, work, thoughts
                        WHATEVER.
                        Everything here has been coded by yours truly and still VERY EARLY in development so I hope you
                        enjoy what I've made here!</p>
                </div>
                <div className="SideCard">
                    <h1>Navigation</h1>
                    <ul>
                        <li><a href="https://letterboxd.com/Jwolde/">LetterBoxd</a></li>
                        <li><a href="https://pin.it/25ry1CVF1">Pinterest</a></li>
                        <li><a href="https://github.com/JMWolde">Github</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}