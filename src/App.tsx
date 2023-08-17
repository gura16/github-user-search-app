import "./App.css";
import sun from "./image/icon-sun.svg";
import dark from "./image/icon-moon.svg";
import search from "./image/icon-search.svg";
import github from "./image/icon-company.svg";
import twitter from "./image/icon-twitter.svg";
import link from "./image/icon-website.svg";
import location from "./image/icon-location.svg";
import whitheweb from "./image/whithewebsait.svg";
import whithetwitter from "./image/whithetwitter.svg";
import whithelocation from "./image/whithelocation.svg";
import whithecompany from "./image/whithecompany.svg";
import axios from "axios";
import React, { useEffect, useState } from "react";

interface UserData {
  login: string;
  name: string;
  avatar_url: string;
  created_at: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
  location: string;
  company: string;
  twitter_username: string;
  blog: string;
  html_url: string;
}
const App: React.FC = () => {
  const defaultUser = "octocat";
  const [inputValue, setInputValue] = useState<string>(defaultUser);
  const [userData, setUserData] = useState<UserData | any>(String);
  const [noResult, setNoResult] = useState(false);
  const [userImage, setUserImage] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    handleSearch();
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const toggleBackgroundColor = () => {
    setDarkMode((prevMode) => !prevMode);
    if (darkMode) {
      document.body.style.backgroundColor = "#141d2f";
      document.body.style.transition = "0.5s";
    } else {
      document.body.style.backgroundColor = "#F6F8FF";
    }
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get<UserData>(
        `https://api.github.com/users/${inputValue}`
      );
      setUserData(response.data);
      setUserImage(true);
      setNoResult(false);
    } catch (error) {
      setNoResult(true);
    }
  };
  return (
    <div className="body">
      <div className="maincard">
        <div className="container1">
          <h1 style={darkMode ? { color: "#222731" } : { color: "" }}>
            devfinder
          </h1>
          <div className="lightanddark">
            <div className="lightdiv">
              <p
                style={darkMode ? { color: "#4B6A9B" } : { color: "" }}
                className="lighttext"
              >
                {darkMode ? "DARK" : "LIGHT"}
              </p>
              <img
                onClick={toggleBackgroundColor}
                className="sun"
                src={darkMode ? dark : sun}
              />
            </div>
          </div>
        </div>
        <div
          style={
            darkMode ? { backgroundColor: "#FEFEFE" } : { backgroundColor: "" }
          }
          className="container2"
        >
          <div className="searchdiv">
            <img className="searchfoto" src={search} />
            <input
              style={
                darkMode
                  ? { backgroundColor: "#FEFEFE", color: "rgba(34, 39, 49, 1)" }
                  : { backgroundColor: "", color: "" }
              }
              className={darkMode ? "input" : ""}
              placeholder="Search GitHub username…"
              value={inputValue}
              onChange={handleInputChange}
            ></input>
          </div>
          {noResult === true && <p className="error">No results</p>}
          <button onClick={handleSearch} className="button">
            Search
          </button>
        </div>
        <div
          style={
            darkMode ? { backgroundColor: "#FEFEFE" } : { backgroundColor: "" }
          }
          className="container3"
        >
          <div className="titlediv">
            <img
              className="ovalfoto1"
              src={userImage ? userData.avatar_url : ""}
            />
            <div className="titleinfo">
              <h2
                style={
                  darkMode ? { color: "rgba(43, 52, 66, 1)" } : { color: "" }
                }
              >
                {userData.name}
              </h2>
              <a href={userData.html_url} className="mail">
                @{userData.login}
              </a>
              <p
                style={
                  darkMode ? { color: "rgba(43, 52, 66, 1)" } : { color: "" }
                }
                className="date"
              >
                Joned {new Date(userData.created_at).toLocaleDateString()}
              </p>
            </div>
          </div>
          <h3 style={darkMode ? { color: "#4B6A9B" } : { color: "" }}>
            {userData.bio}
          </h3>
          <div
            style={
              darkMode
                ? { backgroundColor: "#FEFEFE" }
                : { backgroundColor: "" }
            }
            className="followersdiv"
          >
            <p className="followingtext">
              <span style={darkMode ? { color: "#4B6A9B" } : { color: "" }}>
                Repos
              </span>
              <span
                style={darkMode ? { color: "#4B6A9B" } : { color: "" }}
                className="followers"
              >
                Followers
              </span>
              <span style={darkMode ? { color: "#4B6A9B" } : { color: "" }}>
                Following
              </span>
            </p>
            <p className="followingnumber">
              <span style={darkMode ? { color: "#2B3442" } : { color: "" }}>
                {userData.public_repos}
              </span>
              <span
                style={
                  darkMode ? { color: "rgba(43, 52, 66, 1)" } : { color: "" }
                }
              >
                {userData.followers}
              </span>
              <span style={darkMode ? { color: "#2B3442" } : { color: "" }}>
                {userData.following}
              </span>
            </p>
          </div>
          <div className="contactdiv">
            <div className="icons">
              <div className="icon1">
                <div className="iconandtext">
                  <img
                    className="icon"
                    style={
                      userData.location ? { opacity: "" } : { opacity: "50%" }
                    }
                    src={darkMode ? location : whithelocation}
                  />
                  {userData.location ? (
                    <p
                      style={darkMode ? { color: "#4B6A9B" } : { color: "" }}
                      className="icontext"
                    >
                      {userData.location}
                    </p>
                  ) : (
                    <p className="notavailable">Not Available</p>
                  )}
                </div>
                <div className="iconandtext">
                  <img
                    style={userData.blog ? { opacity: "" } : { opacity: "50%" }}
                    className="icon"
                    src={darkMode ? link : whitheweb}
                  />
                  {userData.blog ? (
                    <a
                      href={userData.blog}
                      style={darkMode ? { color: "#4B6A9B" } : { color: "" }}
                      className="icontext"
                    >
                      {userData.blog}
                    </a>
                  ) : (
                    <p className="notavailable">Not Available</p>
                  )}
                </div>
              </div>
              <div className="icon2">
                <div className="iconandtext">
                  <img
                    style={
                      userData.twitter_username
                        ? { opacity: "" }
                        : { opacity: "50%" }
                    }
                    className="icon"
                    src={darkMode ? twitter : whithetwitter}
                  />
                  {userData.twitter_username ? (
                    <a
                      href={`https://twitter.com/${userData.twitter_username}`}
                      style={darkMode ? { color: "#4B6A9B" } : { color: "" }}
                      className="icontext"
                    >
                      {userData.twitter_username}
                    </a>
                  ) : (
                    <p className="notavailable">Not Available</p>
                  )}
                </div>
                <div className="iconandtext">
                  <img
                    style={
                      userData.company ? { opacity: "" } : { opacity: "50%" }
                    }
                    className="icon"
                    src={darkMode ? github : whithecompany}
                  />
                  {userData.company ? (
                    <p
                      style={darkMode ? { color: "#4B6A9B" } : { color: "" }}
                      className="icontext"
                    >
                      {userData.company}
                    </p>
                  ) : (
                    <p className="notavailable">Not Available</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
