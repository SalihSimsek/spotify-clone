import React from "react";
import "../styles/Player.css";
import Body from "./Body";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

const Player = ({ spotify }) => {
  return (
    <div className="player">
      <div className="player_body">
        <Sidebar />
        <Body spotify={spotify} />
      </div>
    <Footer />
    </div>
  );
};

export default Player;
