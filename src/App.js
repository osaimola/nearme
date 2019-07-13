import React from 'react';
import './App.css';
import {SearchResults} from "./Components/SearchResults/SearchResults";
import {SearchBar} from "./Components/SearchBar/SearchBar";

const poi = {name: "West Edmonton Mall",
  address: "8882 170 St NW<br/>Edmonton, AB T5T",
  hours: "Mon-Sat: 10:00 - 21:00<br/>Sun: 11:00 - 18:00",
  isOpen:true
};
const pois = [poi, poi, poi, poi, poi, poi];

function App() {
  return (
    <div>
      <SearchBar />
      <SearchResults searchResults={pois}/>
    </div>
  );
}

export default App;
