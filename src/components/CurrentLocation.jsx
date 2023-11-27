import Image from "next/image";
import React from "react";
import countries from "i18n-iso-countries";

countries.registerLocale(require("i18n-iso-countries/langs/en.json"));

const CurrentLocation = ({ weatherData }) => {
  const { name, main, weather, sys } = weatherData;
  const countryName = countries.getName(sys?.country, "en");

  const formatTime = () => {
    const currentTime = new Date();
    const options = { weekday: "long", hour: "2-digit", minute: "2-digit" };
    return currentTime.toLocaleTimeString("id-ID", options);
  };

  return (
    <>
      <div className="mb-3">
        <h4 className="text-xs lg:text-sm text-gray-400">Lokasi saat ini</h4>
        <h2 className="font-semibold text-lg lg:text-xl">
          {name}, {countryName}
        </h2>
      </div>

      <div className="max-w-full md:max-w-xs lg:max-w-xl relative">
        <Image
          className="max-w-full md:max-w-xs lg:max-w-xl rounded-2xl brightness-75"
          src={`https://source.unsplash.com/1000x500?${name}`}
          alt="city"
          width={600}
          height={300}
          priority
        />
        <div className="absolute w-full top-0 flex justify-between px-2 lg:px-4 py-2">
          <div className="flex">
            <Image
              className="object-cover brightness-200 -mt-5 lg:-mt-2 -mx-3"
              src={`https://openweathermap.org/img/wn/${weather?.[0]?.icon}@4x.png`}
              width={80}
              height={80}
              alt="cloud"
            />
            <h1 className="font-bold text-slate-100 text-5xl lg:text-6xl after:content-['°C'] after:text-lg after:absolute">
              {main?.temp && Math.round(main.temp)}
            </h1>
          </div>
          <div className="text-slate-100 text-end">
            <h3 className="text-sm lg:text-base font-medium">{formatTime()}</h3>
            <p className="text-xs lg:text-sm font-light capitalize">
              {weather?.[0]?.description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CurrentLocation;
