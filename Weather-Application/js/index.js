// Include your assignment 1 below.
// Read the PDF for instruction on what to do.
// Ensure that you look at the "Marking Key" section of the PDF
// to not lose any marks.

import 'bootstrap/dist/css/bootstrap.min.css';
import { renderWeather } from './dom/weather';
import { getWeather } from './api/base';

let weatherDataElement = document.querySelector('#weather-search');

let weatherContainer = document.querySelector('.weather-container');


weatherDataElement.addEventListener("submit", (event)=> {
        event.preventDefault()

        let userInput = event.target.elements["city-name"]
        let userCity = userInput.value

        getWeather(userCity).then((weatherReport) => { 
             console.log(weatherReport)
                renderWeather(weatherReport, weatherContainer)
            })
     
    })

