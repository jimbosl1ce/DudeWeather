let jimWeather;

  //Jimmy's weather
fetch('https://api.openweathermap.org/data/2.5/weather?zip=94117,us&appid=e4381083a8cbc275c2fc3982bcc0ecc5&units=imperial')
  .then(res => res.json())
  .then(data => jimWeather = data)
  //.then(() => console.log(jimWeather))
  .then(() => {
    let currenttemp = jimWeather.main.temp;
    let hightemp = jimWeather.main.temp_max;
    let lowtemp = jimWeather.main.temp_min;
    let forecast = jimWeather['weather'][0]['description'];
    let humidity = jimWeather.main.humidity;
    document.getElementById('jimmyhigh').innerHTML = Math.round(hightemp);
    document.getElementById('jimmylow').innerHTML = Math.round(lowtemp);
    document.getElementById('jimmycurrent').innerHTML = Math.round(currenttemp);
    document.getElementById('jimmyforecast').innerHTML = forecast;
    document.getElementById('jimmyhumidity').innerHTML = humidity + "%";
  });

  //Trey's weather
fetch('https://api.openweathermap.org/data/2.5/weather?zip=11215,us&appid=e4381083a8cbc275c2fc3982bcc0ecc5&units=imperial')
  .then(res => res.json())
  .then(data => jimWeather = data)
  //.then(() => console.log(jimWeather))
  .then(() => {
    let currenttemp = jimWeather.main.temp;
    let hightemp = jimWeather.main.temp_max;
    let lowtemp = jimWeather.main.temp_min;
    let forecast = jimWeather['weather'][0]['description'];
    let humidity = jimWeather.main.humidity;
    document.getElementById('treyhigh').innerHTML = Math.round(hightemp);
    document.getElementById('treylow').innerHTML = Math.round(lowtemp);
    document.getElementById('treycurrent').innerHTML = Math.round(currenttemp);
    document.getElementById('treyforecast').innerHTML = forecast;
    document.getElementById('treyhumidity').innerHTML = humidity + "%";
  });

  //Cody's weather
fetch('https://api.openweathermap.org/data/2.5/weather?zip=94010,us&appid=e4381083a8cbc275c2fc3982bcc0ecc5&units=imperial')
  .then(res => res.json())
  .then(data => jimWeather = data)
  //.then(() => console.log(jimWeather))
  .then(() => {
    let currenttemp = jimWeather.main.temp;
    let hightemp = jimWeather.main.temp_max;
    let lowtemp = jimWeather.main.temp_min;
    let forecast = jimWeather['weather'][0]['description'];
    let humidity = jimWeather.main.humidity;
    document.getElementById('codyhigh').innerHTML = Math.round(hightemp);
    document.getElementById('codylow').innerHTML = Math.round(lowtemp);
    document.getElementById('codycurrent').innerHTML = Math.round(currenttemp);
    document.getElementById('codyforecast').innerHTML = forecast;
    document.getElementById('codyhumidity').innerHTML = humidity + "%";
  });

let kanye;

  //Kanye quote fetcher
fetch('https://api.kanye.rest')
  .then(res => res.json())
  .then(data => kanye = data)
  .then(() => console.log(kanye))
  .then(() => {
  document.getElementById('quote').innerHTML = kanye.quote;
  })