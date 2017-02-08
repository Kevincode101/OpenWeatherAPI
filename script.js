$(document).ready(function() {
    $("button").on("click", function() {
        var city = $("input").val();
        var url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=a93580daf65b6f1b144702914000f134";
        // console.log(url);
        $.getJSON(url, function(data) {
            var city_Name = data.name;
            var temp = data.main.temp;
            var speed = data.wind.speed;
            var result = " city : " + city_Name + " Temp: " + temp + " wind speed: " + speed;
            $("#result").html(result);
            var lon = data.coord.lon;
            var lat = data.coord.lat;
            console.log(lon);
            console.log(lat);
            var map_url = "https://api.mapbox.com/v4/mapbox.dark/" + lon + "," + lat + ",10/600x600.png?access_token=pk.eyJ1IjoiZG9kZ2VyNDg3IiwiYSI6ImNpeXcxY2xraDAwZHUyd21wam00NWc5NXIifQ.VNP3UdlAUjSJVz3_FrBkEQ";
            var map = "<img src='" + map_url + "'>";
            $("#map").html(map);

        });
    });
});
