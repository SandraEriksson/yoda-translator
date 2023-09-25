import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

function Translate() {
    let [text, setText] = useState("");
    let [yodaText, setYodaText] = useState("");

    const onClick = () => {
        axios
            .post("/translate/yoda.json", { text })
            .then(res => {
                const { translated } = res.data.contents;
                setYodaText(translated);
            })
    };


    return (
            <>
                <h1>Yoda Translation</h1>
                <div className="inputBox">
                    <input type="text" value={text} onChange={e => setText(e.target.value)} placeholder="Type something in english.." />
                    <button onClick={onClick}>Translate</button>
                </div>
                <main>
                    <div className="translate-box">
                        <p>{yodaText}</p>
                    </div>
                    <div className="yoda-img">
                        <img alt="Yoda"></img>
                    </div>
                </main>
            </>
    );
}

export default Translate;
