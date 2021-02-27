import React, { useEffect, useState } from "react";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import "./App.css";

import { useDataLayerValue } from "./DataLayer";

import Login from "./components/Login";
import Player from "./components/Player";

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
    }
    console.log("token: ", token);
  }, [user, dispatch]);

  return <div className="app">{token ? <Player spotify={spotify}/> : <Login />}</div>;
}

export default App;
