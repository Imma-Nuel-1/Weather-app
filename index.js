document.getElementById("search-button").addEventListener("click", function () {
  const city = document.getElementById("city-input").value;
  const apiKey = "dc7ded95c96e4d2bd74075a6519f3ba7";
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // Check if the response contains weather data
      if (data && data.weather && data.main && data.sys) {
        const country = data.sys.country || "Unknown";
        document.getElementById("weather-result").innerHTML = `
                    <h2>${data.name}, ${country}</h2>
                    <p>Temperature: ${data.main.temp} °C</p>
                    <p>Description: ${data.weather[0].description}</p>
                    <p>Humidity: ${data.main.humidity}%</p>
                    <p>Wind Speed: ${data.wind.speed} m/s</p>
                `;
      } else {
        document.getElementById("weather-result").innerHTML = `
                    <p>Unable to retrieve weather data. Please try again.</p>
                `;
      }
    })
    .catch((error) => {
      document.getElementById("weather-result").innerHTML = `
                <p>There was an error retrieving the weather data. Please try again later.</p>
            `;
      console.error("Error:", error);
    });
});
