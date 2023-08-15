import "./App.css";
import sun from "./image/sun.png";
import dark from "./image/dark.png";
import search from "./image/search.png";
import oval from "./image/Oval.png";
import github from "./image/github.png";
import twitter from "./image/twitter.png";
import link from "./image/link.png";
import location from "./image/location.png";
import oval1 from "./image/Oval1.png";
import axios from "axios";
import React, { useState } from "react";
import { profile } from "console";
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
  const [inputValue, setInputValue] = useState<string>("");
  const [userData, setUserData] = useState<UserData | any>(String);
  const [noResult, setNoResult] = useState(false);
  const [userImage, setUserImage] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
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
          <h1>devfinder</h1>
          <div className="lightanddark">
            <div className="lightdiv">
              <p className="lighttext">LIGHT</p>
              <img className="sun" src={sun} />
            </div>
            <div className="darkdiv">
              <p className="darktext">DARK</p>
              <img className="dark" src={dark} />
            </div>
          </div>
        </div>
        <div className="container2">
          <div className="searchdiv">
            <img className="searchfoto" src={search} />
            <input
              className="input"
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
        <div className="container3">
          <div className="titlediv">
            <img
              className="ovalfoto"
              src={userImage ? userData.avatar_url : oval}
            />
            <img
              className="ovalfoto1"
              src={userImage ? userData.avatar_url : oval1}
            />
            <div className="titleinfo">
              <h2>{userData.name}</h2>
              <a href={userData.html_url} className="mail">
                @{userData.login}
              </a>
              <p className="date">
                Joned {new Date(userData.created_at).toLocaleDateString()}
              </p>
            </div>
          </div>
          <h3>{userData.bio}</h3>
          <div className="followersdiv">
            <p className="followingtext">
              <span>Repos</span>
              <span className="followers">Followers</span>
              <span>Following</span>
            </p>
            <p className="followingnumber">
              <span>{userData.public_repos}</span>
              <span>{userData.followers}</span>
              <span>{userData.following}</span>
            </p>
          </div>
          <div className="contactdiv">
            <div className="icons">
              <div className="icon1">
                <div className="iconandtext">
                  <img className="icon" src={location} />
                  <p className="icontext">{userData.location}</p>
                </div>
                <div className="iconandtext">
                  <img className="icon" src={link} />
                  <p className="icontext">{userData.blog}</p>
                </div>
              </div>
              <div className="icon2">
                <div className="iconandtext">
                  <img className="icon" src={twitter} />
                  <p className="icontext">{userData.twitter_username}</p>
                </div>
                <div className="iconandtext">
                  <img className="icon" src={github} />
                  <p className="icontext">{userData.company}</p>
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
