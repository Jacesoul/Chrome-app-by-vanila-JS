
const weather=document.querySelector(".js-weather"); 
const api_key="8750384a62056486435d6e4b923d8dd0";
const coords='coords';

function getWeather(lat,lon){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`).then(function(response){
        return response.json();
    }).then(function(json){
        const temperature=json.main.temp;
        const place =json.name;
        weather.innerHTML=`${temperature} @ ${place}`;
    })
}

function saveCoords(coordsObj){
    localStorage.setItem(coords,JSON.stringify(coordsObj))
}

function handleGeoSuccess(position){
    const latitude=position.coords.latitude;
    const longitude=position.coords.longitude;
    const coordsObj={
        latitude,
        longitude 
    };
    saveCoords(coordsObj);
    getWeather(latitude,longitude)
}

function handleGeoError(){
    console.log('Cant access geo location');
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess,handleGeoError)
}


function loadCoords(){
    const loadedCords=localStorage.getItem(coords);
    if(loadedCords===null){
        askForCoords();

    }else{
        const parseCoords=JSON.parse(loadedCords);
        getWeather(parseCoords.latitude,parseCoords.longitude);
    }
}





function init(){
    loadCoords();
}
init();