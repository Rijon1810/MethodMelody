import React from "react";
import ReactPlayer from "react-player";
import "./react-player.css";

export default function Player({ url }) {
  return (
    <div className="player-wrapper">
      <ReactPlayer
        className="react-player"
        url={url}
        width="100%"
        height="100%"
        controls="true"
        style={{ outline: "none" }}
      />
    </div>
  );
}
