import React from 'react';
import './SearchBar.css';

export class SearchBar extends React.Component {
  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-fields">
          <input type="text" placeholder="What are you looking for?" className="field"/>
          <input type="text" placeholder="Where?" className="field" style={{width:30+"%"}}/>
        </div>
        <div className="SearchBar-submit">
          <a href="">Find</a>
        </div>
      </div>
    );
  }
}