import React, { Component } from "react";
import "./VideoPlayer.css"
import video from "./video.mp4"

class VideoPlayer extends Component {
    render(){
      return(
          <video controls src={video} >

          </video>
        
      )
    }
}

export default VideoPlayer;