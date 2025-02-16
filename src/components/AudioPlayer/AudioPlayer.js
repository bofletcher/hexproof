import React, { Component } from "react";
import "./AudioPlayer.css"
import art from "./art.png"
import track1 from "./tracks/1.wav"
import track2 from "./tracks/2.mp3"
import track3 from "./tracks/3.mp3"

function getTime(time) {
  if (!isNaN(time)) {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  }
}

const TRACKS = [
  { id: 1, title: "track1" },
  { id: 2, title: "track2" },
  { id: 3, title: "track3" }
];


class AudioPlayer extends Component {
state = {
  selectedTrack: null,
  player: "stopped",
  currentTime: null,
  duration: null
};

componentDidMount() {
  this.player.addEventListener("timeupdate", e => {
    this.setState({
      currentTime: e.target.currentTime,
      duration: e.target.duration
    });
  });
}

componentWillUnmount() {
  this.player.removeEventListener("timeupdate", () => {});
}

componentDidUpdate(prevProps, prevState) {
  if(this.state.selectedTrack !== prevState.selectedTrack){
    let track;
    switch(this.state.selectedTrack){
      case "track1": 
      track = track1
      break;
      case "track2":
      track = track2
      break;
      case "track3":
      track = track3;
      break;
      default: 
      break;
    }
    if(track){
      this.player.src = track;
      this.player.play()
      this.setState({player: "playing"})
    }
  }
  if (this.state.player !== prevState.player) {
    if (this.state.player === "paused") {
      this.player.pause();
    } else if (this.state.player === "stopped") {
      this.player.pause();
      this.player.currentTime = 0;
      this.setState({ selectedTrack: null });
    } else if (
      this.state.player === "playing" &&
      prevState.player === "paused"
    ) {
      this.player.play();
    }
  }
  if (
    this.state.duration &&
    !isNaN(this.state.duration) &&
    this.state.duration === this.state.currentTime
  ) {
    const currentTrackIndex = TRACKS.findIndex(
      track => track.title === this.state.selectedTrack
    );
    const tracksAmount = TRACKS.length - 1;
    if (currentTrackIndex === tracksAmount) {
      this.setState({
        selectedTrack: null,
        player: "stopped",
        currentTime: null,
        duration: null
      });
    } else {
      this.handleSkip("next");
    }
  }
}

handleSkip = direction => {
  const currentTrackIndex = TRACKS.findIndex(
    track => track.title === this.state.selectedTrack
  );
  const tracksAmount = TRACKS.length - 1;
  if (direction === "previous") {
    const previousTrack =
      currentTrackIndex === 0 ? tracksAmount : currentTrackIndex - 1;
    const trackToPlay = TRACKS[previousTrack];
    this.setState({ selectedTrack: trackToPlay.title });
  } else if (direction === "next") {
    const nextTrack =
      currentTrackIndex === tracksAmount ? 0 : currentTrackIndex + 1;
    const trackToPlay = TRACKS[nextTrack];
    this.setState({ selectedTrack: trackToPlay.title, duration: null });
  }
};

setTime = time => {
  this.player.currentTime = time;
};


render(){
  const list = TRACKS.map(item => {
    return (
      <li
        key={item.id}
        onClick={() => this.setState({ selectedTrack: item.title })}
        style={{
          fontWeight: item.title === this.state.selectedTrack && "bold"
        }}
      >
        {item.title}
      </li>
    );
  });

  
  // const currentTime = getTime(this.state.currentTime)
  // const duration = getTime(this.state.duration)

  return (
    <>
    <div className="audio-player">
      <div className="image_title">      
      <img className="album_art" src={art} alt="album-art"/>
      <h1>self titled</h1>
      </div>
      <div className="player">
        <ul className="tracklist">{list}</ul>
        <TimeBar
          setTime={this.setTime}
          currentTime={this.state.currentTime}
          duration={this.state.duration}
        />
        {this.state.player !== "stopped" && (
          <div className="buttons">
            <button onClick={() => this.handleSkip("previous")}>
              Previous
            </button>
            {this.state.player === "paused" && (
              <button onClick={() => this.setState({ player: "playing" })}>
                Play
              </button>
            )}
            {this.state.player === "playing" && (
              <button onClick={() => this.setState({ player: "paused" })}>
                Pause
              </button>
            )}
            <button onClick={() => this.setState({ player: "stopped" })}>
              Stop
            </button>
            <button onClick={() => this.handleSkip("next")}>Skip</button>
          </div>
        )}
      </div>
      <audio ref={ref => (this.player = ref)} />
      </div>
    </>
  );
}
}

function TimeBar({ currentTime, duration, setTime }) {
const formattedCurrentTime = getTime(currentTime);
const formattedDuration = getTime(duration);
const sBits = [];
let count = 0;
while (count < duration) {
  sBits.push(count);
  count++;
}
const seconds = sBits.map(second => {
  return (
    <div
      key={second}
      onClick={() => setTime(second)}
      style={{
        float: "left",
        cursor: "pointer",
        height: "30px",
        width: `${200 / Math.round(duration)}px`,
        background:
          currentTime && Math.round(currentTime) === second
            ? "white"
            : "black",
        transition: "all 0.5s ease-in-out"
      }}
    />
  );
});
return (
  <div className="timebar">
    <div className="bar">{seconds}</div>
    {currentTime ? (
      <div className="time">
        {formattedCurrentTime} / {formattedDuration}
      </div>
    ) : (
      ""
    )}
  </div>
);
        
      
      
}

export default AudioPlayer;