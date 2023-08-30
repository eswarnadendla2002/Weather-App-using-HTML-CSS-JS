var apiKey="dd54cfaeac2d7a84c404fb9214b2a90a";
var apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


var searchBox = document.querySelector(".search .input1");
var searchBtn = document.querySelector(".search button");
// debugger;
console.log(searchBox)
async function checkWeather(city){
    const response = await fetch(apiUrl +city +`&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

        document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed+' km/h';
        // console.log(data.weather[0].main);
    if(data.weather[0].main=="Mist"){
        document.querySelector(".weather-icon").src="../images/mist.png";
    }
    if(data.weather[0].main=="Snow"){
        document.querySelector(".weather-icon").src="../images/snow.png";
    }
    if(data.weather[0].main=="Clouds"){
        document.querySelector(".weather-icon").src="../images/clouds.png";
    }
    if(data.weather[0].main=="Clear"){
        document.querySelector(".weather-icon").src="../images/clear.png";
    }
    if(data.weather[0].main=="Drizzle"){
        document.querySelector(".weather-icon").src="../images/drizzle.png";
    }
    if(data.weather[0].main=="Rain"){
        document.querySelector(".weather-icon").src="../images/rain.png";
    }
    if(data.weather[0].main=="Haze"){
        document.querySelector(".weather-icon").src="../images/haze.png";
    }

    
    document.querySelector(".desc").innerHTML = "("+data.weather[0].main+")";

}

var myfun = function(){
    searchBtn.addEventListener("click",()=>{
        
        checkWeather(searchBox.value);
        
    })
   
}









