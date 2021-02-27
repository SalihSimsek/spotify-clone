import React from "react";
import "../styles/Sidebar.css";
import SidebarOption from "./SidebarOption";

import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";

import { useDataLayerValue } from "../DataLayer";

const Sidebar = () => {
  const [playlists, dispatch] = useDataLayerValue();

  return (
    <div className="sidebar">
      <img
        className="sidebar_logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="Spofity"
      />
      <SidebarOption Icon={HomeIcon} title="Search" />
      <SidebarOption Icon={SearchIcon} title="Search" />
      <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />
      <br />
      <strong className="sidebar_title">PLAYLISTS</strong>
      <hr />
      {playlists?.playlists?.items?.map((playlist) => (
        <SidebarOption key={playlist.id} title={playlist.name} />
      ))}
      {console.log('Sidebar:',playlists)}
    </div>
  );
};

export default Sidebar;
