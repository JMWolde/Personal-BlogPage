
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
                    <h2><b>Currently Playing:</b> Lego Marvel Super Heroes (100% run)</h2>
                    <h2><b>Currently Watching:</b> The Boys s5 & Arrested Development</h2>
                    <h2><b>Song On Repeat:</b> Theme from Superman - John Murphy</h2>
                    <h2><b>Status:</b> Finally coding again</h2>
                    <h2><b>Learning:</b> Unity</h2>
                </div>
                <img src="/assets/ProfilePics/PicOFMe.jpg"></img>
                </div>
            </div>
            </div>

            )
            }