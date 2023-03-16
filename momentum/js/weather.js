const API_KEY = "5cd20f3121f6630c903bd7686f3d9de0";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    fetch(url)
        .then(response => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
            city.innerText = data.name;
        });
}
function onGeoError(){
    alert("Can't find you. NO weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError); 