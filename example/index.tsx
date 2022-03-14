import "react-app-polyfill/ie11";
import * as React from "react";
import * as ReactDOM from "react-dom";
import "./index.css";
import { ProgressBar } from "ms-react-progress-bar";

const App = () => {
  const [ value, setValue ] = React.useState(100);
  return (
    <div>
      <h2>Test Progress Bar</h2>
      <ProgressBar
        value={value}
        options={{ maxValue: 300, barColor: "#eba089" }}
      />
      <button onClick={() => setValue(val => val + 2)}>Add</button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
