import styles from "./WeatherForecast.module.css";

// Import your weather icons
import sunIcon from "../assets/icon-sunny.png";
import partlyCloudyIcon from "../assets/icon-partly-cloudy.webp";
import cloudyIcon from "../assets/icon-overcast.webp";
import rainIcon from "../assets/icon-rain.webp";
import drizzleIcon from "../assets/icon-drizzle.png";
import snowIcon from "../assets/icon-snow.webp";
import stormIcon from "../assets/icon-storm.jpg";

function WeatherForecast({ forecast }) {
  if (!forecast || !forecast.time || !forecast.temperature_2m) {
    return <p>Loading hourly forecast...</p>;
  }

  const hoursToShow = 8;

  // Function to select weather icon based on temperature
  const getWeatherIcon = (temp) => {
    if (temp > 25) return sunIcon;
    if (temp > 20) return partlyCloudyIcon;
    if (temp > 15) return cloudyIcon;
    if (temp > 10) return drizzleIcon;
    if (temp > 0) return rainIcon;
    if (temp <= 0) return snowIcon;
    return stormIcon;
  };

  return (
    <div className={styles["hourly-container"]}>
      <div className={styles["hourly-header"]}>
        <h3>Hourly Forecast</h3>
        <select className={styles["day-select"]}>
          <option>Today</option>
          <option>Tomorrow</option>
        </select>
      </div>

      <div className={styles["hourly-list"]}>
        {forecast.time.slice(0, hoursToShow).map((hour, i) => {
          const temp = forecast.temperature_2m[i];
          const date = new Date(hour);
          let hourLabel = date.getHours();
          const ampm = hourLabel >= 12 ? "PM" : "AM";
          hourLabel = hourLabel % 12 || 12; // Convert to 12-hour format

          return (
            <div className={styles["hourly-item"]} key={i}>
              <span className={styles.time}>{hourLabel}:00 {ampm}</span>
              <span className={styles.icon}>
                <img src={getWeatherIcon(temp)} alt="weather icon" />
              </span>
              <span className={styles.temp}>{temp}°</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default WeatherForecast;
