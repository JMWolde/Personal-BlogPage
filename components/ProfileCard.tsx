
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
                        <h2><b>Currently Playing:</b> Hollow Knight</h2>
                        <h2><b>Currently Watching:</b> Smallville</h2>
                        <h2><b>Currently Reading:</b> The Dark Knight Returns</h2>
                        <h2><b>Song On Repeat:</b> oh yeah - Steve Lacy</h2>
                        <h2><b>Status:</b> Indigo is taking all my money</h2>
                        <h2><b>Learning:</b> Facial Perspectives</h2>
                    </div>
                    <img src="/assets/ProfilePics/PicOFMe.jpg"></img>
                </div>
            </div>
            </div>

            )
            }