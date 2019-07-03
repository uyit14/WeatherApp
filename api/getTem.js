const URL = "http://api.openweathermap.org/data/2.5/weather?APPID=02d12f3623d749e35f096a218d430d3a&q="

function getTem(cityName){
    fetch(URL + cityName)
    .then(res => res.json())
    .then(resJson => resJson.list[0].main.temp);
}