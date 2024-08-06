// src/services/weatherService.js
import axios from 'axios';


const fetchWeatherData = async (city:string, apiKey:string ) => {
  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data', error);
    throw error;
  }
};

export default fetchWeatherData;
