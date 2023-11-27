"use client";
import React from "react";

const ProgressBar = ({ temperature, time }) => {
  return (
    <div className="w-2.5 h-[70%] bg-slate-200 rounded-full relative">
      <span className="text-xs lg:text-sm font-semibold absolute -top-5 -left-1">
        {temperature}°
      </span>

      <div
        className="w-full bg-sky-400 rounded-full absolute bottom-0"
        style={{ height: `${temperature * 2}%` }}
      ></div>

      <span className="text-xs lg:text-sm absolute -bottom-5 -left-2.5">
        {time}
      </span>
    </div>
  );
};

const TodayTemperature = ({ forecastData }) => {
  const { list } = forecastData;

  const timestampToHour = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const options = { hour: "2-digit", minute: "2-digit" };
    return date.toLocaleTimeString("id-ID", options);
  };

  return (
    <>
      <div className="border rounded-lg p-2">
        <h5 className="text-sm lg:text-lg font-medium">
          Hari ini (perkiraan 3 jam)
        </h5>
        <div className="mt-2 md:mt-2 flex justify-around items-center h-[30vh] md:h-[40vh] lg:h-[30vh]">
          {list?.map((item, index) => (
            <ProgressBar
              key={index}
              temperature={Math.round(item.main.temp)}
              time={timestampToHour(item.dt)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default TodayTemperature;
