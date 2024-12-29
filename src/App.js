import logo from "./logo.svg";
import "./App.css";

import CurrentWeather from "./CurrentWeather";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <CurrentWeather />
    </div>
  );
}
