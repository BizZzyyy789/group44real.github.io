    
 var temp=document.getElementById('temp');
 var cityName=document.getElementById('city')
 var humidity=document.getElementById('humidity')
 var windspeed=document.getElementById('windspeed')
 var searchinput=document.getElementById('searchinput');
 var serchbox=document.getElementById('serchbox')
 var body_img=document.getElementById('body_img');
 var body_data=document.getElementById('body_data')
 var deatil=document.getElementById('deatil')
 var error=document.getElementById('error')
    async function checkWeather(province) {
    let Upi_key='f27b269d54e4fa1e72993364a80fa8bd'
    let repsponse= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${province}&appid=${Upi_key}&units=metric`);
    let data= await repsponse.json();
    temp.innerHTML=Math.floor(data.main.temp )+'°C';
    cityName.innerHTML=data.name;
    humidity.innerHTML=data.main.humidity +"%";
    windspeed.innerHTML=data.wind.speed+'km/h';
    console.log(data)    
    if (data.weather[0].main=="Clouds") {
        body_img.src='pngwing.com - 2023-06-29T182240.302';
    }
     else if (data.weather[0].main=='Clear') {
        body_img.src='pngwing.com - 2023-06-29T182551.484';
    }
    else if (data.weather[0].main=='Rain') {
        body_img.src='pngwing.com - 2023-06-29T182617.158';
    }
    else if (data.weather[0].main=='Drizzle') {
        body_img.src='pngwing.com - 2023-06-29T182733.907';
    }
    else if (data.weather[0].main=='Mist') {
        body_img.src='pngwing.com - 2023-06-29T182810.711';
    }
    else if (data.weather[0].main=='Haze') {
        body_img.src='pngwing.com - 2023-06-29T182830.506';
    }
     body_data.style.display='flex';
     deatil.style.display='flex';
     }
      serchbox.addEventListener('click',()=>
      {
          let province = searchinput.value;
          checkWeather(province);
         
      })