import "./App.css";
import sun from "./image/sun.png";
import dark from "./image/dark.png";

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
      </div>
    </div>
  );
}

export default App;
