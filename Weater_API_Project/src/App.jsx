import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./App.css";

import SearchBox from "./components/searchbox";
import ContentContainer from "./components/contentcontainer";

function App() {

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);


const getWeather = async () => {
  if (!city) return alert("Please enter a city");

  try {
    const geoRes = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${city}`
    );
    const geoData = await geoRes.json();

    if (!geoData.results || geoData.results.length === 0) {
      alert("City not found");
      return;
    }

    const { latitude, longitude, name, country } = geoData.results[0];

    const weatherRes = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&daily=temperature_2m_max,temperature_2m_min,weathercode&hourly=temperature_2m&timezone=auto`
    );
    const weatherData = await weatherRes.json();

    setWeather({
      city: `${name}, ${country}`,
      temp: weatherData.current_weather.temperature,
      wind: weatherData.current_weather.windspeed,
      // Add other fields if you want: humidity, precipitation, etc.
    });

    // Set forecast with daily and hourly
    setForecast({
      daily: weatherData.daily,
      hourly: weatherData.hourly
    });
  } catch (err) {
    console.error(err);
    alert("Error fetching weather data");
  }
};


  return (
    <div className="app-container">
      {/* Top Navbar */}
      <header className="app-header d-flex justify-content-between align-items-center">
        <div className="logo">
          <span className="sun-icon">☀️</span> Weather Now
        </div>
        <div className="units-dropdown">
          <button className="btn btn-sm btn-dark dropdown-toggle" type="button">
            Units
          </button>
        </div>
      </header>

      {/* Heading */}
      <h1 className="app-title text-center">How’s the sky looking today?</h1>

      {/* Search Box */}
      <div className="search-wrapper text-center">
        <SearchBox city={city} setCity={setCity} onSearch={getWeather} />
      </div>

      {/* Weather Content */}
      <div className="content-wrapper">
        {weather && <ContentContainer weather={weather} forecast={forecast} />}
      </div>
    </div>
  );
}

export default App;
