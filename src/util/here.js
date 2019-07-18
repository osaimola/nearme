import {Keys} from './keys';

const appId = Keys.appId;
const appCode = Keys.appCode;
const locationiqKey =Keys.locationiqKey;
const pixabayKey = Keys.pixabayKey;
let geo;

export const here = {
  /* takes a location string & queries here api to return a dict with the coordinates */
  geocode(location) {
    let encodedLocation = encodeURI(location);
    const geocodeURL = `https://us1.locationiq.com/v1/search.php?key=${locationiqKey}&q=${encodedLocation}&format=json`;

    return fetch(geocodeURL).then(response => {return response.json()}).then(responseJson => {
      return responseJson.Response.View[0].Result[0].Location.DisplayPosition;
    });
  },

  /* search here maps for a list of pois */
  search(term, location) {
    let encodedTerm = encodeURI(term);
    let encodedLocation = encodeURI(location);
    const geocodeURL = `https://us1.locationiq.com/v1/search.php?key=${locationiqKey}&q=${encodedLocation}&format=json`;


    /// fails due to cors issue.
    return fetch(geocodeURL).then(
      response => {return response.json()}).then(
      responseJson => {return responseJson[0]}).then(
          coordinates => {

            const url = `https://places.cit.api.here.com/places/v1/discover/search?app_id=${appId}&app_code=${appCode}&at=${coordinates.lat+"%2C"+coordinates.lon}&q=${encodedTerm}&pretty`;
            const method = 'GET';
            const data = {"url": url, "method":method};
            return fetch("http://localhost:8000/cors/", {
                method: 'post',
                body: JSON.stringify(data)})}).then(response => {
                return response.json()}).then( responseJson => {
                  if (responseJson.results.items) {

                    return responseJson.results.items.map( poi => ({
                      id: poi.id,
                      name: poi.title,
                      address: poi.vicinity,
                      category: poi.category.title,
                      //hours: poi.openingHours.text,
                      //isOpen: poi.openingHours.isOpen
          }));
        }
      });


  },

  /* search pixabay for a stock image. use the poi category eg shopping mall, hospital, etc. returns json with link */
  getImage(term) {
    let encodedTerm = encodeURI(term);
    return fetch(`https://pixabay.com/api/?key=${pixabayKey}&q=${encodedTerm}&image_type=photo`).then(
      response => {return response.json()}).then( responseJson => {
        if (responseJson.hits > 0) {
          return responseJson.hits[Math.floor(Math.random() * responseJson.length)]
        } else {return}
    });
  },

  /* searchh here maps for a map image. returns <img > with jpeg when f=1 _ Broken No Key*/
  getMapImage(location) {
    let encodedLocation = encodeURI(location);
    const geocodeURL = `https://us1.locationiq.com/v1/search.php?key=${locationiqKey}&q=${encodedLocation}&format=json`;
console.log(geocodeURL);
    //fails due to cors error
    return fetch(geocodeURL).then(
      response => {return response.json()}).then(
      responseJson => {
        return responseJson[0];}).then(
      coordinates => {
      geo = coordinates.lat + "%2C" + coordinates.lon;

      return fetch(`https://image.maps.api.here.com/mia/1.6/mapview?c=${geo}&z=14&w=300&h=300&f=1&app_id=${appId}&app_code=${appCode}`);
    });

  }


};
