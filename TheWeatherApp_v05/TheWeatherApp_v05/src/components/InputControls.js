import React, { Component } from 'react';
import { useState } from "react";
import Axios from "axios";
import './../index.css';
import WeatherPanel from './WeatherPanel';

function InputControls() {
    let errorContent = null;
    let resultContent = null;
    let [responseData, setResponseData] = useState("")

    const [locationName, setLocationName] = useState("");
    const [hasError, setHasError] = useState(false);
    const setValue = event => { setLocationName(event.target.value) }

    const getData = (event) => {
        //console.log('InputControls > getData = ' + locationName);
        Axios.get('https://api.openweathermap.org/data/2.5/weather?q=' + locationName + '&APPID=099b9659a9ceb597aefe07a299faf959&units=metric')
            .then(response => {
                setResponseData(response.data)
                setHasError(null)
                console.log(response.data);
            })
            .catch((error) => {
                setResponseData(null)
                if (error.response) {
                    //console.log(error.response.headers);
                    if (error.response.status === 400) {
                        setHasError('Please provide a valid location.')
                    } else if (error.response.status === 404) {
                        setHasError('Location not found. Please provide a valid location.')
                    }
                    //setHasError(error.response.headers)
                } else if (error.request) {
                    //console.log(error.request);
                    setHasError(error.request)
                } else {
                    console.log('Error', error.message);
                    //setHasError(error.message)
                }
            });
    }

    if (hasError) { errorContent = (<p>{hasError}</p>) };

    if (responseData) { resultContent = <WeatherPanel key={responseData.id} {...responseData}></WeatherPanel>; }

    return (
        <section>
            <div>
                <label className="label">Please enter a town/city, country...</label>
            </div>
            <div>
                <input className="input" onChange={setValue}></input>
            </div>
            <div>
                <button className="button" onClick={getData}>Get Weather Information</button>
            </div>

            {errorContent}
            {resultContent}

        </section>
    )
}

export default InputControls