import React from "react";
import "./Home.css"
import bg from "./gradientmap.png"

function Home() {
  return (
    <div className="home-main">
      <img className="home-logo" src={bg} alt=""/>
      <p className="footer-message">download the album GAME-FREAK from hexproof.bancamp.com</p>
    </div>
  )
}

export default Home;