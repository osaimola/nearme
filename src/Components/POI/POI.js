import React from 'react';
import './POI.css'

export class POI extends React.Component {
  // this handles displaying if the business is open/closed or we dont have that info
  isOpen(decider) {
    if (decider) {
      if (decider === "Unknown") {
        return <span className="unknown">Unknown</span>;
      }
      return <span className="open">Open</span>;
    } else {
      return <span >Closed</span>
    }
  }

  render() {
    return (
      <div>
        <a className="card">
          <div className="thumb" style={{backgroundImage: "url(https://media-cdn.tripadvisor.com/media/photo-s/04/7a/26/22/west-edmonton-mall.jpg)"}}></div>
          <article>
            <h1>{this.props.name}</h1>
            {this.props.address}
            <br/>
            {this.props.hours}
            {this.isOpen(this.props.isOpen)}
          </article>
        </a>
      </div>
    );
  }

}

// set default values for the POI Component props.
POI.defaultProps = {
  isOpen: "Unknown",
  hours: "No business hours information available."
};
