import React from "react";
import Switch from "@mui/material/Switch";

import "./App.css";

import { socket } from "./socket";

const App: React.FC = () => {
  const [fan, setFan] = React.useState(false);
  const [light, setLight] = React.useState(false);

  React.useEffect(() => {
    socket.connect();

    socket.on(
      "itemUpdated",
      ({ item, value }: { item: string; value: boolean }) => {
        switch (item) {
          case "fan":
            setFan(value);
            break;
          case "light":
            setLight(value);
            break;
          default:
            console.log("failed to update item: Unknown Item");
        }
      }
    );

    socket.emit("readItem");

    return () => {
      socket.disconnect();
    };
  }, []);

  function handleFanUpdate(
    _: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) {
    setFan(checked);
    socket.emit("itemUpdated", { item: "fan", value: checked });
  }

  function handleLightUpdate(
    _: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) {
    setLight(checked);
    socket.emit("itemUpdated", { item: "light", value: checked });
  }

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
              onChange={handleFanUpdate}
            />
          </div>
          <div className="item">
            <span className="label">Light:</span>
            <Switch
              className="switch"
              checked={light}
              onChange={handleLightUpdate}
            />
          </div>
        </article>
      </main>
    </div>
  );
};
export default App;
