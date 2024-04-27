import { WeatherSvg } from "weather-icons-animated";

const Body = ({ data, weekDays, month }) => {
  if (!data || !data.sys || !data.main || !data.weather) {

    return (<div className="flex flex-col items-center text-center mt-10 bg-gray-900 text-white h-screen"><b>Enter Valid City name</b></div>);
  }

  const { name, sys, main, weather } = data;
  let weatherIcon;
  switch (weather[0].main.toLowerCase()) {
    case 'sunny':
      weatherIcon = 'sunny';
      break;
    case 'clear':
      weatherIcon = 'clear-night';
      break;
    case 'clouds':
      weatherIcon = 'partlycloudy';
      break;
    case 'cloudy':
      weatherIcon = 'cloudy';
      break;
    case 'fog':
      weatherIcon = 'fog';
      break;
    case 'hail':
      weatherIcon = 'hail';
      break;
    case 'rain':
      weatherIcon = 'rainy';
      break;
    case 'snow':
      weatherIcon = 'snowy';
      break;
    case 'sleet':
      weatherIcon = 'snowy-rainy';
      break;
    case 'drizzle':
      weatherIcon = 'rainy';
      break;
    case 'thunderstorm':
      weatherIcon = 'lightning-rainy';
      break;
    case 'wind':
      weatherIcon = 'windy';
      break;
    default:
      weatherIcon = 'sunny';
      break;
  }

  return (
    <main className="flex flex-col items-center text-center mt-10 bg-gray-900 text-white h-screen">
      <section>
        <div className="city text-5xl font-bold">{name}, {sys.country}</div>
        <div className="date text-xl">{weekDays[new Date().getDay()]}, {new Date().getDate()} {month[new Date().getMonth()]} {new Date().getFullYear()}</div>
      </section>
      <WeatherSvg state={weatherIcon} width={100} height={100} />
      <div className="current text-center mt-2">
        <div className="temp text-7xl font-bold">{Math.round(main.temp - 273.15)}°C</div>
        <div className="weather text-4xl font-bold italic">{weather[0].main}</div>
        <div className="hi-low text-3xl">{Math.round(main.temp_min - 273.15)}°C / {Math.round(main.temp_max - 273.15)}°C</div>
      </div>
    </main>
  );
};

export default Body;
