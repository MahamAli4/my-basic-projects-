const weatherAPI = {
    key: "aadebec34255752dbafb69c44cb3d551",
    baseURL: "https://api.openweathermap.org/data/2.5/weather"
}

const searchInputBox = document.getElementById('inputBox');
searchInputBox.addEventListener("keypress", (event) => {
    if (event.keyCode == 13) {
        getWeatherReport(searchInputBox.value);
        document.querySelector('.weatherBody').style.display = "block";
    }
});

function getWeatherReport(city) {
    fetch(`${weatherAPI.baseURL}?q=${city}&appid=${weatherAPI.key}&units=metric`)
        .then(weather => {
            return weather.json();
        }).then(showWeatherReport)
        .catch(error => console.log("Error: ", error));
}

function showWeatherReport(weather) {
    console.log(weather)

    const city = document.getElementById('city');
    city.innerHTML = `${weather.name}, ${weather.sys.country}`

    const temp = document.getElementById('temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}&deg;C`

    const minmax = document.getElementById('min-max');
    minmax.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;C (min) / ${Math.floor(weather.main.temp_max)}&deg;C (max)`;

    const weatherType = document.getElementById('weather');
    weatherType.innerHTML = `${weather.weather[0].main}`

    const date = document.getElementById('date');
    let todayDate = new Date();
    date.innerHTML = dateManage(todayDate)

    const bgVideo = document.getElementById('bgVideo');
    const weatherIcon = document.getElementById('weatherIcon');

    const iconCode = weather.weather[0].icon;
    weatherIcon.src = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;

    let weatherCondition = weatherType.textContent;
    let videoPath = './videos/clear.mp4';

    if (weatherCondition == "Clear") {
        videoPath = "./videos/clear.mp4";
    } else if (weatherCondition == "Clouds") {
        videoPath = "./videos/clouds.mp4";
    } else if (weatherCondition == "Haze") {
        videoPath = "./videos/haze.mp4";
    } else if (weatherCondition == "Rain") {
        videoPath = "./videos/rain.mp4";
    } else if (weatherCondition == "Snow") {
        videoPath = "./videos/snow.mp4";
    } else if (weatherCondition == "Thunderstorm") {
        videoPath = "./videos/thunderstorm.mp4";
    }

    // Smooth transition
    bgVideo.classList.add('fade-out');
    setTimeout(() => {
        bgVideo.src = videoPath;
        bgVideo.load();
        bgVideo.play();
        bgVideo.classList.remove('fade-out');
    }, 500);
}

function dateManage(dateArg) {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let year = dateArg.getFullYear();
    let month = months[dateArg.getMonth()];
    let date = dateArg.getDate();
    let day = days[dateArg.getDay()];

    return `${date} ${month} (${day}), ${year}`;
}
