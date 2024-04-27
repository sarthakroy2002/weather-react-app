import { WeatherSvg } from "weather-icons-animated";

const Header = ({ fetchWeather }) => {
  return (
    <>
        <div className="flex flex-col items-center text-center pt-2">
          <WeatherSvg state="sunny" width={40} height={40} />
        </div>
        <header className="p-4 flex justify-center">
        <input
            type="text"
            autoComplete="on"
            id="cityTextBox"
            onChange={fetchWeather}
            className="search-box bg-gray-200 px-7 py-2 rounded-lg w-96 text-lg font-semibold text-black outline-none"
            placeholder="City"
        />
        </header>
    </>
  );
};

export default Header;
