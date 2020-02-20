import React, { Component } from "react";
import "./Weather.css";

class Weather extends Component {
  generateIcon(icon) {
    //return `url(http://openweathermap.org/img/wn/${icon}.png)`;
    return `https://openweathermap.org/img/wn/${icon}.png`;
  }

  generateForecast(forecast) {
    return `Expect ${forecast.description} and temperatures of ${Math.round(
      forecast.temperature - 273
    )}°C with a ${Math.round(forecast.feel - 273)}°C real feel`;
  }

  render() {
    return (
      <div className="featured-item">
        <div className="weathercard">
          <div className="icon">
            <img
              src={this.generateIcon(this.props.weatherForecast.icon)}
              className="iconimg"
              alt=""
            />
          </div>

          <h1>{this.generateForecast(this.props.weatherForecast)}</h1>
        </div>
      </div>
    );
  }
}

export default Weather;
