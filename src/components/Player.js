import React from "react";
import "../styles/Player.css";
import Body from "./Body";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

const Player = ({ spofity }) => {
  return (
    <div className="player">
      <div className="player_body">
        <Sidebar />
        <Body />
      </div>
    <Footer />
    </div>
  );
};

export default Player;
