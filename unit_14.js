/*fetch('https://api.openweathermap.org/data/2.5/weather?q=Berlin&appid=cc26cb9dc9dd9ea58f34321c8cd725b4')
    .then(function (resp) { return resp.json() }) // convert data to json
    .then(function (data) { console.log(data); })
    .catch(function () {
        // catch any errors
    });
*/

const parameters = {
    "url": "https://api.openweathermap.org/data/2.5/",
    "appid": "cc26cb9dc9dd9ea58f34321c8cd725b4",
};

function getWeather(){
    //console.log(document.querySelector('#city').value);
    
    const idCity = document.querySelector('#city').value;

    fetch(`${parameters.url}weather?id=${idCity}&units=metric&appid=${parameters.appid}`)
        .then(weather => {
            return weather.json();
        })
        .then(showWeather);

}

function showWeather(data){
    console.log(data);
}

getWeather();
document.querySelector('#city').onchange = getWeather;