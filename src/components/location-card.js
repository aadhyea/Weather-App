import React from "react";
import '../index.css';

export default function location({weather}){

    const dateBuilder = (d) => {
        let months = ['January','February','March','April','May','June','July','August','September','October',
                        'November','December'];
        let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

        let day = days[d.getDay()]
        let date = d.getDate()
        let month = months[d.getMonth()]
        let year = d.getFullYear()

        return `${day}\r\n${date} ${month}, ${year}`
    }

    return(
        <div>
            {( typeof weather.main != 'undefined') ? (
            <div className="location-card">
                <div className="loc"><b> {weather.name}, {weather.sys.country}</b></div>
                <div className="date"> { dateBuilder(new Date()) } </div>
            </div>
        ) : ('')}
        </div>
        
    );
}