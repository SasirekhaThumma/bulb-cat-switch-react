
import { useState } from "react";
import "./App.css";

function App() {
  const [isOn, setIsOn] = useState(true);

  const switchOn = () => {
    setIsOn(true);
  };

  const switchOff = () => {
    setIsOn(false);
  };

  return (
    <div className="dark-background">

      <div>
        <img
          src={
            isOn
              ? "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png"
              : "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png"
          }
          className="bulb-image"
          alt="Bulb"
        />
      </div>

      <div>
        <img
          src={
            isOn
              ? "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/cat-img.png"
              : "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png"
          }
          className="cat-image"
          alt="Cat"
        />
      </div>

      <div className="switch-board">

        <h1 className="switch-status">
          {isOn ? "Switched On" : "Switched Off"}
        </h1>

        <button className="off-switch" onClick={switchOff}>
          OFF
        </button>

        <button className="on-switch" onClick={switchOn}>
          ON
        </button>

      </div>
    </div>
  );
}

export default App;
