import "react-app-polyfill/ie11";
import * as React from "react";
import * as ReactDOM from "react-dom";
import "./index.css";
// import { ProgressBar } from "../src/components/ProgressBar/ProgressBar";

const App = () => {
  return (
    <div>
      {/* <ProgressBar value={30} /> */}
      <h2>Test Progress Bar</h2>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
