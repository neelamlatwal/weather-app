import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import TenDayForecast from './components/TenDayforcast';
import AddWeatherList from './components/AddWeatherList';
import fetchWeatherData from './services/weatherServices';
import moment from 'moment-timezone';


type WeatherData = {
  timezone: number,
  name: string,
  weather: [
    {
      id: number,
      main: string,
      description: string,
      // "icon": "10d"
    }
  ],
  main: {
    temp: number,
    temp_min: number,
    temp_max: number,
    humidity: number,

  },
  coord: {
    lon: number,
    lat: number,
  }

}
function App() {
  const apiKey = 'a3d6674d4aac8e066a7f87e981bbfffa';
  const [weather, setWeather] = useState<string>(''); // Example: use state to store current weather
  const [forecastData, setForecastData] = useState<WeatherData>({} as WeatherData);
  const [city, setCity] = useState<string>('Noida');
  const [loading, setLoading] = useState<boolean>(false); // Loading state
  // const currentTime = moment().tz(city).format('HH'); // Current hour
  const now = new Date();
  const hours = now.getHours();
  console.log('currentTime: ', hours);
  const isDayTime = hours >= 6 && hours < 18;

  const getWeatherClass = (weather: string) => {
    switch (weather) {
      case 'rain':
        return 'rainy';
      case 'clouds':
        return 'cloudy';
      case 'snowy':
        return 'snowy';
      default:
        return isDayTime ? 'sunny' : 'clear-night';
    }
  };

  const handleCity = (data: string) => {
    console.log('data: ', data);
    // setCity(data.trim() === '' ? 'Noida' : data);
    setCity(data)
  };

  const getWeatherData = async (city: string, apiKey: string) => {
    const cityToFetch = city.trim() === '' ? 'Noida' : city;
    setLoading(true)
    try {
      const data = await fetchWeatherData(cityToFetch, apiKey);
      setWeather(data.weather[0].main.toLowerCase());
      setForecastData(data);
      setLoading(false); // Set loading to true before fetching data
    } catch (error: any) {
      setLoading(false);
    }
  }

  useEffect(() => {
    getWeatherData(city, apiKey);
  }, [city, apiKey,]);

  return (
    <div className={`weather-container ${getWeatherClass(weather)}`}>
          <div className='main-container'>
            <div className='main-section'>
              <TenDayForecast data={forecastData} loading={loading}/>
            </div>
            <div className='bg-blur'>
              <aside className='weather-bar'>
                <AddWeatherList handleClick={handleCity} city={city} apiKey={apiKey} />
              </aside>
            </div>
          </div>
    

    </div>
  );
}

export default App;
