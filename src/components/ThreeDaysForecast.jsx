import Image from "next/image";
import React from "react";

const Temperature = ({ high, low }) => {
  return (
    <div className="bg-sky-400 rounded-lg flex justify-around items-center p-1.5 lg:p-3 text-sm lg:text-base">
      <h5 className="text-white">
        <i className="fa-solid fa-arrow-up text-black"></i> {high}°
      </h5>
      <h5 className="text-white">
        <i className="fa-solid fa-arrow-down text-black"></i> {low}°
      </h5>
    </div>
  );
};

const DayCondition = ({ icon, day, weather }) => {
  return (
    <div className="border border-slate-200 rounded-lg flex justify-evenly items-center p-1.5 lg:p-3 text-sm lg:text-base">
      <Image
        className="brightness-90"
        src={`https://openweathermap.org/img/wn/${icon}@4x.png`}
        alt="weather"
        width={50}
        height={50}
      />
      <div>
        <p className="font-semibold">{day}</p>
        <span className="text-xs lg:text-sm capitalize text-gray-400">
          {weather}
        </span>
      </div>
    </div>
  );
};

const Forecast = ({ high, low, icon, day, weather, index }) => {
  const isTemperatureFirst = index % 2 === 0;

  return (
    <div className="grid grid-flow-col">
      {isTemperatureFirst ? (
        <>
          <Temperature high={high} low={low} />
          <DayCondition icon={icon} day={day} weather={weather} />
        </>
      ) : (
        <>
          <DayCondition icon={icon} day={day} weather={weather} />
          <Temperature high={high} low={low} />
        </>
      )}
    </div>
  );
};

const ThreeDaysForecast = ({ dailyForecastData }) => {
  const formatDay = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const options = { weekday: "long" };
    return date.toLocaleDateString("id-ID", options);
  };

  const days1 = dailyForecastData.list?.slice(6, 14);
  const days2 = dailyForecastData.list?.slice(14, 22);
  const days3 = dailyForecastData.list?.slice(22, 30);

  const forecast = (days) => {
    const highTemperature = days?.map((day) => Math.round(day.main.temp_max));
    const lowTempaerature = days?.map((day) => Math.round(day.main.temp_min));
    const icon = days?.[0]?.weather[0]?.icon;
    const day = formatDay(days?.[0]?.dt);
    const weather = days?.[0]?.weather[0]?.description;

    return {
      high: highTemperature && Math.max(...highTemperature),
      low: lowTempaerature && Math.min(...lowTempaerature),
      icon: icon,
      day: day,
      weather: weather,
    };
  };

  const dailyForecast = [forecast(days1), forecast(days2), forecast(days3)];

  return (
    <div className="p-4">
      <h2 className="font-semibold text-lg lg:text-xl">Perkiraan 3 hari</h2>
      <div className="mt-3 space-y-5 md:space-y-10">
        {dailyForecast.map((item, index) => (
          <Forecast
            key={index}
            index={index}
            icon={item.icon}
            day={item.day}
            high={item.high}
            low={item.low}
            weather={item.weather}
          />
        ))}
      </div>
    </div>
  );
};

export default ThreeDaysForecast;
