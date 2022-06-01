 // function loadingWeather() {
    // lay duoc du lieu tu api
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
// console.log("change state: "+ this.readyState);
        if (this.readyState == 4 && this.status ==200){// da gui len hoan thanh va nhan dc kq la done
            // console.log(xhttp.responseText);
            var currentWeather = JSON.parse(xhttp.responseText);
            console.log(currentWeather);


            var address = document.getElementById("diaChi");
            address.innerText = currentWeather.name;

            var newTemp = document.getElementById("nhietDo");
            newTemp.innerText = currentWeather.main.temp;

            var newHump = document.getElementById("doAm");
            newHump.innerText = currentWeather.main.humidity;

            var newWind = document.getElementById("sucGio");
            newWind.innerText = currentWeather.wind.speed;

            var newTrangThai = document.getElementById("trangThai");
            // newTrangThai.innerText = currentWeather.weather[0].description;
            for(var i=0;i<currentWeather.weather.length; i++){
                newTrangThai.innerText = currentWeather.weather[i].description;
            }
        }
    };
    xhttp.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=Hanoi,vietnam&appid=09a71427c59d38d6a34f89b47d75975c&units=metric", true);
    xhttp.send();
// }
// loadingWeather();




