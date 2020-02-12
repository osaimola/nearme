import React from "react";
import { POI } from "../POI/POI";
import Weather from "../Weather/Weather";
import "./SearchResults.css";

export class SearchResults extends React.Component {
  renderWeather() {
    if (this.props.weatherForecast.hasOwnProperty("condition")) {
      return <Weather weatherForecast={this.props.weatherForecast} />;
    }
    return "";
  }

  renderPOI() {
    return this.props.searchResults.map(result => {
      return <POI key={"poi_" + result.id} result={result} />;
    });
  }

  render() {
    return (
      <div className="productlistarea">
        {this.renderWeather()}
        {this.renderPOI()}
      </div>
    );
  }
}
