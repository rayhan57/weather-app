import React from "react";

const ProgressBar = ({ time, weather }) => {
  return (
    <div className="w-[70%] mx-auto h-2.5 rounded-full bg-slate-200 relative">
      <span className="text-xs lg:text-sm font-semibold absolute -top-1 -left-11">
        {time}
      </span>

      <div
        className="h-full bg-sky-400 rounded-full"
        style={{ width: `${weather}%` }}
      ></div>
    </div>
  );
};

const ChanceOfRain = ({ chanceOfRainData }) => {
  const { list } = chanceOfRainData;
  console.log(list?.map((item) => item.weather[0].description));

  const timestampToHour = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const options = { hour: "2-digit", minute: "2-digit" };
    return date.toLocaleTimeString("id-ID", options);
  };

  const weatherStatus = (weather) => {
    if (weather.includes("cerah")) {
      return 10;
    } else if (weather.includes("awan")) {
      return 20;
    } else if (weather.includes("gerimis")) {
      return 30;
    } else if (
      weather === "hujan rintik-rintik" ||
      weather.includes("ringan")
    ) {
      return 50;
    } else if (
      weather === "hujan sedang" ||
      weather.includes("berintensitas tinggi")
    ) {
      return 60;
    } else if (weather === "hujan deras") {
      return 70;
    } else if (weather === "hujan ekstrem") {
      return 100;
    }
    return 0;
  };

  return (
    <div className="border-b-8 border-slate-200 p-4 pb-8">
      <h2 className="font-semibold text-lg lg:text-xl mb-5">Peluang Hujan</h2>
      <div className="flex flex-col justify-around mx-auto max-w-md h-[30vh] md:h-[50vh] lg:h-[30vh]">
        {list?.map((item, index) => (
          <ProgressBar
            key={index}
            weather={weatherStatus(item.weather[0].description)}
            time={timestampToHour(item.dt)}
          />
        ))}
      </div>
      <div className="w-[70%] mx-auto flex justify-around font-semibold text-sm">
        <span>Cerah</span>
        <span>Hujan</span>
        <span>Hujan Besar</span>
      </div>
    </div>
  );
};

export default ChanceOfRain;
