import styles from "./WeatherForecast.module.css";

function WeatherForecast({ forecast }) {


  if (!forecast || !forecast.time || !forecast.temperature_2m) {
    return <p>Loading hourly forecast...</p>;
  }

  // Only show first 8 hours for brevity
  const hoursToShow = 8;

  return (
    <div className={styles["hourly-container"]}>
      <div className={styles["hourly-header"]}>
        <h3>Hourly Forecast</h3>
        <select className={styles["day-select"]}>
          {/* Example: use first day or static options */}
          <option>Today</option>
          <option>Tomorrow</option>
        </select>
      </div>

      <div className={styles["hourly-list"]}>
        {forecast.time.slice(0, hoursToShow).map((hour, i) => {
          const temp = forecast.temperature_2m[i];
          const hourLabel = new Date(hour).getHours() + ":00";

          // Simple weather icon logic (you can improve with weathercode)
          const icon =
            temp > 25
              ? "☀️"
              : temp > 20
              ? "⛅"
              : temp > 15
              ? "☁️"
              : "💨";

          return (
            <div className={styles["hourly-item"]} key={i}>
              <span className={styles.time}>{hourLabel}</span>
              <span className={styles.icon}>{icon}</span>
              <span className={styles.temp}>{temp}°</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default WeatherForecast;
