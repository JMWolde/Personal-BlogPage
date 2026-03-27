"use client"
import "../css/globals.css";
import "../css/card.css";
// import TextPost from "@/components/TextBox";
import {useState} from "react";
import {useRouter} from "next/navigation";
import {supabase} from "@/lib/supabase";

export default function CreatePage() {

    return (
        <main>

            <div id= "PostContainer"></div>



<PostBox></PostBox>
            {/*</div>*/}

            <h1>This is post creation</h1>
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
        await supabase.from("Posts").insert({ Images: imageURL })
        const { data : PostImage } = await supabase
            .from("Posts")
            .select("Images")
            .order("created_at" , {ascending: false})
            .limit(1)
        DisplayImages(PostImage?.[0].Images && PostImage[0].Images)


    }

}



async function handleTextUpload(Text_Content: string) {
        await supabase.from("Posts").insert({ Post_Text: Text_Content })
    const { data : PostText } = await supabase
    .from("Posts")
        .select("Post_Text")
        .order("created_at" , {ascending: false})
        .limit(1)
    DisplayText(PostText?.[0].Post_Text && PostText[0].Post_Text)

    }


    async function HandlePostUpload(files : FileList, Text_Content : string) {
    for (const file of files) {
        const { data , error } = await supabase.storage
            .from("PostImages")
            .upload(`images/${file.name}`, file)
        console.log(error)
        const { data: urlData} = await supabase.storage
            .from("PostImages")
            .getPublicUrl(`images/${file.name}`)
        const imageURL = urlData.publicUrl
        await supabase.from("Posts").insert({ Post_Text: Text_Content, Images: imageURL })
        HandlePostRetrieval(files as FileList, Text_Content)

    }
    }
    async function HandlePostRetrieval(files : FileList, Text_Content : string) {
    const {data : Post} = await supabase
        .from("Posts")
        .select("")
        .order("created_at" , {ascending: false})
        DisplayPost(Post?.[0])
    }


async function DisplayPost(Post){

    const PostCard = document.createElement("div")
    PostCard.className = "PostCard"
    document.body.appendChild(PostCard)
const TextDisplay = document.createElement("p")
    const imageDisplay = document.createElement("img")
    TextDisplay.innerText= Post.Post_Text
    imageDisplay.src = Post.Images
    PostCard!.appendChild(imageDisplay)
    PostCard!.appendChild(TextDisplay)
}















async function DisplayText(Post_Text: string) {
    const PostCon = document.getElementById("PostContainer") // post container
    const PostCard = document.createElement("div") // Post individual
    PostCard.className = "PostCard"
    const TextDisplay = document.createElement("p")
    TextDisplay.innerText= Post_Text
    PostCard!.appendChild(TextDisplay)
    PostCon!.prepend(PostCard)
}





async function DisplayImages(Images : string) {
    const PostCard = document.createElement("div")
    PostCard.className = "PostCard"
    document.body.appendChild(PostCard)
    const imageDisplay = document.createElement("img")
    imageDisplay.src = Images
    PostCard!.prepend(imageDisplay)
}



function PostBox() {

    const [text, setText] = useState("");
    const [Post_image, setImage] = useState<FileList | null>(null);




    function CreatePost() {
        if(Post_image && text) {
            Post_image && HandlePostUpload(Post_image, text)
        } else if (Post_image) {
            Post_image && handleImageUpload(Post_image)
        } else if (text) {
            handleTextUpload(text)
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
            <input type="file" multiple onChange={e => {
                e.target.files && showImages(e.target.files)
                e.target.files && setImage(e.target.files)
            }}/>
            <textarea placeholder={"Type here"} onChange={e => {
                setText(e.target.value)

            }}
                id="TextPost"></textarea>
            <button onClick={CreatePost} id="POSTBTN">Post</button>
        </div>

)


}