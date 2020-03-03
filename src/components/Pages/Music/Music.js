import React from "react";

import "./Music.css"
import AudioPlayer from "../../AudioPlayer/AudioPlayer";



function Music() {
  return (
    <div>
      <div className="main_music">
        <AudioPlayer />
        </div>
    </div>
  )
}

export default Music;