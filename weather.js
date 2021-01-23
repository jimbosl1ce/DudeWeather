let apiKey = 'e4381083a8cbc275c2fc3982bcc0ecc5';

let jimWeather;

  //Jimmy's weather ** uncomment this out to re-activate API 
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
    if(hightemp > 90 && humidity > 65){
      document.getElementById('jimmyhumidity').innerHTML = `${humidity}% ... might get a little sticky`;
    } else {
      document.getElementById('jimmyhumidity').innerHTML = `${humidity}% ... comfortable TBH`
    };
    treyWeather();
    codyWeather();
    setTimeout(betterHere, 200);
  });

  //Trey's weather
function treyWeather(){
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
    if(hightemp > 90 && humidity > 65){
      document.getElementById('treyhumidity').innerHTML = `${humidity}% ... might get a little sticky`;
    } else {
      document.getElementById('treyhumidity').innerHTML = `${humidity}% ... comfortable TBH`
    };
  });
};

  //Cody's weather
function codyWeather(){
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
      if(hightemp > 90 && humidity > 65){
        document.getElementById('codyhumidity').innerHTML = `${humidity}% ... might get a little sticky`;
      } else {
        document.getElementById('codyhumidity').innerHTML = `${humidity}% ... comfortable TBH`
      };
  });
};

  
  


