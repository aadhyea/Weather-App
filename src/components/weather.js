import React from "react";
import '../index.css';

export default function weather({weather}){
    return(
        <div>
            {( typeof weather.main != 'undefined') ? (
            <div className="weather-box">
                <div className="temp">
                    {Math.round(weather.main.temp)}°C
                </div>
                <div className="weather">
                    {weather.weather[0].main}
                </div>
            </div>
        ): ('')}
        </div>
        
    );
}