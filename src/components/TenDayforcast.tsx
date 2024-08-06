// import processWeatherData from '../utils/processWeatherData';
import Shimmer from './shimmerUI';

type TenDayForecastProps = {
    data: any,
    loading: boolean,
}

const TenDayForecast = ({ data, loading }: TenDayForecastProps) => {
    return (
        <div className="ten-day-forecast">
            {loading ? (
                <Shimmer />
            ) : (
                <>
                    <div className='top-weather-section'>
                        <h1 className='heading-text'>{data?.name}</h1>
                        <h4 className='temperature-text'>{Math.round(data?.main?.temp)}°C</h4>
                        {/* <p className='weather-type'>{data?.weather[0]?.main}</p> */}
                    </div>
                    {data?.weather?.map((day: any, index: number) => (
                        <div key={index} className="day">
                            <p className='weather-type'>{day?.main}</p>
                            {/* <img src={day.icon} alt={day.condition} /> */}
                        </div>
                    ))}
                    <p className='pressure-text'>H:{Math.round(data?.main?.temp_max)}<span>&nbsp;&nbsp;&nbsp;L:{Math.round(data?.main?.temp_max)}</span></p>
                </>
            )}
        </div>
    );
};

export default TenDayForecast;
