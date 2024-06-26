const apiKey = "";
const apiurl = "";

const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")

const weatherIcon = document.querySelector(".weather-icon")

    async function checkWeather(city){

        const response = await fetch(apiurl + city + `&appid=${apiKey}`);

        
        var data = await response.json();
     


        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp )  + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";



        if(response.status == 404){
            document.querySelector(".error").style.display = "block"
            document.querySelector(".weather").style.display = "none"
             
        }
        else{
            if(data.weather[0].main == "clouds"){
                weatherIcon.src = "images/cloud.png"
    
            }
            else if(data.weather[0].main == "Clear"){
                weatherIcon.src = "images/sun.png"
    
    
            }
            else if(data.weather[0].main == "Rain"){
                weatherIcon.src = "images/rain.png"
    
    
            }
            else if(data.weather[0].main == "Drizzle"){
                weatherIcon.src = "images/sunny.png"
    
    
            }
            else if(data.weather[0].main == "Mist"){
                weatherIcon.src = "images/sun (1).png"
            }
    
            document.querySelector(".weather").style.display = "block" ;
            document.querySelector(".error").style.display = "none"

        }




       
    }




searchBtn.addEventListener("click", ()=>
{
    checkWeather(searchBox.value)
})
  

    
