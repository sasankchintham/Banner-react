import React, { useState } from "react";
import "./Banner.css"; // External CSS for styling

function Banner() {
  const [text, setText] = useState("🔥 Limited Offer: 50% Off!");

  const handleClick = () => {
    setText("🎉 Hurry! Sale Ends Soon!");
  };

  return (
    <div className="banner">
      <h2 className="fade-in">{text}</h2>
      <button className="btn" onClick={handleClick}>Change Text</button>
    </div>
  );
}
export default Banner;
