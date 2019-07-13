import Keys from './keys';

const appId = Keys.appId;
const appCode = Keys.appCode;
let geo;

const mapImageURL = `https://image.maps.api.here.com/mia/1.6/mapview
?c=${centreLatLong}&z=14&w=${width}&h=${height}&f=1&app_id=${appId}&app_code=${appCode}`;

const here = {
  geocode(location) {
    const geocodeURL = `https://geocoder.cit.api.here.com/6.2/geocode.json
?searchtext=${location}&app_id=${appId}&app_code=${appCode}&gen=8`;

    return fetch(geocodeURL).then(response => {return response.json()}).then(responseJson => {
      return responseJson.Response.View[0].Result[0].Location.DisplayPosition /*.(Latitude/Longitude)*/
    });
  },

  search(term, location) {
    here.geocode(location).then( coordinates => {
      geo = coordinates.Latitude + "%2C" + coordinates.Longitude;

      return fetch(`https://places.cit.api.here.com/places/v1/discover/search
?app_id=${appId}&app_code=${appCode}&at=${geo}&q=${term}&pretty`).then(response => {return response.json()});
    });
  },

  getImage(){}


};