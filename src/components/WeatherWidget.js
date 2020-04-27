import React, { useState } from "react";
import "./components.css";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import { Grid } from "@material-ui/core";
import moment from "moment";
const axios = require("axios");

function WeatherWidget({ data }) {
  const [img, setImage] = useState("https://i.imgur.com/q2zmhtO.jpg");
  let imgUrls = [
    "https://i.imgur.com/7BLyIB4.jpg",
    "https://i.imgur.com/aOU86LY.jpg",
    "https://i.imgur.com/io0TDwY.jpg",
    "https://i.imgur.com/IDFWhWU.jpg",
    "https://i.imgur.com/q2zmhtO.jpg",
  ]; //morning,night,sundown,sunup,default
  if(data.lat && data.lon !=0){
    axios
    .get(
      `http://api.timezonedb.com/v2.1/get-time-zone?key=BQPH9NJ1P8S8&format=json&by=position&lat=${data.lat}&lng=${data.lon}`
    )
    .then(function (response) {
      var theDate = new Date(response.data.timestamp * 1000).getUTCHours();
      if (theDate >= 4 && theDate < 6) {
        setImage(imgUrls[3]);
      } else if (theDate >= 6 && theDate < 17) {
        setImage(imgUrls[0]);
      } else if (theDate >= 17 && theDate < 19) {
        setImage(imgUrls[2]);
      } else if (theDate >= 19 || theDate < 4) {
        setImage(imgUrls[1]);
      } 
    });
  }


  var date = moment().utcOffset("+05:30").format("MMM. D, YYYY");

  const getTempCel = (dataa) => {
    let temp = dataa - 273.15;
    temp = temp < 0 ? 0 : temp;
    return temp.toFixed(0);
  };

  const weatherimage = (dataa) =>
    `http://openweathermap.org/img/wn/${dataa}@2x.png`;

  return (
    <div>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="180"
            image={img}
            title="Contemplative Reptile"
          />
        </CardActionArea>
        <div className="card-content">
          <CardHeader ml={0} title={data.name} subheader={data.name!== "Enter Location" ? date:" "} />
          <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="center"
          >
            <Grid item>
              <h1>{getTempCel(data.temp)}°C</h1>
            </Grid>
            <Grid item>
              <img src={weatherimage(data.icon)} alt="icon comes here"></img>
            </Grid>
          </Grid>
        </div>
      </Card>
    </div>
  );
}

export default WeatherWidget;
