import { Keys } from "./keys";

const apiKey = Keys.placesAPIKey;
const weatherAPIKey = Keys.openweatherAPIKey;

export const places = {
  search(term, location) {
    let searchTerm;
    term && location
      ? (searchTerm = term + " " + location)
      : (searchTerm = term);
    let cors = "https://cors-anywhere.herokuapp.com/";
    let url = `${cors}https://maps.googleapis.com/maps/api/place/textsearch/json?query=${searchTerm}&key=${apiKey}`;

    return fetch(url)
      .then(response => response.json())
      .then(jsonResponse => {
        return jsonResponse.results;
      });
  },

  getForcast(location) {
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${weatherAPIKey}`;

    return fetch(url)
      .then(response => {
        return response.json();
      })
      .then(jsonResponse => {
        return jsonResponse.hasOwnProperty["main"]
          ? {
              temperature: jsonResponse.main.temp,
              feel: jsonResponse.main.feels_like,
              condition: jsonResponse.weather[0].main,
              description: jsonResponse.weather[0].description,
              icon: jsonResponse.weather[0].icon
            }
          : { error: jsonResponse.message };
      });
  }
};
