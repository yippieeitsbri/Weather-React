/** @format */

import ReactDOM from "react-dom";
import Weather from "./Weather";
import Search from "./Search";
import Forecast from "./Forecast";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Weather />
      <Search />
      <Forecast />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
