"use client"
import "../css/globals.css";
import "../css/card.css";
import "../css/PostCreate.css";
// import TextPost from "@/components/TextBox";
import {useState} from "react";
import {useRouter} from "next/navigation";
import {supabase} from "@/lib/supabase";

export default function setProfile() {
    function ProfileMaker() {
        export type ProfileCard = {
            status : string;
            ProfilePic : Image;

        }
        const [Image, setImage] = useState(null)
        const [Status, setStatus] = useState("");
        return (
            <div className="MakeProfile">
                <input type="file"onChange={e => {
                    setImage(e.target.files)
                }}/>
                <textarea placeholder={"Type here"} onChange={e => {
                    setStatus(e.target.value)
                }}
                          id="StatusBox"></textarea>
                <button onClick={setProfile} id="SubmitBTN">Submit</button>
            </div>

        )


    }
    return (
        <main>
            <div className="Profile-Creation">


                <ProfileMaker></ProfileMaker>
            </div>


        </main>
    )
}
