import WeatherReport from "./weatherreport";
import WeatherForecast from "./weatherforecast";

function ContentContainer({ weather, forecast }) {

  console.log(" weather ",weather);
  console.log(" FFORECEAT  ", forecast);
  return (
    <div className="row g-0 text-center">
      <div className="col-sm-6 col-md-8">

    
        <WeatherReport weather={weather} forecast={forecast?.daily} />
        
      </div>
      <div className="col-6 col-md-4">

        <WeatherForecast forecast={forecast?.hourly} />

      </div>
    </div>
  );
}

export default ContentContainer;
