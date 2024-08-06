// type ApiResponse = {
//   main: {
//     dt: number;
//     temp_max: number;
//     temp_min: number;
//     weather: {
//       main: string;
//       icon: string;
//     }[];
//   }[];
// };
// type ProcessedWeatherData = {
//   date: string;
//   temperature: {
//     min: number;
//     max: number;
//   };
//   condition: string;
//   icon: string;
// };
// const processWeatherData = (data: ApiResponse): ProcessedWeatherData{} => {
//   // console.log('data: ', data);
//   // return {
//   //   // date: new Date(day.dt * 1000).toLocaleDateString(),
//   //   temperature: {
//   //     min: temp_min,
//   //     max: temp_max,
//   //   },
//   //   condition: day.weather[0].main,
//   //   icon: `http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`,
//   // };
// };

// export default processWeatherData;
import React from 'react'

function processWeatherData() {
  return (
    <div>processWeatherData</div>
  )
}

export default processWeatherData