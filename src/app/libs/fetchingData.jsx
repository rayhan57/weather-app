export const getWeatherData = async (weatherType, cityName, limit = 0) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  const response = await fetch(
    `${baseUrl}/${weatherType}?q=${cityName}&cnt=${limit}&units=metric&lang=id&appid=${apiKey}`
  );

  const weatherData = await response.json();
  return weatherData;
};
