let key="f75b1ef8b030e49bb9bb4325ecaa05e0";
let lon="15";
let lat="32";
let url = 'https://api.openweathermap.org/data/2.5/weather?units=metric&appid='+key+'&q='
// let url="https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid="+key+"&units=metric";
const searchInput = document.getElementById('search-input');
const searchbox = document.querySelector('.btn');

searchbox.addEventListener('click',()=>{
    getWeather(searchInput.value);
    joursMeteo(searchInput.value);
 })

 function getWeather (city){ 
fetch(url + city)
.then(response => response.json())
.then(data => {
    console.log(data);
    const temp=document.getElementById("temp");
    temp.innerHTML= data.main.temp+"c°";
    const city=document.getElementById("city") ;
    city.innerHTML= data.name;
    const description=document.getElementById("description");
    description.innerHTML=data.weather[0].description;
    const reem=document.getElementById("img");
    reem.src="https://openweathermap.org/img/wn/"+data.weather[0].icon+ "@2x.png"
    const humidity=document.getElementById("humidity");
    humidity.innerHTML= data.main.humidity;
    const Vent=document.getElementById("Vent");
    Vent.innerHTML=data.wind.speed;

}); 
 }

function joursMeteo(city){
// FIRST DAY WEATHER:
let urlaall ="https://api.openweathermap.org/data/2.5/forecast?units=metric&appid="+key+"&q="
// let urlaall="https://api.openweathermap.org/data/2.5/forecast?lat="+lat+"&lon="+lon+"&appid="+key+"&units=metric";
fetch(urlaall + city)
.then(response => response.json())
.then(data => {
    console.log(data);
    const temp=document.getElementById("temp-day1");
    temp.innerHTML= data.list[6].main.temp+"c°";
    city.innerHTML= data.name;
    const description=document.getElementById("description-day1");
    description.innerHTML=data.list[6].weather[0].description;
    const reem=document.getElementById("img1");
    reem.src="https://openweathermap.org/img/wn/"+data.list[6].weather[0].icon +"@2x.png"

});  
//second day weather:
let urlall ="https://api.openweathermap.org/data/2.5/forecast?units=metric&appid="+key+"&q="
//let urlall="https://api.openweathermap.org/data/2.5/forecast?lat="+lat+"&lon="+lon+"&appid="+key+"&units=metric";
fetch(urlall+city)
.then(response => response.json())
.then(data => {
    console.log(data);
    const temp=document.getElementById("temp-day2");
    temp.innerHTML= data.list[14].main.temp+"c°";
    city.innerHTML= data.name;
    const description=document.getElementById("description-day2");
    description.innerHTML=data.list[14].weather[0].description;
    const reem=document.getElementById("img2");
    reem.src="https://openweathermap.org/img/wn/"+data.list[14].weather[0].icon +"@2x.png"

});   
//weather on the third day
let urlaaLll ="https://api.openweathermap.org/data/2.5/forecast?units=metric&appid="+key+"&q="
//let urlalllL="https://api.openweathermap.org/data/2.5/forecast?lat="+lat+"&lon="+lon+"&appid="+key+"&units=metric";
fetch(urlall+city)
.then(response => response.json())
.then(data => {
    console.log(data);
    const temp=document.getElementById("temp-day3");
    temp.innerHTML= data.list[22].main.temp+"c°";
    city.innerHTML= data.name;
    const description=document.getElementById("description-day3");
    description.innerHTML=data.list[22].weather[0].description;
    const reem=document.getElementById("img3");
    reem.src="https://openweathermap.org/img/wn/"+data.list[22].weather[0].icon+ "@2x.png"

}); 

//weather on the fourth day

let urlaLl ="https://api.openweathermap.org/data/2.5/forecast?units=metric&appid="+key+"&q="
//let urlalL="https://api.openweathermap.org/data/2.5/forecast?lat="+lat+"&lon="+lon+"&appid="+key+"&units=metric";
fetch(urlall+city)
.then(response => response.json())
.then(data => {
    console.log(data);
    const temp=document.getElementById("temp-day4");
    temp.innerHTML= data.list[30].main.temp+"c°";
    city.innerHTML= data.name;
    const description=document.getElementById("description-day4");
    description.innerHTML=data.list[30].weather[0].description;
    const reem=document.getElementById("img4");
    reem.src="https://openweathermap.org/img/wn/"+data.list[30].weather[0].icon+ "@2x.png"

});   
//weather on the fifth  day
let urlaAll ="https://api.openweathermap.org/data/2.5/forecast?units=metric&appid="+key+"&q="
//let urlaAlL="https://api.openweathermap.org/data/2.5/forecast?lat="+lat+"&lon="+lon+"&appid="+key+"&units=metric";
fetch(urlall+city)
.then(response => response.json())
.then(data => {
    console.log(data);
    const temp=document.getElementById("temp-day5");
    temp.innerHTML= data.list[38].main.temp+"c°";
    city.innerHTML= data.name;
    const description=document.getElementById("description-day5");
    description.innerHTML=data.list[38].weather[0].description;
    const reem=document.getElementById("img5");
    reem.src="https://openweathermap.org/img/wn/"+data.list[38].weather[0].icon+ "@2x.png"
}); 
 } 


