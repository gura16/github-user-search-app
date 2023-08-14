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
function App() {
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
            ></input>
          </div>
          <button className="button">Search</button>
        </div>
        <div className="container3">
          <div className="titlediv">
            <img className="ovalfoto" src={oval} />
            <img className="ovalfoto1" src={oval1} />
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
              <div className="icon1">
                <div className="iconandtext">
                  <img className="icon" src={location} />
                  <p className="icontext">San Francisco</p>
                </div>
                <div className="iconandtext">
                  <img className="icon" src={link} />
                  <p className="icontext">https://github.blog</p>
                </div>
              </div>
              <div className="icon2">
                <div className="iconandtext">
                  <img className="icon" src={twitter} />
                  <p className="icontext">Not Available</p>
                </div>
                <div className="iconandtext">
                  <img className="icon" src={github} />
                  <p className="icontext">@github</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
