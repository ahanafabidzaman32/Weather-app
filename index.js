let xhr = new XMLHttpRequest();

xhr.open("get","https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=14ab3f36ef1f7f65cea0b4e134fad720");
xhr.send();

xhr.onload = ()=>{
const weatherInfo = JSON.parse(xhr.responseText)
console.log(weatherInfo)
document.getElementById('humidity').innerText = weatherInfo.main.humidity
document.getElementById("wind").innerText = weatherInfo.wind.speed
document.getElementById("temperature").innerText = weatherInfo.main.temp

document.getElementById("icon").src = 'http://openweathermap.org/img/w/' + weatherInfo.weather[0].icon + '.png'



};

// let locationIcon = document.querySelector('.weather-icon');
// const {icon} = data.weather[0];
// locationIcon.innerHTML = <img src="icons/${icon}.png">;

var datetime = new Date();
document.getElementById("time").textContent = datetime.toTimeString().slice(0, 8); //it will print on html page

// const myRequest = new Request('https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=14ab3f36ef1f7f65cea0b4e134fad720');
// fetch(myRequest).then((response) => {console.log(response)})
