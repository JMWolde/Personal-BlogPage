"use client"
import "../globals.css";
import Card from "@/components/Card";
// import TextPost from "@/components/TextBox";
import {useState} from "react";
import {useRouter} from "next/navigation";
import {supabase} from "@/lib/supabase";

export default function CreatePage() {

    return (
        <main>

            {/*<div className="PostBox">*/}
            {/*    <Card>*/}
            {/*        /!*<textarea placeholder={"Type here nigga"} onChange={e => setText(e.target.value)} id="TextPost"></textarea>*!/*/}
            {/*        /!*<textarea placeholder={"Write Here"} id="TextBox.tsx"></textarea>*!/*/}
            {/*        <input type="file" multiple onChange={e => e.target.files && showImages(e.target.files)}/>*/}
                    <div id="preview"></div>
            {/*    </Card>*/}
            {/*    <TextPost/>*/}


            {/*</div>*/}
            <PostBox></PostBox>

            <h1>This is post creation</h1>
        </main>
    )
}






async function handleImageUpload(files: FileList) {
    for (const file of files) {
        const { data } = await supabase.storage
            .from("PostImages")
            .upload(`images/${file.name}`, file)
        const { data: urlData} = await supabase.storage
        .from("PostImages")
            .getPublicUrl(`images/${file.name}`)
        const imageURL = urlData.publicUrl
        const { error } = await supabase.from("Posts").insert({ Images: imageURL })
        console.log(error)
        // await supabase.from("Posts").insert({ Images: imageURL })
        const { data : PostImage } = await supabase
            .from("Posts")
            .select("Images")
            .order("created_at" , {ascending: false})
            .limit(1)
        DisplayImages(PostImage?.[0].Images && PostImage[0].Images)
    }

}






async function handleTextUpload(Post_Text: string) {
        await supabase.from("Posts").insert({ Post_Text: Post_Text })
    const { data : PostText } = await supabase
    .from("Posts")
        .select("Post_Text")
        .order("created_at" , {ascending: false})
        .limit(1)
    DisplayText(PostText?.[0].Post_Text && PostText[0].Post_Text)

    }





async function DisplayText(Post_Text: string) {
    const preview = document.getElementById("preview")
    const FinalPostText = document.createElement("p")
    FinalPostText.innerText = Post_Text
    preview!.appendChild(FinalPostText);
}





async function DisplayImages(Images : string) {
    const preview = document.getElementById("preview");
        const img = document.createElement("img");
        img.src = Images;
        preview!.appendChild(img);
}



function PostBox() {

    const [text, setText] = useState("");
    const [image, setImage] = useState<FileList | null>(null);




    function CreatePost() {
        image && handleImageUpload(image)
        text && handleTextUpload(text);

    }



    function showImages(files: FileList) {
        const preview = document.getElementById("preview");
        for (const file of files) {
            const img = document.createElement("img");
            img.src = URL.createObjectURL(file);
            preview!.appendChild(img);
        }
    }

    return (
        <div className="MakeSomething">
            <input type="file" multiple onChange={e => {
                e.target.files && showImages(e.target.files)
                e.target.files && setImage(e.target.files)
                // e.target.files && handleImageUpload(e.target.files)
            }}/>
            <textarea placeholder={"Type here nigga"} onChange={e => {
                setText(e.target.value)

            }}
                id="TextPost"></textarea>
            <button onClick={CreatePost} id="POSTBTN">Post</button>
        </div>

)


}