function betterHere(){
  let codyCurrent = document.getElementById('codycurrent').innerHTML;
  let treyCurrent = document.getElementById('treycurrent').innerHTML;


  if(codyCurrent > treyCurrent){
      document.getElementById('treymoney').innerHTML = `Trey, it would be ${codyCurrent - treyCurrent} degrees warmer if you lived in they Bay :)`
  } else {
    document.getElementById('treymoney').innerHTML = `Trey, it would be ${codyCurrent - treyCurrent} degrees cooler if you lived in they Bay :)`
  }
  
}
  
  let activityWeather;
  let stuffToDo = '';
  let ggpLatLong = 'lat=37.7710222&lon=-122.4909429'
  let vmLatLong = 'lat=37.3036101&lon=-122.0730893'
  let apLatLong = 'lat=37.8673892&lon=-122.3090302'
  let obLatLong = 'lat=37.7525994&lon=-122.5273467'
  let sausLatLong = 'lat=37.8584346&lon=-122.5023593'
  let sonLatLong = 'lat=38.2911257&lon=-122.466652'

  // if forecast = 'Clear' that's a sunny day
  // if forecast = 'Clouds' that is a cloudy day
  // if forecast = 'Rain'


  //ggp
  fetch(`https://api.openweathermap.org/data/2.5/weather?${ggpLatLong}&appid=${apiKey}&units=imperial`)
  .then(res => res.json())
  .then(data => activityWeather = data)
  .then(() => console.log(activityWeather))
  .then(() => {
    let currenttemp = activityWeather.main.temp;
    let hightemp = activityWeather.main.temp_max;
    let lowtemp = activityWeather.main.temp_min;
    let forecast = activityWeather['weather'][0]['description'];
    let mainForecast = activityWeather['weather'][0]['main']
    let humidity = activityWeather.main.humidity;
    let windSpeed = activityWeather.wind.speed;
    
    
    document.getElementById('ggphigh').innerHTML = Math.round(hightemp);
    document.getElementById('ggplow').innerHTML = Math.round(lowtemp);
    document.getElementById('ggpforecast').innerHTML = forecast;
    
    let goodIdea = document.getElementById('ggpgoodidea');


    if(mainForecast === 'Rain'){
      goodIdea.innerHTML = 'Nope it gon\' rain';
    } else if(windSpeed > 13){
      goodIdea.innerHTML = 'Nope. Wind\'s obnoxious.';
    } else if(currenttemp > 45 && currenttemp < 65 && windSpeed < 13){
      goodIdea.innerHTML = 'Yup, low wind & jacket weather.';
    } else if(currentemp > 65 && windSpeed < 13){
      goodIdea.innerHTML = 'Yup, low wind & jacket weather.';
    }
    
    
  });
  
  fetch(`https://api.openweathermap.org/data/2.5/weather?${vmLatLong}&appid=${apiKey}&units=imperial`)
  .then(res => res.json())
  .then(data => activityWeather = data)
  .then(() => console.log(activityWeather))
  .then(() => {
    //let currenttemp = activityWeather.main.temp;
    let currenttemp = activityWeather.main.temp;
    let hightemp = activityWeather.main.temp_max;
    let lowtemp = activityWeather.main.temp_min;
    let forecast = activityWeather['weather'][0]['description'];
    let mainForecast = activityWeather['weather'][0]['main']
    let humidity = activityWeather.main.humidity;
    let windSpeed = activityWeather.wind.speed;
    
    
    document.getElementById('vmhigh').innerHTML = Math.round(hightemp);
    document.getElementById('vmlow').innerHTML = Math.round(lowtemp);
    document.getElementById('vmforecast').innerHTML = forecast;
    
    let goodIdea = document.getElementById('vmgoodidea');


    if(mainForecast === 'Rain'){
      //if it's too rainy
      goodIdea.innerHTML = 'Nope it gon\' rain';
    } else if(windSpeed > 13){
      //if it's too windy
      goodIdea.innerHTML = 'Nope. Wind\'s obnoxious.';
      //if it's jacket weather
    } else if(currenttemp > 45 && currenttemp < 65){

      goodIdea.innerHTML = 'Yup, low wind & jacket weather.';
    } else if(currenttemp > 65 && currenttemp < 70){
      goodIdea.innerHTML = 'Yup, low wind & jacket optional.';
    } else if(currenttemp > 71 && currenttemp < 79){
      goodIdea.innerHTML = 'Yup, low wind & it feels good.';
    } else if(currenttemp >= 80){
      goodIdea.innerHTML = 'Yup, and it might be hot AF'
    }
  });
  
  
  fetch(`https://api.openweathermap.org/data/2.5/weather?${apLatLong}&appid=${apiKey}&units=imperial`)
  .then(res => res.json())
  .then(data => activityWeather = data)
  .then(() => console.log(activityWeather))
  .then(() => {
    //let currenttemp = activityWeather.main.temp;
    let currenttemp = activityWeather.main.temp;
    let hightemp = activityWeather.main.temp_max;
    let lowtemp = activityWeather.main.temp_min;
    let forecast = activityWeather['weather'][0]['description'];
    let mainForecast = activityWeather['weather'][0]['main']
    let humidity = activityWeather.main.humidity;
    let windSpeed = activityWeather.wind.speed;
    
    
    document.getElementById('aphigh').innerHTML = Math.round(hightemp);
    document.getElementById('aplow').innerHTML = Math.round(lowtemp);
    document.getElementById('apforecast').innerHTML = forecast;
    
    let goodIdea = document.getElementById('apgoodidea');


    if(mainForecast === 'Rain'){
      //if it's too rainy
      goodIdea.innerHTML = 'Nope it gon\' rain';
    } else if(windSpeed > 13){
      //if it's too windy
      goodIdea.innerHTML = 'Nope. Wind\'s obnoxious.';
      //if it's jacket weather
    } else if(currenttemp > 45 && currenttemp < 65){

      goodIdea.innerHTML = 'Yup, low wind & jacket weather.';
    } else if(currenttemp > 65 && currenttemp < 70){
      goodIdea.innerHTML = 'Yup, low wind & jacket optional.';
    } else if(currenttemp > 71 && currenttemp < 79){
      goodIdea.innerHTML = 'Yup, low wind & it feels good.';
    } else if(currenttemp >= 80){
      goodIdea.innerHTML = 'Yup, and it might be hot AF'
    }
  });
  
  fetch(`https://api.openweathermap.org/data/2.5/weather?${obLatLong}&appid=${apiKey}&units=imperial`)
  .then(res => res.json())
  .then(data => activityWeather = data)
  .then(() => console.log(activityWeather))
  .then(() => {
    //let currenttemp = activityWeather.main.temp;
    let currenttemp = activityWeather.main.temp;
    let hightemp = activityWeather.main.temp_max;
    let lowtemp = activityWeather.main.temp_min;
    let forecast = activityWeather['weather'][0]['description'];
    let mainForecast = activityWeather['weather'][0]['main']
    let humidity = activityWeather.main.humidity;
    let windSpeed = activityWeather.wind.speed;
    
    
    document.getElementById('obhigh').innerHTML = Math.round(hightemp);
    document.getElementById('oblow').innerHTML = Math.round(lowtemp);
    document.getElementById('obforecast').innerHTML = forecast;
    
    let goodIdea = document.getElementById('obgoodidea');


    if(mainForecast === 'Rain'){
      //if it's too rainy
      goodIdea.innerHTML = 'Nope it gon\' rain';
    } else if(windSpeed > 13){
      //if it's too windy
      goodIdea.innerHTML = 'Nope. Wind\'s obnoxious.';
      //if it's jacket weather
    } else if(currenttemp > 45 && currenttemp < 65){

      goodIdea.innerHTML = 'Yup, low wind & jacket weather.';
    } else if(currenttemp > 65 && currenttemp < 70){
      goodIdea.innerHTML = 'Yup, low wind & jacket optional.';
    } else if(currenttemp > 71 && currenttemp < 79){
      goodIdea.innerHTML = 'Yup, low wind & it feels good.';
    } else if(currenttemp >= 80){
      goodIdea.innerHTML = 'Yup, and it might be hot AF'
    }
  });


  
  fetch(`https://api.openweathermap.org/data/2.5/weather?${sausLatLong}&appid=${apiKey}&units=imperial`)
  .then(res => res.json())
  .then(data => activityWeather = data)
  .then(() => console.log(activityWeather))
  .then(() => {
    //let currenttemp = activityWeather.main.temp;
    let currenttemp = activityWeather.main.temp;
    let hightemp = activityWeather.main.temp_max;
    let lowtemp = activityWeather.main.temp_min;
    let forecast = activityWeather['weather'][0]['description'];
    let mainForecast = activityWeather['weather'][0]['main']
    let humidity = activityWeather.main.humidity;
    let windSpeed = activityWeather.wind.speed;
    
    
    document.getElementById('saushigh').innerHTML = Math.round(hightemp);
    document.getElementById('sauslow').innerHTML = Math.round(lowtemp);
    document.getElementById('sausforecast').innerHTML = forecast;
    
    let goodIdea = document.getElementById('sausgoodidea');


    if(mainForecast === 'Rain'){
      //if it's too rainy
      goodIdea.innerHTML = 'Nope it gon\' rain';
    } else if(windSpeed > 13){
      //if it's too windy
      goodIdea.innerHTML = 'Nope. Wind\'s obnoxious.';
      //if it's jacket weather
    } else if(currenttemp > 45 && currenttemp < 65){

      goodIdea.innerHTML = 'Yup, low wind & jacket weather.';
    } else if(currenttemp > 65 && currenttemp < 70){
      goodIdea.innerHTML = 'Yup, low wind & jacket optional.';
    } else if(currenttemp > 71 && currenttemp < 79){
      goodIdea.innerHTML = 'Yup, low wind & it feels good.';
    } else if(currenttemp >= 80){
      goodIdea.innerHTML = 'Yup, and it might be hot AF'
    }
  });
  
  fetch(`https://api.openweathermap.org/data/2.5/weather?${sonLatLong}&appid=${apiKey}&units=imperial`)
  .then(res => res.json())
  .then(data => activityWeather = data)
  .then(() => console.log(activityWeather))
  .then(() => {
    //let currenttemp = activityWeather.main.temp;
    let currenttemp = activityWeather.main.temp;
    let hightemp = activityWeather.main.temp_max;
    let lowtemp = activityWeather.main.temp_min;
    let forecast = activityWeather['weather'][0]['description'];
    let mainForecast = activityWeather['weather'][0]['main']
    let humidity = activityWeather.main.humidity;
    let windSpeed = activityWeather.wind.speed;
    
    
    document.getElementById('sonhigh').innerHTML = Math.round(hightemp);
    document.getElementById('sonlow').innerHTML = Math.round(lowtemp);
    document.getElementById('sonforecast').innerHTML = forecast;
    
    let goodIdea = document.getElementById('songoodidea');


    if(mainForecast === 'Rain'){
      //if it's too rainy
      goodIdea.innerHTML = 'Nope it gon\' rain';
    } else if(windSpeed > 13){
      //if it's too windy
      goodIdea.innerHTML = 'Nope. Wind\'s obnoxious.';
      //if it's jacket weather
    } else if(currenttemp > 45 && currenttemp < 65){

      goodIdea.innerHTML = 'Yup, low wind & jacket weather.';
    } else if(currenttemp > 65 && currenttemp < 70){
      goodIdea.innerHTML = 'Yup, low wind & jacket optional.';
    } else if(currenttemp > 71 && currenttemp < 79){
      goodIdea.innerHTML = 'Yup, low wind & it feels good.';
    } else if(currenttemp >= 80){
      goodIdea.innerHTML = 'Yup, and it might be hot AF'
    }
  });
  








  










  
  











  
  
  //Kanye quote fetcher
