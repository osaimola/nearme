import React from "react";
import "./POI.css";

export class POI extends React.Component {
  // this handles displaying if the business is open/closed or we dont have that info
  isOpen(decider) {
    if (decider) {
      if (decider === "unknown") {
        return <span className="unknown">Unknown</span>;
      }
      return <span className="open">Open</span>;
    } else {
      return <span>Closed</span>;
    }
  }

  render() {
    let poi = this.props.result;
    let hoursChecker = poi.opening_hours
      ? poi.opening_hours.open_now
      : "unknown";
    let photoId = poi.photos ? poi.photos[0].photo_reference : false;
    let photoURL = photoId
      ? `url(https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoId}&key=AIzaSyDoF9cMmMxTRvRVS61KE1GXTIaIqY6-M68)`
      : "";

    return (
      <div>
        <a className="card">
          <div
            className="thumb"
            style={{
              backgroundImage: photoURL
            }}
          ></div>
          <article>
            <h1>{poi.name}</h1>
            {poi.formatted_address}
            <br />
            {this.isOpen(hoursChecker)}
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
