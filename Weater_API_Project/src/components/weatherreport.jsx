import styles from "./weatherreport.module.css";

function WeatherReport({ weather, forecast }) {
  if (!weather || !forecast) {
    return <p>Loading weather data...</p>;
  }

  // Helper to get short weekday name
  const getWeekday = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", { weekday: "short" });
  };

  return (
    <div className={styles["weather-container"]}>
      {/* Current Weather */}
      <div className="row">
        <div className={`col-md-12 ${styles["weather-card"]}`}>
          <h2>{weather.city}</h2>
          <p className={styles.date}>{new Date().toDateString()}</p>
          <div className={styles.temperature}>
            <span className={styles.icon}>☀️</span>
            <span className={styles.temp}>{weather.temp}°</span>
          </div>
        </div>
      </div>

      {/* Weather Details */}
      <div className={`row ${styles.forecast}`}>
        <div className={styles["forecast-cards"]}>
          <div className={styles["forecast-card"]}>Feels Like <br /> {weather.feels ?? weather.temp}°</div>
          <div className={styles["forecast-card"]}>Humidity <br /> {weather.humidity ?? "N/A"}%</div>
          <div className={styles["forecast-card"]}>Wind <br /> {weather.wind} km/h</div>
          <div className={styles["forecast-card"]}>Precipitation <br /> {weather.precipitation ?? 0} mm</div>
        </div>
      </div>

      {/* Daily Forecast */}
      <div className={`row ${styles.forecast}`}>
        <h3>Daily Forecast</h3>
        <div className={styles["forecast-cards"]}>
          {forecast.time.map((day, i) => (
            <div className={styles["forecast-card"]} key={i}>
              {getWeekday(day)}<br />
              {/* Simple icon based on max temperature */}
              {forecast.temperature_2m_max[i] > 25
                ? "☀️"
                : forecast.temperature_2m_max[i] > 20
                ? "⛅"
                : "☁️"}<br />
              {forecast.temperature_2m_max[i]}° | {forecast.temperature_2m_min[i]}°
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WeatherReport;
