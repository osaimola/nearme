import { Keys } from "./keys";

const apiKey = Keys.placesAPIKey;
const weatherAPIKey = Keys.openweatherAPIKey;
let cors = "https://cors-anywhere.herokuapp.com/";

export const places = {
  search(term, location) {
    let searchTerm;
    term && location
      ? (searchTerm = term + " " + location)
      : (searchTerm = term);
    let url = `${cors}https://pumbar0ym5.execute-api.us-east-1.amazonaws.com/default/React_Middle_Man`;

    return fetch(url, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ term: searchTerm, service: "places" })
    })
      .then(response => response.json())
      .then(jsonResponse => {
        return jsonResponse.results;
      });
  },

  getForcast(location) {
    let url = `${cors}https://pumbar0ym5.execute-api.us-east-1.amazonaws.com/default/React_Middle_Man`;

    return fetch(url, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ place: location, service: "weather" })
    })
      .then(response => {
        return response.json();
      })
      .then(jsonResponse => {
        console.log(jsonResponse);
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
