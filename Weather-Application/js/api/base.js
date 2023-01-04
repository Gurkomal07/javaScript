// replace your api key 
const API = "http://api.openweathermap.org/data/2.5/weather?q="
const API_KEY = "&appid=33d41b7651d221a13131f535a9193209";



// create getWeather function here

function getWeather(cityName){


    let apiString = API + cityName + API_KEY + "&units=metric";

    console.log(apiString);
    return fetch(`${apiString}`)
        .then((response)=> {
            return response.json()
        }).then((data)=> {
            return data
        })

}

// export the getWeather function
export { getWeather }