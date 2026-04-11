
import '../app/css/MainCard.css'
import DecryptedText from "../components/DecryptedText";
export default function ProfileCard(){
    return (
        <div className="ProfileCard">
            <div className="ProfileColumn">
            <div className="Header-Container">
                <div><b>
                    <DecryptedText
                        text="ABOUT ME"
                        animateOn="inViewHover"
                        revealDirection="start"
                        sequential
                        useOriginalCharsOnly={false}
                    />
                </b></div>
            </div>
                <div className="ProfileRow">
                <div className="ProfileTextContainer">
                    <h2><b>Currently Playing:</b> Super Mario Galaxy & Breath Of The Wild</h2>
                    <h2><b>Currently Watching:</b> Invincible</h2>
                    <h2><b>Song On Repeat:</b> The Blonde - TV Girl</h2>
                    <h2><b>Status:</b> cooked for exams</h2>
                    <h2><b>Learning About:</b> how alberta was crazy mega racist</h2>
                </div>
                <img src="/assets/ProfilePics/PicOFMe.jpg"></img>
                </div>
            </div>
            </div>

            )
            }