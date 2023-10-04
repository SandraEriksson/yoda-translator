import React, { useState } from 'react';
import './App.css';

function Translate() {
    //Define state varibles for input text and Yoda's translated text
    let [text, setText] = useState("");
    let [yodaText, setYodaText] = useState("");

    //Define the click event handler
    const onClick = () => {
        //Sending a POST request to the Yoda translation API
        fetch("/translate/yoda.json", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ text }),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                //Extract the translated text from the API response
                const { translated } = data.contents;
                //Update the Yoda text state with the translation
                setYodaText(translated);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };

    //Return the JSX for the Translate component
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
