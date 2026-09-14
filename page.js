"use client";

import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");
  const [listening, setListening] = useState(false);

  function listen() {
    if (!("webkitSpeechRecognition" in window)) {
      alert("A böngésződ nem támogatja a hangfelismerést.");
      return;
    }

    const recognition = new webkitSpeechRecognition();

    recognition.lang = "hu-HU";
    recognition.continuous = false;
    recognition.interimResults = false;

    setListening(true);

    recognition.onresult = (event) => {
      setMessage(event.results[0][0].transcript);
      setListening(false);
    };

    recognition.onerror = () => {
      setListening(false);
    };

    recognition.onend = () => {
      setListening(false);
    };

    recognition.start();
  }

  return (
    <main className="jarvis">
      <div className="orb">
        <div className="orb-inner">J</div>
      </div>

      <h1>JARVIS</h1>

      <p>
        {listening ? "Hallgatlak..." : "Miben segíthetek?"}
      </p>

      {message && (
        <div className="message">
          {message}
        </div>
      )}

      <button onClick={listen}>
        🎙️
      </button>
    </main>
  );
}
