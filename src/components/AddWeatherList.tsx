import React, { useState, useEffect } from 'react';
import "./weather-list.css";
import fetchWeatherData from '../services/weatherServices';
// import Close from "../../public/assets/close.svg";

type weatherProps = {
    handleClick: (data: string) => void;
    city: string
    apiKey: string;
}

function AddWeatherList({ handleClick, city, apiKey }: weatherProps) {
    const [searchInputText, setInputText] = useState<string>('');
    const [countryList, setCountryList] = useState<Array<any>>(() => {
        const savedList = localStorage.getItem('countryList');
        return savedList ? JSON.parse(savedList) : [];
    });
    const [weatherData, setWeatherData] = useState<any>(null);
    const handleInputChange = (e: any) => {
        setInputText(e.target.value);
        // handleClick(e.target.value)

    }
    const handleKeyPress = (event: any) => {
        if (event.key === 'Enter') {
            handleClick(searchInputText)
            // Add your logic here (e.g., submit form, call API, etc.)
        }
    };
    const addCountryList = () => {
        if (weatherData) {
            const newCountry = {
                name: weatherData.name,
                weather: weatherData.weather[0],
                main: weatherData.main,
            };
            setCountryList((prev) => {
                const updatedList = [...prev, newCountry];
                localStorage.setItem('countryList', JSON.stringify(updatedList));
                return updatedList;
            });
        }

    }
    const handleClear = () => {
        setInputText('')
    }
    useEffect(() => {

        const getWeatherData = async () => {
            try {
                const data = await fetchWeatherData(city, apiKey);
                setWeatherData(data); // Set the weather data for the current city
            } catch (error: any) {
                console.log('error: ', error);
            }
        };

        getWeatherData();
    }, [city, apiKey]);
    return (
        <div>
            <div className='header-section'>
                <h2 className='header-title'>Weather</h2>
                {searchInputText.length > 0 && <button onClick={addCountryList} className='add-btn'>Add</button>}
            </div>
            <div className='form-label '>
                <input type="text" value={searchInputText} onChange={handleInputChange} onKeyPress={handleKeyPress} placeholder='Search Location....' />
                <img src="/assets/close.svg" className='close-btn' onClick={handleClear} />
            </div>
            {
                countryList.map((country, index) => (
                    <div className='weather-list'>
                        <div className='weather-list-top-section'>
                            <div className='weather-location'>{country?.name}</div>
                            <div className='weather-temp'>28</div>
                        </div>
                        <div className='weather-bottom-section'>
                            <div className='weather-type'>
                                {country.weather.main.toLowerCase()}
                            </div>
                            <div className='weather-pressure-text'>
                                H:{Math.round(country.main.temp_max)}<span>&nbsp;&nbsp;L:{Math.round(country.main.temp_min)}</span>
                            </div>

                        </div>

                    </div>
                ))
            }

        </div>
    )
}

export default AddWeatherList