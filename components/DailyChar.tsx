


export default function DailyChar(){
    const characters = [
        {
            id: 1,
            name: "LA KNIGHT",
            image: "assets/Char_Images/LA_KNIGHT.png"
        },
        {
            id: 2,
            name: "AJ STYLES",
            image: "assets/Char_Images/AJ_STYLES.png"
        },
        {
            id: 3,
            name: "ARTHUR MORGAN",
            image: "assets/Char_Images/Arthur_Morgan.png"
        },
        {
            id: 4,
            name: "BRET HART",
            image: "assets/Char_Images/BRET_HART.png"
        },
        {
            id: 5,
            name: "CAPTAIN HOLT",
            image: "assets/Char_Images/CAPTAIN_HOLT.png"
        },
        {
            id: 6,
            name: "CODY RHODES",
            image: "assets/Char_Images/CODY_RHODES.png"
        },
        {
            id: 7,
            name: "IYO SKU",
            image: "assets/Char_Images/IYO_SKY.png"
        },
        {
            id: 8,
            name: "JINX",
            image: "assets/Char_Images/JINX.png"
        },
        {
            id: 9,
            name: "JOHN CENA",
            image: "assets/Char_Images/JOHN_CENA.png"
        },
        {
            id: 10,
            name: "LUCY CHEN",
            image: "assets/Char_Images/LUCY_CHEN.png"
        },
        {
            id: 11,
            name: "MONKEY D. LUFFY",
            image: "assets/Char_Images/LUFFY.png"
        },
        {
            id: 12,
            name: "MARIO",
            image: "assets/Char_Images/MARIO.png"
        },
        {
            id: 13,
            name: "ABED NADIR",
            image: "assets/Char_Images/ABED_NADIR.png"
        },
        {
            id: 14,
            name: "AMY SANTIAGO",
            image: "assets/Char_Images/AMY_SANTIAGO.png"
        },
        {
            id: 15,
            name: "JESSICA DAY",
            image: "assets/Char_Images/JESSICA_DAY.png"
        },
        {
            id: 16,
            name: "SONIC",
            image: "assets/Char_Images/SONIC.png"
        },
    ];
    const today = new Date()
    const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate()
    const character = characters[seed % characters.length]
    return (
        <div className="ItemOfTheDay">
            <h1>Character Of The Day</h1>
            <p>{character.name}</p>
            <img src={character.image}></img>
        </div>
    )
}