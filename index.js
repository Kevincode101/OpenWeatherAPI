$(document).ready(function() {
    $("button").on("click", function() {
        var city = $("input").val();
        var url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=a93580daf65b6f1b144702914000f134";
        console.log(url);
        $.get(url, function(data) {

        });
    });
});
