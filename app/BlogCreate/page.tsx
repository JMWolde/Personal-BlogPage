"use client"
import "../css/globals.css";
import "../css/card.css";
import "../css/BlogCreate.css";
// import TextPost from "@/components/TextBox";
import {useState} from "react";
import {useRouter} from "next/navigation";
import {supabase} from "@/lib/supabase";
import {string} from "postcss-selector-parser";

export default function CreatePage() {

    return (
        <main>

            <div id= "BlogContainer"></div>



            <BlogBox></BlogBox>

            <h1>This is blog creation</h1>
        </main>
    )
}






async function handleImageUpload(files: FileList) {
    for (const file of files) {
        const { data , error } = await supabase.storage
            .from("PostImages")
            .upload(`images/${file.name}`, file)
        console.log(error)
        const { data: urlData} = await supabase.storage
            .from("PostImages")
            .getPublicUrl(`images/${file.name}`)
        const imageURL = urlData.publicUrl
        await supabase.from("Blog").insert({ Blog_Images: imageURL })
        const { data : BlogImage } = await supabase
            .from("Blog")
            .select("Blog_Images")
            .order("created_at" , {ascending: false})
            .limit(1)


    }

}



async function handleTextUpload(Text_Content: string, Title : string) {
    await supabase.from("Blog").insert({ Blog_Text: Text_Content, Blog_Title : Title })

}
// here

async function HandlePostUpload(files : FileList, Text_Content : string, Title : string) {
    for (const file of files) {
        const { data , error } = await supabase.storage
            .from("Blog")
            .upload(`images/${file.name}`, file)
        console.log(error)
        const { data: urlData} = await supabase.storage
            .from("Blog_Images")
            .getPublicUrl(`images/${file.name}`)
        const imageURL = urlData.publicUrl
        await supabase.from("Blog").insert({ Blog_Text: Text_Content, Images: imageURL, Blog_Title : Title })

    }
}

function BlogBox() {

    const [text, setText] = useState("");
    const [header, setHeader] = useState("");
    const [CreativeWork, setCreativeWork] = useState(false)
    const [Post_image, setImage] = useState<FileList | null>(null);




    function CreatePost() {
        if(Post_image && text) {
            Post_image && HandlePostUpload(Post_image, text, header)
        } else if (Post_image) {
            alert("you dont post a blog with just an image")
        } else if (text) {
            handleTextUpload(text, header)
        } else {
            alert("what?")
        }


    }


    function showImages(files: FileList) {
        const preview1 = document.createElement("div")
        preview1.className = "preview"
        document.body.appendChild(preview1)
        for (const file of files) {
            const img = document.createElement("img");
            img.src = URL.createObjectURL(file);
            preview1!.appendChild(img);
        }
    }
    return (
        <div className="MakeSomething">
            <textarea placeholder={"Blog Title"} onChange={e => {
                setHeader(e.target.value)

            }}
            ></textarea>
            <textarea placeholder={"Type here"} onChange={e => {
                setText(e.target.value)

            }}
                      id="TextPost"></textarea>
            <input type="file" multiple onChange={e => {
                e.target.files && showImages(e.target.files)
                e.target.files && setImage(e.target.files)
            }}/>
            <button onClick={CreatePost} id="POSTBTN">Post</button>
        </div>

    )


}