import React, { useState } from "react";
import "./App.css";
import Grid from "@material-ui/core/Grid";
import Navbar from "./components/Navbar";
import Inputform from "./components/InputForm";
import WeatherWidget from "./components/WeatherWidget";
const axios = require("axios");

function App() {
  const [data, setData] = useState({
    name: "Enter Location",
    temp: "None",
    icon: "13d",
    lat:"0.0",
    lon:'0.0'
  });
  let openweathermap_API_KEY = "5305e66d631b9da248c2112c5f48c600";

  const GetWeatherData = (location) => {
    if (location.length !== 0) {
      axios
        .get(
          `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${openweathermap_API_KEY}`
        )
        .then(function (response) {
          setData({
            name: response.data.name,
            temp: response.data.main.temp,
            icon: response.data.weather[0].icon,
            lat: response.data.coord.lat,
            lon: response.data.coord.lon,
          });
        });
    }
  };

  return (
    <div className="App">
      <Navbar />
      <Grid
        className="weather-grid"
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Grid item container>
          <Grid item xs={false} sm={3} />
          <Grid item xs={12} sm={6}>
            <Inputform GetWeatherData={GetWeatherData} />
          </Grid>
        </Grid>
        <Grid item container className="weater-card">
          <Grid item xs={false} sm={3} />
          <Grid item xs={12} sm={6}>
            <WeatherWidget data={data} />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;

// https://www.amdoren.com/api/timezone.php?api_key=EytASqiB2gvTuYRWg4cqhjCPkBzUne&loc=bangalore
// EytASqiB2gvTuYRWg4cqhjCPkBzUne
