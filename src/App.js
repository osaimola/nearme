import React from 'react';
import './App.css';
import {SearchResults} from "./Components/SearchResults/SearchResults";
import {SearchBar} from "./Components/SearchBar/SearchBar";
import {here} from "./util/here";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mapImage: "",
      poiList: []
    };
    this.search = this.search.bind(this);
  }

  search(term, location) {
    //here.mapImageSearch( location).then( image => {console.log(image)});
    here.search(term, location).then(pois =>
     //console.log(pois));
    this.setState({poiList: pois}));
    // get list of pois and get a small map image
  }
  render() {
    return (
      <div>
        <SearchBar onSearch={this.search}/>
        <SearchResults searchResults={this.state.poiList}/>
      </div>
  );
  }
}

export default App;
