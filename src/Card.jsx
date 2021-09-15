import React, { useState, useEffect } from 'react'

const Card = ({ temp,
    humidity,
    pressure,
    weathermood,
    name,
    speed,
    country,
    sunset, }) => {
    const [weatherState, setWeatheState] = useState("");

    useEffect(() => {
        if (weathermood) {
            switch (weathermood) {
                case "Clouds":
                    setWeatheState("wi-day-cloudy");
                    break;
                case "Haze":
                    setWeatheState("wi-fog");
                    break;
                case "Clear":
                    setWeatheState("wi-day-sunny");
                    break;
                case "Mist":
                    setWeatheState("wi-dust");
                    break;

                default:
                    setWeatheState("wi-day-sunny");
                    break;
            }
        }
    }, [weathermood]);

    // converting the seconds into time
    let sec = sunset;
    let date = new Date(sec * 1000);
    let timeStr = `${date.getHours()}:${date.getMinutes()}`;
    return (
        <>
            <div className="description">
                <i className={`wi ${weatherState}`}></i>
                <h2>{name}, {country}</h2>
                <h4>{temp}&deg;</h4>
            </div>


            <div className="temp">

                <div className="sunset">
                    <i className={"wi wi-sunset"}></i>
                    <div>
                        <h6>{timeStr} PM</h6>
                        <h6>Sunset</h6>
                    </div>
                </div>

                <div className="sunset">
                    <i className={"wi wi-humidity"}></i>
                    <div>
                        <h6>{humidity}</h6>
                        <h6>humidity</h6>
                    </div>
                </div>

                <div className="sunset">
                    <i className={"wi wi-rain"}></i>
                    <div>
                        <h6>{pressure}</h6>
                        <h6>Pressure</h6>
                    </div>
                </div>

                <div className="sunset">
                    <i className="wi wi-strong-wind"></i>
                    <div>
                        <h6>{speed}</h6>
                        <h6>Speed</h6>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Card
