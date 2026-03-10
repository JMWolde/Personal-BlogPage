import { useState} from "react";

export default function TextBox() {
    const [text, setText] = useState("");
    function handleSubmit() {
        return <p>{text}</p>
    }

    return (
        <div>
            <textarea placeholder= {"Type here nigga"}onChange={e => setText(e.target.value)} id="TextPost"></textarea>
        </div>
    )




}