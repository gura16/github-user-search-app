import "./App.css";
import sun from "./image/sun.png";
import dark from "./image/dark.png";
import search from "./image/search.png";
import oval from "./image/Oval.png";
import github from "./image/github.png";
import twitter from "./image/twitter.png";
import link from "./image/link.png";
import location from "./image/location.png";
function App() {
  return (
    <div className="body">
      <div className="maincard">
        <div className="container1">
          <h1>devfinder</h1>
          <div className="lightanddark">
            <div className="lightdiv">
              <p className="lighttext">LIGHT</p>
              <img src={sun} />
            </div>
            <div className="darkdiv">
              <p className="darktext">DARK</p>
              <img src={dark} />
            </div>
          </div>
        </div>
        <div className="container2">
          <img className="searchfoto" src={search} />
          <input
            className="input"
            placeholder="Search GitHub username…"
          ></input>
          <button className="button">Search</button>
        </div>
        <div className="container3">
          <div className="titlediv">
            <img src={oval} />
            <div className="titleinfo">
              <h2>The Octocat</h2>
              <p className="mail">@octocat</p>
              <p className="date">Joined 25 Jan 2011</p>
            </div>
          </div>
          <h3>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
            odio. Quisque volutpat mattis eros.
          </h3>
          <div className="followersdiv">
            <p className="followingtext">
              <span>Repos</span>
              <span className="followers">Followers</span>
              <span>Following</span>
            </p>
            <p className="followingnumber">
              <span>8</span>
              <span>3938</span>
              <span>9</span>
            </p>
          </div>
          <div className="contactdiv">
            <div className="icons">
              <img className="icon" src={location} />
              <img className="icon" src={link} />
              <img className="icon" src={twitter} />
              <img className="icon" src={github} />
            </div>
            <div className="textdiv">
              <p className="icontext">San Francisco</p>
              <p className="icontext">https://github.blog</p>
              <p className="icontext">Not Available</p>
              <p className="icontext">@github</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
