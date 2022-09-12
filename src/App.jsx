import { useState } from 'react'
import './App.css'
import Weather from './components/current-weather/Weather';
import Search from './components/Search'
import {WEATHER_API_KEY,WEATHER_API_URL} from './api.js'
import Forecast from './components/Forecast/Forecast';

function App() {
  const [currentweather,setCurrentweather] = useState(null);
  const [forecast,setForecast] = useState(null)
 
  const handleOnSearchChange=(searchData)=>{
    const [lat,lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)
    const forecastFetch = fetch (`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)

    Promise.all([currentWeatherFetch,forecastFetch])
    .then (async (response)=>{
      const weatherResponse = await response[0].json();
      const forecastResponse = await response[1].json();

      setCurrentweather({city:searchData.label ,...weatherResponse});
      setForecast({city:searchData.label ,...forecastResponse});
    })

    .catch((err)=> console.log(err));


  }

  console.log(currentweather);
  console.log(forecast);


  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange}/>
      { currentweather && <Weather data={currentweather}/>}
      {forecast && <Forecast data={forecast} />}
    </div>
  )
}

export default App
