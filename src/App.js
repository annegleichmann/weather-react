import "./App.css";

import CurrentWeather from "./CurrentWeather";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <CurrentWeather />
      <br />
      <p>
        This project was coded by Anne Gleichmann and it is{" "}
        <a
          href="https://github.com/annegleichmann/weather-react"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced
        </a>{" "}
      </p>
    </div>
  );
}