let kanye;
fetch('https://api.kanye.rest')
  .then(res => res.json())
  .then(data => kanye = data)
  //.then(() => console.log(kanye))
  .then(() => {
  document.getElementById('quote').innerHTML = kanye.quote;
  });
  
  
  
  
  // Different Chillhop Soundclouds - added on 1.22.22 ... uncomment ALL to re-activate chillhop.

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  
  let soundcloudNumber = getRandomInt(10);

  switch (soundcloudNumber) {
    case 0:
      document.getElementById('soundcloud').innerHTML = `<h3>Have some chillhop while you're here.</h3>
      <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/952779316&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/jdhogerty" title="jdhogerty" target="_blank" style="color: #cccccc; text-decoration: none;">The Dude Dashboard</a> · <a href="https://soundcloud.com/jdhogerty/sombre/s-sPkoJnS8kuh" title="Dude Dashboard" target="_blank" auto_play="true" style="color: #cccccc; text-decoration: none;">Catch some lofi vibes deeeeeeewd</a></div>`
      break;
    case 1:
      document.getElementById('soundcloud').innerHTML = `<h3>Have some chillhop while you're here.</h3>
      <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/354609287&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/feardogmusic" title="Feardog" target="_blank" style="color: #cccccc; text-decoration: none;">Feardog</a> · <a href="https://soundcloud.com/feardogmusic/early-monday-mornings-lo-fi-hip-hop-jazzhop-chillhop-mix" title="early monday mornings. [lo-fi hip hop / jazzhop / chillhop mix]" target="_blank" style="color: #cccccc; text-decoration: none;">early monday mornings. [lo-fi hip hop / jazzhop / chillhop mix]</a></div>`
      break;
    case 2:
      document.getElementById('soundcloud').innerHTML = `<h3>Have some chillhop while you're here.</h3>
      <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/276315163&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/chillhopdotcom" title="Chillhop Music" target="_blank" style="color: #cccccc; text-decoration: none;">Chillhop Music</a> · <a href="https://soundcloud.com/chillhopdotcom/sound-of-the-city-mix-chillhop-x-dont-sleep-records-mixed-by-phoniks" title="Sound of the City Mix [Chillhop x Don&#x27;t Sleep Records, mixed by Phoniks]" target="_blank" style="color: #cccccc; text-decoration: none;">Sound of the City Mix [Chillhop x Don&#x27;t Sleep Records, mixed by Phoniks]</a></div>`
      break;
    case 3:
      document.getElementById('soundcloud').innerHTML = `<h3>Have some chillhop while you're here.</h3>
      <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/952779316&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/jdhogerty" title="jdhogerty" target="_blank" style="color: #cccccc; text-decoration: none;">The Dude Dashboard</a> · <a href="https://soundcloud.com/jdhogerty/sombre/s-sPkoJnS8kuh" title="Dude Dashboard" target="_blank" auto_play="true" style="color: #cccccc; text-decoration: none;">Catch some lofi vibes deeeeeeewd</a></div>`
      break;
    case 4:
      document.getElementById('soundcloud').innerHTML = `<h3>Have some chillhop while you're here.</h3>
      <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/346906651&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/feardogmusic" title="Feardog" target="_blank" style="color: #cccccc; text-decoration: none;">Feardog</a> · <a href="https://soundcloud.com/feardogmusic/3-am-lo-fi-hip-hop-jazzhop-chillhop-mix" title="3 a.m. [lo-fi hip hop / jazzhop / chillhop mix]" target="_blank" style="color: #cccccc; text-decoration: none;">3 a.m. [lo-fi hip hop / jazzhop / chillhop mix]</a></div>`
      break;
    case 5:
      document.getElementById('soundcloud').innerHTML = `<h3>Have some chillhop while you're here.</h3>
      <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/189800350&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/chillhopdotcom" title="Chillhop Music" target="_blank" style="color: #cccccc; text-decoration: none;">Chillhop Music</a> · <a href="https://soundcloud.com/chillhopdotcom/nujabes-eternal-mix" title="Nujabes eternal [Mix]" target="_blank" style="color: #cccccc; text-decoration: none;">Nujabes eternal [Mix]</a></div>`
      break;
    case 6:
      document.getElementById('soundcloud').innerHTML = `<h3>Have some chillhop while you're here.</h3>
      <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/251803221&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/chillhopdotcom" title="Chillhop Music" target="_blank" style="color: #cccccc; text-decoration: none;">Chillhop Music</a> · <a href="https://soundcloud.com/chillhopdotcom/chill-study-beats-vol-1" title="Chill Study Beats Vol. 1" target="_blank" style="color: #cccccc; text-decoration: none;">Chill Study Beats Vol. 1</a></div>`
      break;
    case 7:
      document.getElementById('soundcloud').innerHTML = `<h3>Have some chillhop while you're here.</h3>
      <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/241336032&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/chillhopdotcom" title="Chillhop Music" target="_blank" style="color: #cccccc; text-decoration: none;">Chillhop Music</a> · <a href="https://soundcloud.com/chillhopdotcom/chillhop-hangouts-3-jazzy-chilled-hip-hop-2-hour-mix" title="Chillhop Hangouts #3 ♫ Jazzy &#x27; Chilled &#x27; Hip Hop [2 Hour mix]" target="_blank" style="color: #cccccc; text-decoration: none;">Chillhop Hangouts #3 ♫ Jazzy &#x27; Chilled &#x27; Hip Hop [2 Hour mix]</a></div>`
      break;
    case 8:
      document.getElementById('soundcloud').innerHTML = `<h3>Have some chillhop while you're here.</h3>
      <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/255575383&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/chillhopdotcom" title="Chillhop Music" target="_blank" style="color: #cccccc; text-decoration: none;">Chillhop Music</a> · <a href="https://soundcloud.com/chillhopdotcom/chillhop-hangouts-5" title="Chillhop Hangouts 5" target="_blank" style="color: #cccccc; text-decoration: none;">Chillhop Hangouts 5</a></div>`
      break;
    case 9:
      document.getElementById('soundcloud').innerHTML = `
      <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/394006296&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/feardogmusic" title="Feardog" target="_blank" style="color: #cccccc; text-decoration: none;">Feardog</a> · <a href="https://soundcloud.com/feardogmusic/coffee-time-lo-fi-hip-hop-jazzhop-chillhop-mix-studysleeprelax-music" title="coffee time. ☕ [lo-fi hip hop / jazzhop / chillhop mix] (Study/Sleep/Relax music)" target="_blank" style="color: #cccccc; text-decoration: none;">coffee time. ☕ [lo-fi hip hop / jazzhop / chillhop mix] (Study/Sleep/Relax music)</a></div>`
      break;
    case 10:
      document.getElementById('soundcloud').innerHTML = `<h3>Have some chillhop while you're here.</h3>
      <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/366204230&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/feardogmusic" title="Feardog" target="_blank" style="color: #cccccc; text-decoration: none;">Feardog</a> · <a href="https://soundcloud.com/feardogmusic/late-night-thoughts-lo-fi-hip-hop-jazzhop-chillhop-mix" title="late night thoughts. [lo-fi hip hop / jazzhop / chillhop mix]" target="_blank" style="color: #cccccc; text-decoration: none;">late night thoughts. [lo-fi hip hop / jazzhop / chillhop mix]</a></div>`
      break;
    default:
      alert( "Issue loading SoundCloud environment" );
  };