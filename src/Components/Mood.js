import React, { useState } from "react";

export default function Mood() {
  const [currentMood, setMood] = useState("");
  const CheckMood = () => {
    if (currentMood === "happy") {
      return <h1>😊</h1>;
    } else if (currentMood === "sad") {
      return <h1>😢</h1>;
    } else if (currentMood === "cool") {
      return <h1>😎</h1>;
    }
  };
  return (
    <>
      <div className="mb-5 my-3">
        <div className="container mx-5">
          <h1>Mood Selector</h1>
        </div>
        <button
          type="button"
          onClick={() => setMood("happy")}
          className="btn btn-dark mx-5 my-3"
        >
          Happy 😊😊
        </button>
        <button
          type="button"
          onClick={() => setMood("sad")}
          className="btn btn-dark mx-5 my-3"
        >
          Sad 😢😢
        </button>
        <button
          type="button"
          onClick={() => setMood("cool")}
          className="btn btn-dark mx-5 my-3"
        >
          Cool 😎😎
        </button>
      </div>
      <div
        className="container"
        style={{
          display:"flex",
          alignItems: "center",
          justifyContent: "center",
          height: "200px",
          width: "900px",
        }}
      >
        {CheckMood()}
      </div>
    </>
  );
}
