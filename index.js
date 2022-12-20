let xhr = new XMLHttpRequest();

xhr.open("get","https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=14ab3f36ef1f7f65cea0b4e134fad720");
xhr.send();

xhr.onload = ()=>{
console.log(JSON.parse(xhr.responseText))
};


