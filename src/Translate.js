import React, { useState } from 'react';
import './App.css';

function Translate() {
    let [text, setText] = useState("");
    let [yodaText, setYodaText] = useState("");

    const onClick = () => {
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
            const { translated } = data.contents;
            setYodaText(translated);
          })
          .catch((error) => {
            console.error("Error:", error);
          });
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
