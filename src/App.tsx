import React from "react";
import Switch from "@mui/material/Switch";

import "./App.css";

const App: React.FC = () => {
  const [fan, setFan] = React.useState(false);
  const [light, setLight] = React.useState(false);

  return (
    <div className="content-wrapper">
      <main className="content">
        <article className="header">
          <header>
            <h1 className="title">Via the Web</h1>
          </header>
          <p className="explanation">
            Control the Raspberry Pi via the web by pressing the switches below.
            Clicking the switches will turn on/off the physical items connected
            to the Raspberry Pi.
          </p>
        </article>
        <article className="items">
          <div className="item">
            <span className="label">Fan:</span>
            <Switch
              className="switch"
              checked={fan}
              onChange={() => setFan((x) => !x)}
            />
          </div>
          <div className="item">
            <span className="label">Light:</span>
            <Switch
              className="switch"
              checked={light}
              onChange={() => setLight((x) => !x)}
            />
          </div>
        </article>
      </main>
    </div>
  );
};
export default App;
