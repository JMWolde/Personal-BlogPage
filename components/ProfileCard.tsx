
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
                        <h2><b>Currently Playing:</b> RDR1, GTA SAN AD, GTA 4</h2>
                        <h2><b>Currently Watching:</b> Smallville</h2>
                        <h2><b>Currently Reading:</b> Full Metal Alchemist vol 1</h2>
                        <h2><b>Song On Repeat:</b> ydoifeel? - Saam Sultan</h2>
                        <h2><b>Status:</b> Nobody is responding to my messages</h2>
                        <h2><b>Learning:</b> Drawing the effect, not the object</h2>
                    </div>
                    <img src="/assets/ProfilePics/PicOFMe.jpg"></img>
                </div>
            </div>
            </div>

            )
            }