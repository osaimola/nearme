import React from 'react';
import {POI} from '../POI/POI';
import './SearchResults.css'

export class SearchResults extends React.Component {
  render() {
    const pois = this.props.searchResults.map(result => {
      return <POI name={result.name} address={result.address} hours={result.hours} isOpen={result.isOpen}/>
    });

    return (
      <div className="productlistarea">
        {pois}
      </div>
    );
  }
}
