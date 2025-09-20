import styles from "./weatherreport.module.css";

// Import weather icons
import sunIcon from "../assets/icon-sunny.png";
import cloudyIcon from "../assets/icon-partly-cloudy.webp";
import overcastIcon from "../assets/icon-overcast.webp";
import rainIcon from "../assets/icon-rain.webp";
import drizzleIcon from "../assets/icon-drizzle.png";
import snowIcon from "../assets/icon-snow.webp";
import stormIcon from "../assets/icon-storm.jpg";

// Static background for current weather
import bgToday from "../assets/bg-today-large.svg";

function WeatherReport({ weather, forecast }) {
  if (!weather || !forecast) {
    return <p>Loading weather data...</p>;
  }

  // Decide icon based on temperature
  const getWeatherIcon = (temp) => {
    if (temp >= 30) return sunIcon;
    if (temp >= 25) return cloudyIcon;
    if (temp >= 20) return overcastIcon;
    if (temp >= 15) return drizzleIcon;
    if (temp >= 10) return rainIcon;
    if (temp >= 0) return snowIcon;
    return stormIcon;
  };

  // Helper to get short weekday name
  const getWeekday = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", { weekday: "short" });
  };

  return (
    <div className={styles["weather-container"]}>
      {/* Current Weather */}
      <div
        className={`row ${styles["current-weather"]}`}
        style={{ backgroundImage: `url(${bgToday})` }}
      >
        <div className={`col-md-12 ${styles["weather-card"]}`}>
          <h2>{weather.city}</h2>
          <p className={styles.date}>{new Date().toDateString()}</p>
          <div className={styles.temperature}>
            <img
              src={getWeatherIcon(weather.temp)}
              alt="weather icon"
              className={styles.icon}
            />
            <span className={styles.temp}>{weather.temp}°</span>
          </div>
        </div>
      </div>

      {/* Weather Details */}
      <div className={`row ${styles.forecast}`}>
        <div className={styles["forecast-cards"]}>
          <div className={styles["forecast-card"]}>
            Feels Like <br /> {weather.feels ?? weather.temp}°
          </div>
          <div className={styles["forecast-card"]}>
            Humidity <br /> {weather.humidity ?? "N/A"}%
          </div>
          <div className={styles["forecast-card"]}>
            Wind <br /> {weather.wind} km/h
          </div>
          <div className={styles["forecast-card"]}>
            Precipitation <br /> {weather.precipitation ?? 0} mm
          </div>
        </div>
      </div>

      {/* Daily Forecast */}
      <div className={`row ${styles.forecast}`}>
        <h3>Daily Forecast</h3>
        <div className={styles["forecast-cards"]}>
          {forecast.time.map((day, i) => (
            <div className={styles["forecast-card"]} key={i}>
              {getWeekday(day)} <br />
              <img
                src={getWeatherIcon(forecast.temperature_2m_max[i])}
                alt="forecast icon"
                className={styles.icon}
              />
              <br />
              {forecast.temperature_2m_max[i]}° | {forecast.temperature_2m_min[i]}°
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WeatherReport;
