import './App.css';
import Search from './components/search'
import Location from './components/location-card';
import Weather from './components/weather';
import { useState } from 'react';

const api = {
  key : 'bd4c28030d2f248ee847a68a82b27c01',
  base : 'https://api.openweathermap.org/data/2.5/'
}

function App() {

  const [query, setQuery] = useState('');;
  const [weather, setWeather] = useState({});

  const search = evt => {
    if(evt.key == 'Enter')
      fetch (`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setQuery('');
        setWeather(result);
        console.log(result);
      })
  }

  return (
    <div className={
      (typeof weather.main != 'undefined') ?
        (weather.weather[0].main == 'Clouds') ? 'App cloudy' :
          (weather.weather[0].main == 'Rain' || weather.weather[0].main == 'Thunderstorm') ? 'App thunder' :
            (weather.weather[0].main == 'Snow') ? 'App snowy' :
              (weather.weather[0].main == 'Mist' || weather.weather[0].main == 'Haze') ? 'App mist' :
          'App'
        :'App'
    }>
      <main>
        <Search query={query} setQuery={setQuery} search={search}/>
        <Location weather={weather}/>
        <Weather weather = {weather}/>
      </main>
    </div>
  );
}

export default App;
