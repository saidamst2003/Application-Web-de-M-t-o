let key="f75b1ef8b030e49bb9bb4325ecaa05e0";
let lon="15";
let lat="32";
let url="https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid="+key+"&units=metric";

fetch(url)
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


});   
// FIRST DAY WEATHER:
let urlaall="https://api.openweathermap.org/data/2.5/forecast?lat="+lat+"&lon="+lon+"&appid="+key+"&units=metric";
fetch(urlaall)
.then(response => response.json())
.then(data => {
    console.log(data);
    const temp=document.getElementById("temp-day1");
    temp.innerHTML= data.list[6].main.temp+"c°";
    const city=document.getElementById("city-day1") ;
    city.innerHTML= data.name;
    const description=document.getElementById("description-day1");
    description.innerHTML=data.list[6].weather[0].description;
    const reem=document.getElementById("img1");
    reem.src="https://openweathermap.org/img/wn/"+data.list[6].weather[0].icon +"@2x.png"

});  
//second day weather:
let urlall="https://api.openweathermap.org/data/2.5/forecast?lat="+lat+"&lon="+lon+"&appid="+key+"&units=metric";
fetch(urlall)
.then(response => response.json())
.then(data => {
    console.log(data);
    const temp=document.getElementById("temp-day2");
    temp.innerHTML= data.list[14].main.temp+"c°";
    const city=document.getElementById("city-day2") ;
    city.innerHTML= data.name;
    const description=document.getElementById("description-day2");
    description.innerHTML=data.list[14].weather[0].description;
    const reem=document.getElementById("img2");
    reem.src="https://openweathermap.org/img/wn/"+data.list[14].weather[0].icon +"@2x.png"

});   
//weather on the third day
let urlalllL="https://api.openweathermap.org/data/2.5/forecast?lat="+lat+"&lon="+lon+"&appid="+key+"&units=metric";
fetch(urlall)
.then(response => response.json())
.then(data => {
    console.log(data);
    const temp=document.getElementById("temp-day3");
    temp.innerHTML= data.list[22].main.temp+"c°";
    const city=document.getElementById("city-day3") ;
    city.innerHTML= data.name;
    const description=document.getElementById("description-day3");
    description.innerHTML=data.list[22].weather[0].description;
    const reem=document.getElementById("img3");
    reem.src="https://openweathermap.org/img/wn/"+data.list[22].weather[0].icon+ "@2x.png"

}); 

//weather on the fourth day


let urlalL="https://api.openweathermap.org/data/2.5/forecast?lat="+lat+"&lon="+lon+"&appid="+key+"&units=metric";
fetch(urlall)
.then(response => response.json())
.then(data => {
    console.log(data);
    const temp=document.getElementById("temp-day4");
    temp.innerHTML= data.list[30].main.temp+"c°";
    const city=document.getElementById("city-day4") ;
    city.innerHTML= data.name;
    const description=document.getElementById("description-day4");
    description.innerHTML=data.list[30].weather[0].description;
    const reem=document.getElementById("img4");
    reem.src="https://openweathermap.org/img/wn/"+data.list[30].weather[0].icon+ "@2x.png"

});   
//weather on the fifth  day

let urlaAlL="https://api.openweathermap.org/data/2.5/forecast?lat="+lat+"&lon="+lon+"&appid="+key+"&units=metric";
fetch(urlall)
.then(response => response.json())
.then(data => {
    console.log(data);
    const temp=document.getElementById("temp-day5");
    temp.innerHTML= data.list[38].main.temp+"c°";
    const city=document.getElementById("city-day5") ;
    city.innerHTML= data.name;
    const description=document.getElementById("description-day5");
    description.innerHTML=data.list[38].weather[0].description;
    const reem=document.getElementById("img5");
    reem.src="https://openweathermap.org/img/wn/"+data.list[38].weather[0].icon+ "@2x.png"
});   


