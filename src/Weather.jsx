import React, { useState, useEffect, useCallback } from 'react'
import Caled from './Caled'
import Card from './Card'


const Weather = () => {
  const [searchValue, setSearchValue] = useState("Delhi");
  const [tempInfo, setTempInfo] = useState({});

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getWeatherInfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=4f76a9c9e1c67facee1465e328153c3a`

      let res = await fetch(url);
      let data = await res.json();

      const { temp, humidity, pressure } = data.main;
      const { main: weathermood } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;

      const myNewWeatherInfo = {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset,
      };

      setTempInfo(myNewWeatherInfo);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWeatherInfo();
  }, []);

  return (
    <>
      <div className="container">
        <div className="weather">
          <div className="content">
            <div className="inputBox">
              <form>
                <input
                  type="text"
                  placeholder="search..."
                  autoFocus
                  value={searchValue}
                  id="search"
                  onChange={(e) => setSearchValue(e.target.value)}
                />

                <button
                  className="btn"
                  type="button"
                  onClick={getWeatherInfo} >
                  <i className="fa fa-search"></i> 
                </button> 
              </form>
            </div>
            <Card {...tempInfo} />
          </div>
          <Caled />
        </div>
      </div>
    </>

  )
}

export default Weather
