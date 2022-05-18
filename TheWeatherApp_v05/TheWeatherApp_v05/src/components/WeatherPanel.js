import React from 'react'
import DateObject from "react-date-object";

const WeatherPanel = (props) => {
    let sunriseTime = new Intl.DateTimeFormat('en-US', { hour: '2-digit', minute: '2-digit' }).format((props.sys.sunrise + props.timezone) * 1000)
    let sunsetTime = new Intl.DateTimeFormat('en-US', { hour: '2-digit', minute: '2-digit' }).format((props.sys.sunset + props.timezone) * 1000)
    const mainTemp = parseInt(props.main.temp);
    const maxTemp = parseInt(props.main.temp_max);
    const minTemp = parseInt(props.main.temp_min);
    return (
        <article className="weahterpanel">
            <h3>{props.name}, {props.sys.country}</h3>
            <img src={'https://openweathermap.org/img/wn/' + props.weather[0].icon + '@2x.png'} alt='' />
            <h4>Current temperature: {mainTemp}&#176;c</h4>
            <h4>Maximum temperature: {maxTemp}&#176;c</h4>
            <h4>Minimum temperature: {minTemp}&#176;c</h4>
            <h4>Pressure: {props.main.pressure}</h4>
            <h4>Humidity: {props.main.humidity}%</h4>
            <h4>Sunrise: {sunriseTime}</h4>
            <h4>Sunset: {sunsetTime}</h4>
        </article>
    );
}

export default WeatherPanel