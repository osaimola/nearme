import React from 'react';
import {POI} from '../POI/POI';
import './SearchResults.css'

export class SearchResults extends React.Component {
  render() {
    const pois = this.props.searchResults.map(result => {
      return <POI key={"poi_" + result.id}
                  name={result.name}
                  address={result.address}
                  hours={result.hours ? result.hours : undefined}
                  isOpen={result.hasOwnProperty('isOpen') ? result.isOpen : undefined}
      />
    });

    return (
      <div className="productlistarea">
        {pois}
      </div>
    );
  }
}
