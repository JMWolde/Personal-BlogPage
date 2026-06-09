
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
                        <h2><b>Currently Playing:</b> Forza Horizon 6 & New Lego Batman</h2>
                        <h2><b>Currently Watching:</b> Smallville</h2>
                        <h2><b>Currently Reading:</b> All-Star Superman</h2>
                        <h2><b>Song On Repeat:</b> ydoifeel? - Saam Sultan</h2>
                        <h2><b>Status:</b> Bored af</h2>
                        <h2><b>Learning:</b> Nothing atm :(</h2>
                    </div>
                    <img src="/assets/ProfilePics/PicOFMe.jpg"></img>
                </div>
            </div>
            </div>

            )
            }