import {supabase} from "@/lib/supabase";
import {useEffect} from "react";

export default function MainCard(){


    return (
        <div id="MainContainer">
            <div className="TopCard">
                <h1>Creative Domain Banner</h1>
            </div>
            <div className="RowContainer">
            <div className="MainCard">
                <h1>JOSH'S CREATIVE DOMAIN</h1>
                <p>
                    Welcome Welcome! This is my blog for all my creative/cs ideas, projects, work, thoughts WHATEVER.
                    Everything here has been coded by yours truly and still VERY EARLY in development so I hope you
                    enjoy what I've made here!</p>
            </div>
            <div className="SideCard">
                <h1>Navigation</h1>
                <ul>
                    <li> <a href="https://letterboxd.com/Jwolde/">LetterBoxd</a></li>
                    <li><a href="https://pin.it/25ry1CVF1">Pinterest</a></li>
                    <li><a href="https://github.com/JMWolde">Github</a></li>
                </ul>
            </div>
            </div>
        </div>
    )
}