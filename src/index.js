import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import DraftJsEditor from "./components/Editor";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <h3>Editor</h3>
      <DraftJsEditor />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
