var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {

    if (this.readyState == 4 && this.status ==200){// da gui len hoan thanh va nhan dc kq la done
        // console.log(xhttp.responseText);
        var currentWeather = JSON.parse(xhttp.responseText);
        console.log(currentWeather);

        var ulobj = document.getElementById("weather");
        var dateAndTime = "";
        for (var i=0; i<currentWeather.list.length;i++){
            var dt =   currentWeather.list[i].dt_txt  ;
            dateAndTime += dt;
        }
        ulobj.innerText = dateAndTime;

        var ulobj = document.getElementById("nhietDo")
        var newTemp = 0;
        for (var j=0;j<currentWeather.list.length;j++){
            var t = currentWeather.list[j].main;
            var nd = t.temp;
            newTemp += nd;
        }
        ulobj.innerText = newTemp;
    }
};
xhttp.open("GET", "https://api.openweathermap.org/data/2.5/forecast?q=Hanoi,vietnam&appid=09a71427c59d38d6a34f89b47d75975c&units=metric", true);
xhttp.send();