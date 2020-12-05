import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Instagram, Compass, Letter, Home, Like, Profile, Post } from "../";
import "./Header.style.scss";
import SearchIcon from "@material-ui/icons/Search";
import CancelIcon from "@material-ui/icons/Cancel";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    marginBottom: '2rem'
  },
  appbar: {
    backgroundColor: "rgb(255,255,255)",
    boxShadow: "none",
    borderBottom: "1px solid rgb(219,219,219)",
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
  searchicon: {
    position: "absolute",
    left: "95px",
    top: "0.35rem",
    width: "17px",
  },
  cancelicon: {
    position: "absolute",
    right: "5px",
    top: "0.3rem",
    width: "20px",
    visibility: "hidden",
    cursor: "pointer",
  },
}));

export function Header() {
  const classes = useStyles();

  const moveStart = () => {
    const input = document.querySelector(".searchbar__input");
    const searchIcon = document.querySelector("#searchIcon");
    const cancelIcon = document.querySelector("#cancelIcon");
    input.style.textAlign = "start";
    searchIcon.style.left = "5px";
    cancelIcon.style.visibility = "visible";
  };

  const moveCenter = () => {
    const input = document.querySelector(".searchbar__input");
    const searchIcon = document.querySelector("#searchIcon");
    const cancelIcon = document.querySelector("#cancelIcon");
    input.style.textAlign = "center";
    searchIcon.style.left = "95px";
    cancelIcon.style.visibility = "hidden";
  };

  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} position="static">
        <Toolbar className={classes.toolbar}>
          <Instagram width={140} margin="10px 0 0" />
          <div className="searchbar">
            <input
              className="searchbar__input"
              placeholder="Search"
              onFocus={moveStart}
              onBlur={moveCenter}
            />
            <SearchIcon
              id="searchIcon"
              className={classes.searchicon}
              htmlColor="rgb(165,167,170)"
            />
            <CancelIcon
              id="cancelIcon"
              className={classes.cancelicon}
              htmlColor="rgb(199,199,199)"
            />
          </div>
          <div className="icons">
            <Home />
            <Letter />
            <Post />
            <Compass />
            <Like />
            <Profile />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
