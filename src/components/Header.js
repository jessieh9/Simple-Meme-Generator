import React from "react";
import troll from "../images/troll-face.png";

export default function Header() {
    return (
        <div className="nav">
            <div className="nav--logo">
                <img className="nav--img" src={troll} alt="troll-face" />
                <h1 className="nav--title">Meme Generator</h1>
            </div>
            <p className="nav--text">React Course - Project 3</p>
        </div>
    )
};