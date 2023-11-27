import React from "react";
import TodayTemperature from "./TodayTemperature";

const Condition = ({ title, value }) => {
  return (
    <div className="border rounded-lg p-1 lg:p-2">
      <p className="text-xs lg:text-sm text-gray-400">{title}</p>
      <h5 className="font-semibold text-center py-1 lg:py-2 text-sm lg:text-lg">
        {value}
      </h5>
    </div>
  );
};

const TodayCondition = ({ weatherData, forecastData }) => {
  const { main, wind, sys, visibility } = weatherData;

  const sunrise = () => {
    const timestamp = sys?.sunrise;
    const date = new Date(timestamp * 1000);

    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  const sunset = () => {
    const timestamp = sys?.sunset;
    const date = new Date(timestamp * 1000);

    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  return (
    <>
      <div className="mt-4">
        <h4 className="font-semibold text-lg lg:text-xl">Kondisi hari ini</h4>
        <div className="grid lg:grid-flow-col gap-4 mt-3">
          <Condition
            title="Jarak pandang"
            value={`${Math.round(visibility / 1000)}km`}
          />
          <Condition title="Kelembapan" value={`${main?.humidity}%`} />
          <Condition title="Angin" value={`${Math.round(wind?.speed)}km/h`} />

          <div className="border rounded-lg p-2">
            <p className="text-xs lg:text-sm text-gray-400">
              Terbit & Terbenam
            </p>
            <div className="text-sm lg:text-lg flex justify-around font-semibold py-1 md:py-2">
              <h5>
                <i className="fa-solid fa-arrow-up text-white bg-sky-400 p-1 rounded-full"></i>{" "}
                {sunrise()}
              </h5>
              <h5>
                <i className="fa-solid fa-arrow-down text-white bg-sky-400 p-1 rounded-full"></i>{" "}
                {sunset()}
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div className=" mt-4">
        <TodayTemperature forecastData={forecastData} />
      </div>
    </>
  );
};

export default TodayCondition;
