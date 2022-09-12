import React from 'react'
import './Currentweather.css'


const Weather = ({data}) => {
  return (
    <div className='weather'>
        <div className="top">

            <div>
                <p className='city'> {data.city}</p>
                <p className='description'>{data.weather[0].description}</p>
            </div>
            
            <img src={`icons/${data.weather[0].icon}.png`} alt="weather" className='weather-icon' />
        </div>
        <div className="bottom">
            <p className="temperature">{Math.round(data.main.temp)}°C</p>
            <div className="details">
                <div className="parametre-row">
                    <span className='parametre-label top'>Details : </span>
                </div>
                <div className="parametre-row">
                    <span className='parametre-label'>feels like</span>
                    <span className='parametre-value'>{Math.round(data.main.feels_like)}°C</span>
                </div>
                <div className="parametre-row">
                    <span className='parametre-label'>Wind</span>
                    <span className='parametre-value'>{data.wind.speed} m/s</span>
                </div>
                <div className="parametre-row">
                    <span className='parametre-label'>Humidity</span>
                    <span className='parametre-value'>{data.main.humidity} %</span>
                </div>
                <div className="parametre-row">
                    <span className='parametre-label'>Pressure</span>
                    <span className='parametre-value'>{data.main.pressure} hPa </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Weather