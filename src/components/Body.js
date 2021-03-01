import React from "react";
import "../styles/Body.css";

import Header from "./Header";
import SongRow from './SongRow'

import { useDataLayerValue } from "../DataLayer";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

const Body = ({ spotify }) => {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();

  const playPlaylist = (id) => {
    spotify.play({
      context_uri: `spotify:playlist:37i9dQZF1E35JvKlWbTxpH`
    }).then((res) => {
      spotify.getMyCurrentPlayingTrack().then((r) => {
        dispatch({
          type: 'SET_ITEM',
          item: r.item
        })
        dispatch({
          type: 'SET_PLAYING',
          playing: true
        })
      })
    })
  }

  const playSong = (id) => {
    spotify.play({
      uris: [`spotify:track:${id}`]
    }).then((res) => {
      spotify.getMyCurrentPlayingTrack().then((r) => {
        dispatch({
          type: 'SET_ITEM',
          item: r.item
        })
        dispatch({
          type: 'SET_PLAYING',
          playing: true
        })
      })
    })
  }

  return (
    <div className="body">
      <Header spofity={spotify} />
      <div className="body_info">
        <img src={discover_weekly?.images[0]?.url} alt="" />
        <div className="body_infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
      <div className="body_songs">
        <div className="body_icons">
          <PlayCircleFilledIcon onClick={playPlaylist} className="body_shuffle" />
          <FavoriteIcon className="body_fav" />
          <MoreHorizIcon />
        </div>
        {discover_weekly?.tracks.items.map(item => (
          <SongRow playSong={playSong} track={item.track} />
        ))}
      </div>
    </div>
  );
};

export default Body;
