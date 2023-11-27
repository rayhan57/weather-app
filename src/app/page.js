"use client";
import MyNavbar from "@/components/Navbar/MyNavbar";
import React, { useEffect, useState } from "react";
import { getWeatherData } from "./libs/fetchingData";
import CurrentLocation from "@/components/CurrentLocation";
import TodayCondition from "@/components/TodayCondition/TodayCondition";
import ChanceOfRain from "@/components/ChanceOfRain";
import ThreeDaysForecast from "@/components/ThreeDaysForecast";

const page = () => {
  const [weatherData, setWeatherData] = useState({});
  const [forecastData, setForecastData] = useState({});
  const [chanceOfRainData, setChanceOfRainData] = useState({});
  const [dailyForecastData, setDailyForecastData] = useState({});
  const [city, setCity] = useState("jakarta");

  const fetchData = async () => {
    const weather = await getWeatherData("weather", city);
    const forecast = await getWeatherData("forecast", city, 8);
    const chanceOfRain = await getWeatherData("forecast", city, 7);
    const dailyForecast = await getWeatherData("forecast", city);
    setWeatherData(weather);
    setForecastData(forecast);
    setDailyForecastData(dailyForecast);
    setChanceOfRainData(chanceOfRain);
  };

  useEffect(() => {
    fetchData();
  }, [city]);

  return (
    <>
      <MyNavbar setCity={setCity} />
      <div>
        <div className="grid md:grid-flow-col">
          <div className="p-4">
            <CurrentLocation weatherData={weatherData} />
            <TodayCondition
              weatherData={weatherData}
              forecastData={forecastData}
            />
          </div>
          <div className="bg-sky-50 col-span-2">
            <ChanceOfRain chanceOfRainData={chanceOfRainData} />
            <ThreeDaysForecast dailyForecastData={dailyForecastData} />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
