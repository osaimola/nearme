import React from 'react';
import './App.css';
import {SearchResults} from "./Components/SearchResults/SearchResults";
import {SearchBar} from "./Components/SearchBar/SearchBar";
import {here} from "./util/here";

const poi = {name: "West Edmonton Mall",
  id: "123hghjd",
  address: "8882 170 St NW<br/>Edmonton, AB T5T",
  hours: "Mon-Sat: 10:00 - 21:00<br/>Sun: 11:00 - 18:00",
  isOpen:true
};
//const pois = [poi, poi, poi, poi, poi, poi];

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
    here.search(term, location).then( image => {console.log(image)});
    //here.search(term, location).then(pois => this.setState({poiList: pois}));
    console.log(term + " " + location);
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
