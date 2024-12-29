import "./App.css";

import CurrentWeather from "./CurrentWeather";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <CurrentWeather />
      <Footer />
    </div>
  );
}
