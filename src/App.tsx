import React from "react";

import "./App.css";

const App: React.FC = () => {
  return (
    <div className="content-wrapper">
      <main className="content">
        <article>
          <header>
            <h1 className="title">Via the Web</h1>
          </header>
          <p>
            Control the Raspberry Pi via the web by pressing the switches below.
            Clicking the switches will turn on/off the physical items connected
            to the Raspberry Pi.
          </p>
        </article>
      </main>
    </div>
  );
};
export default App;
