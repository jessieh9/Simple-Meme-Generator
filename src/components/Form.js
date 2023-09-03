import React from "react";

export default function Form() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    });

    const [memesArray, setMemesArray] = React.useState([]);

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setMemesArray(data.data.memes))
    }, [])

    function getImage() {
        const img = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[img].url;
        setMeme(prevValues => {
            return {
                ...prevValues,
                randomImage: url
            }
        });
    }

    function handleChange(event) {
        const { name, value } = event.target
        setMeme(prevValues => ({
            ...prevValues,
            [name]: value
        }))
    }

    return (
        <main>
            <div className="form">
                <input
                    className="form--input"
                    type="text"
                    placeholder="Top text"
                    name="topText"
                    value={meme.topText}
                    onChange = {handleChange}
                />
                <input
                    className="form--input"
                    type="text"
                    placeholder="Bottom text"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange = {handleChange}
                />
                <button
                    className="form--btn"
                    onClick={getImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    );
};