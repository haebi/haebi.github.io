const weather   = document.querySelector("#weather");
const city      = document.querySelector("#city");
const API_KEY   = "b20b65d479819df384221bb46189a01e";

function onGeoOK(position)
{
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            //city.innerText      = data.name;
            //weather.innerText   = `${data.weather[0].main} / ${data.main.temp}`;
            weather.innerText   = `${data.weather[0].main} / ${data.main.temp}°C @ ${data.name}`;
        });
}

function onGeoError() {
    //city.innerText      = "";
    weather.innerText   = "";
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
