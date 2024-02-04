const api_key = "c23b41a0bf139e088b878159f13107b8";
const api_link = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

//API link : https://api.openweathermap.org/data/2.5/weather?q=London&appid=c23b41a0bf139e088b878159f13107b8

const searchBox = document.getElementById("searchBox");
const searchBtn = document.getElementById("searchButton");
const weatherImg = document.querySelector(".weatherIcon");

async function check_weather(cityName){
    const response = await fetch(api_link + cityName + `&appid=${api_key}`);
    var data = await response.json();

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{
        console.log(data);
        var date = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
        var UTC_offset = date.getTimezoneOffset();
        date.setMinutes(date.getMinutes() + UTC_offset); 
        var city_offset  = data.timezone/60;
        date.setMinutes(date.getMinutes() + city_offset);
        date.getSeconds().toString().padStart(2, '0');
        document.querySelector(".cityName").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".windSpeed").innerHTML = data.wind.speed + " km/h";
        document.querySelector(".date").innerHTML = date.toLocaleDateString('en-uk', options);
        document.querySelector(".time").innerHTML = date.getHours().toString().padStart(2, '0') + ":" + date.getMinutes().toString().padStart(2, '0') + ":" +date.getSeconds().toString().padStart(2, '0');
    
        if(data.weather[0].main == "Clouds"){
            weatherImg.src = "Media/clouds.png";
        }
        else if(data.weather[0].main == "Clear"){
            weatherImg.src = "Media/sun.png";
        }
        else if(data.weather[0].main == "Rain"){
            weatherImg.src = "Media/rain.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherImg.src = "Media/drizzle.png";
        }
        else if(data.weather[0].main == "Mist"){
            weatherImg.src = "Media/mist.png";
        }
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}
document.addEventListener("keydown", event => {
    if(event.key == "Enter"){
        check_weather(searchBox.value);
    }
});
searchBtn.addEventListener("click", event=>{
    check_weather(searchBox.value);  
});