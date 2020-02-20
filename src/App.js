import React from "react";
import { SearchResults } from "./Components/SearchResults/SearchResults";
import { SearchBar } from "./Components/SearchBar/SearchBar";
import { here } from "./util/here";
import { places } from "./util/places";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mapImage: "",
      poiList: [],
      weather: {}
    };
    this.search = this.search.bind(this);
  }

  search(term, location) {
    //here.mapImageSearch( location).then( image => {console.log(image)});
    //here.search(term, location).then(pois =>
    //console.log(pois));
    //this.setState({poiList: pois}));
    // get list of pois and get a small map image

    /*places
      .search(term, location)
      .then(pois => this.setState({ poiList: pois }));*/

    places
      .getForcast(location)
      .then(weather => this.setState({ weather: weather }));
  }
  render() {
    return (
      <div>
        <SearchBar onSearch={this.search} />
        <SearchResults
          searchResults={this.state.poiList}
          weatherForecast={this.state.weather}
        />
      </div>
    );
  }
}

export default App;
