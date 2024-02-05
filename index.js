const api_key = "c23b41a0bf139e088b878159f13107b8";
const api_link = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
var myDate = new Date();

//API link : https://api.openweathermap.org/data/2.5/weather?q=London&appid=c23b41a0bf139e088b878159f13107b8

const searchBox = document.getElementById("searchBox");
const searchBtn = document.getElementById("searchButton");
const weatherImg = document.querySelector(".weatherIcon");

async function check_weather(cityName){
    const response = await fetch(api_link + cityName + `&appid=${api_key}`);
    var data = await response.json();

    if(response.status == 404){
        if(myDate.getHours()>=6 && myDate.getHours() < 18){
            document.querySelector(".error").style.display = "block";
            document.querySelector(".weather").style.display = "none";
            document.querySelector("body").style.backgroundColor = "#6DB9EF";
            document.querySelector(".card").style.backgroundColor = "white";
            document.querySelector(".error .error_message").style.color = "black";
            document.querySelector(".error p").style.color = "black";
        }
        else{
            document.querySelector(".error").style.display = "block";
            document.querySelector(".weather").style.display = "none";
            document.querySelector("body").style.backgroundColor = "#252525";
            document.querySelector(".card").style.backgroundColor = "#393053";
            document.querySelector(".error .error_message").style.color = "#FCE666ff";
            document.querySelector(".error p").style.color = "#FCE666ff";
        }
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
        document.querySelector(".windSpeed").innerHTML = data.wind.speed + " m/s";
        document.querySelector(".date").innerHTML = date.toLocaleDateString('en-uk', options);
        document.querySelector(".time").innerHTML = date.getHours().toString().padStart(2, '0')
                                                    + ":" + date.getMinutes().toString().padStart(2, '0')
                                                    + ":" +date.getSeconds().toString().padStart(2, '0');
    
        if(data.weather[0].main == "Clouds"){
            if(date.getHours()>=6 && date.getHours() < 18)
            {
                weatherImg.src = "Media/cloudy.png";
                document.querySelector("body").style.backgroundColor = "#6DB9EF";
                document.querySelector(".card").style.backgroundColor = "white";
                document.querySelector(".weather h1").style.color = "black";
                document.querySelector(".weather h2").style.color = "black";
                document.querySelector(".weather .date_time .date").style.color = "black";
                document.querySelector(".weather .date_time .time").style.color = "black";
                document.querySelector(".weather .details .col_1 .humidity").style.color = "black";
                document.querySelector(".weather .details .col_1 .humidityText").style.color = "black";
                document.querySelector(".weather .details .col_2 .windSpeed").style.color = "black";
                document.querySelector(".weather .details .col_2 .windText").style.color = "black";
            }
            else{
                weatherImg.src = "Media/cloud.png";
                document.querySelector("body").style.backgroundColor = "#252525";
                document.querySelector(".card").style.backgroundColor = "#393053";
                document.querySelector(".weather h1").style.color = "#FCE666ff";
                document.querySelector(".weather h2").style.color = "#FCE666ff";
                document.querySelector(".weather .date_time .date").style.color = "#FCE666ff";
                document.querySelector(".weather .date_time .time").style.color = "#FCE666ff";
                document.querySelector(".weather .details .col_1 .humidity").style.color = "#FCE666ff";
                document.querySelector(".weather .details .col_1 .humidityText").style.color = "#FCE666ff";
                document.querySelector(".weather .details .col_2 .windSpeed").style.color = "#FCE666ff";
                document.querySelector(".weather .details .col_2 .windText").style.color = "#FCE666ff";
            }  
        }
        else if(data.weather[0].main == "Clear"){
            if(date.getHours()>=6 && date.getHours() < 18)
            {
                weatherImg.src = "Media/sun.png";
                document.querySelector("body").style.backgroundColor = "#6DB9EF";
                document.querySelector(".card").style.backgroundColor = "white";
                document.querySelector(".weather h1").style.color = "black";
                document.querySelector(".weather h2").style.color = "black";
                document.querySelector(".weather .date_time .date").style.color = "black";
                document.querySelector(".weather .date_time .time").style.color = "black";
                document.querySelector(".weather .details .col_1 .humidity").style.color = "black";
                document.querySelector(".weather .details .col_1 .humidityText").style.color = "black";
                document.querySelector(".weather .details .col_2 .windSpeed").style.color = "black";
                document.querySelector(".weather .details .col_2 .windText").style.color = "black";
            }
            else{
                weatherImg.src = "Media/moon.png";
                document.querySelector("body").style.backgroundColor = "#252525";
                document.querySelector(".card").style.backgroundColor = "#393053";
                document.querySelector(".weather h1").style.color = "#FCE666ff";
                document.querySelector(".weather h2").style.color = "#FCE666ff";
                document.querySelector(".weather .date_time .date").style.color = "#FCE666ff";
                document.querySelector(".weather .date_time .time").style.color = "#FCE666ff";
                document.querySelector(".weather .details .col_1 .humidity").style.color = "#FCE666ff";
                document.querySelector(".weather .details .col_1 .humidityText").style.color = "#FCE666ff";
                document.querySelector(".weather .details .col_2 .windSpeed").style.color = "#FCE666ff";
                document.querySelector(".weather .details .col_2 .windText").style.color = "#FCE666ff";
            }  
        }
        else if(data.weather[0].main == "Rain"){
            if(date.getHours()>=6 && date.getHours() < 18)
            {
                weatherImg.src = "Media/rainy-day.png";
                document.querySelector("body").style.backgroundColor = "#6DB9EF";
                document.querySelector(".card").style.backgroundColor = "white";
                document.querySelector(".weather h1").style.color = "black";
                document.querySelector(".weather h2").style.color = "black";
                document.querySelector(".weather .date_time .date").style.color = "black";
                document.querySelector(".weather .date_time .time").style.color = "black";
                document.querySelector(".weather .details .col_1 .humidity").style.color = "black";
                document.querySelector(".weather .details .col_1 .humidityText").style.color = "black";
                document.querySelector(".weather .details .col_2 .windSpeed").style.color = "black";
                document.querySelector(".weather .details .col_2 .windText").style.color = "black";
            }
            else{
                weatherImg.src = "Media/rainy-night.png";
                document.querySelector("body").style.backgroundColor = "#252525";
                document.querySelector(".card").style.backgroundColor = "#393053";
                document.querySelector(".weather h1").style.color = "#FCE666ff";
                document.querySelector(".weather h2").style.color = "#FCE666ff";
                document.querySelector(".weather .date_time .date").style.color = "#FCE666ff";
                document.querySelector(".weather .date_time .time").style.color = "#FCE666ff";
                document.querySelector(".weather .details .col_1 .humidity").style.color = "#FCE666ff";
                document.querySelector(".weather .details .col_1 .humidityText").style.color = "#FCE666ff";
                document.querySelector(".weather .details .col_2 .windSpeed").style.color = "#FCE666ff";
                document.querySelector(".weather .details .col_2 .windText").style.color = "#FCE666ff";
            } 
            
        }
        else if(data.weather[0].main == "Drizzle"){
            if(date.getHours()>=6 && date.getHours() < 18)
            {
                weatherImg.src = "Media/rainy-day.png";
                document.querySelector("body").style.backgroundColor = "#6DB9EF";
                document.querySelector(".card").style.backgroundColor = "white";
                document.querySelector(".weather h1").style.color = "black";
                document.querySelector(".weather h2").style.color = "black";
                document.querySelector(".weather .date_time .date").style.color = "black";
                document.querySelector(".weather .date_time .time").style.color = "black";
                document.querySelector(".weather .details .col_1 .humidity").style.color = "black";
                document.querySelector(".weather .details .col_1 .humidityText").style.color = "black";
                document.querySelector(".weather .details .col_2 .windSpeed").style.color = "black";
                document.querySelector(".weather .details .col_2 .windText").style.color = "black";
            }
            else{
                weatherImg.src = "Media/rainy-night.png";
                document.querySelector("body").style.backgroundColor = "#252525";
                document.querySelector(".card").style.backgroundColor = "#393053";
                document.querySelector(".weather h1").style.color = "#FCE666ff";
                document.querySelector(".weather h2").style.color = "#FCE666ff";
                document.querySelector(".weather .date_time .date").style.color = "#FCE666ff";
                document.querySelector(".weather .date_time .time").style.color = "#FCE666ff";
                document.querySelector(".weather .details .col_1 .humidity").style.color = "#FCE666ff";
                document.querySelector(".weather .details .col_1 .humidityText").style.color = "#FCE666ff";
                document.querySelector(".weather .details .col_2 .windSpeed").style.color = "#FCE666ff";
                document.querySelector(".weather .details .col_2 .windText").style.color = "#FCE666ff";
            } 
        }
        else if(data.weather[0].main == "Mist"){
            if(date.getHours()>=6 && date.getHours() < 18)
            {
                weatherImg.src = "Media/mistM.png";
                document.querySelector("body").style.backgroundColor = "#6DB9EF";
                document.querySelector(".card").style.backgroundColor = "white";
                document.querySelector(".weather h1").style.color = "black";
                document.querySelector(".weather h2").style.color = "black";
                document.querySelector(".weather .date_time .date").style.color = "black";
                document.querySelector(".weather .date_time .time").style.color = "black";
                document.querySelector(".weather .details .col_1 .humidity").style.color = "black";
                document.querySelector(".weather .details .col_1 .humidityText").style.color = "black";
                document.querySelector(".weather .details .col_2 .windSpeed").style.color = "black";
                document.querySelector(".weather .details .col_2 .windText").style.color = "black";
            }
            else{
                weatherImg.src = "Media/mistN.png";
                document.querySelector("body").style.backgroundColor = "#252525";
                document.querySelector(".card").style.backgroundColor = "#393053";
                document.querySelector(".weather h1").style.color = "#FCE666ff";
                document.querySelector(".weather h2").style.color = "#FCE666ff";
                document.querySelector(".weather .date_time .date").style.color = "#FCE666ff";
                document.querySelector(".weather .date_time .time").style.color = "#FCE666ff";
                document.querySelector(".weather .details .col_1 .humidity").style.color = "#FCE666ff";
                document.querySelector(".weather .details .col_1 .humidityText").style.color = "#FCE666ff";
                document.querySelector(".weather .details .col_2 .windSpeed").style.color = "#FCE666ff";
                document.querySelector(".weather .details .col_2 .windText").style.color = "#FCE666ff";
            } 
        }
        else if (data.weather[0].main == "Snow"){
            if(date.getHours()>=6 && date.getHours() < 18)
            {
                weatherImg.src = "Media/snowy.png";
            }
            else{
                weatherImg.src = "Media/snowy.png";
                document.querySelector("body").style.backgroundColor = "#252525";
                document.querySelector(".card").style.backgroundColor = "#393053";
                document.querySelector(".weather h1").style.color = "#FCE666ff";
                document.querySelector(".weather h2").style.color = "#FCE666ff";
                document.querySelector(".weather .date_time .date").style.color = "#FCE666ff";
                document.querySelector(".weather .date_time .time").style.color = "#FCE666ff";
                document.querySelector(".weather .details .col_1 .humidity").style.color = "#FCE666ff";
                document.querySelector(".weather .details .col_1 .humidityText").style.color = "#FCE666ff";
                document.querySelector(".weather .details .col_2 .windSpeed").style.color = "#FCE666ff";
                document.querySelector(".weather .details .col_2 .windText").style.color = "#FCE666ff";
            } 
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
