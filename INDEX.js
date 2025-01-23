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

let urlall="https://api.openweathermap.org/data/2.5/forecast?lat="+lat+"&lon="+lon+"&appid="+key+"&units=metric";



fetch(urlall)
.then(response => response.json())
.then(data => {
    console.log(data);
    // const temp=document.getElementById("temp");
    // temp.innerHTML= data.main.temp+"c°";
    // const city=document.getElementById("city") ;
    // city.innerHTML= data.name;
    // const description=document.getElementById("description");
    // description.innerHTML=data.weather[0].description;
    // const reem=document.getElementById("img");
    // reem.src="https://openweathermap.org/img/wn/"+data.weather[0].icon+ "@2x.png"


});   




