import React from "react";
import "../styles/Footer.css";

import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import { Grid, Slider } from "@material-ui/core";

const Footer = () => {


  return (
    <div className="footer">
      <div className="footer_left">
        <img className="footer_albumLogo" src="" alt=""/>
        <div className="footer_songInfo">
            <h4>Yeah</h4>
            <p>xx</p>
        </div>
      </div>
      <div className="footer_center">
        <ShuffleIcon style={{ fontSize: "2rem" }} className="footer_green" />
        <SkipPreviousIcon
          style={{ fontSize: "2rem" }}
          className="footer_icon"
        />
        <PlayCircleOutlineIcon
          style={{ fontSize: "4rem" }}
          className="footer_icon"
        />
        <SkipNextIcon style={{ fontSize: "2rem" }} className="footer_icon" />
        <RepeatIcon style={{ fontSize: "2rem" }} className="footer_green" />
      </div>
      <div className="footer_right">
        <Grid container spacing={2} className="grid">
          <Grid item>
            <PlaylistPlayIcon style={{ fontSize: "2rem" }} />
          </Grid>
          <Grid item>
            <VolumeDownIcon style={{ fontSize: "2rem" }} />
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby="continuous-slider" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Footer;
