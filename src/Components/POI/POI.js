import React from 'react';
import './POI.css'

export class POI extends React.Component {
  isOpen(decider) {
    if (decider) {
      return <span className="open">Open</span>;
    } else {
      return <span >Closed</span>
    }
  }

  render() {
    // {this.isOpen(this.props.isOpen)}
    //{this.props.hours}
    return (
      <div>
        <a className="card">
          <div className="thumb" style={{backgroundImage: "url(https://media-cdn.tripadvisor.com/media/photo-s/04/7a/26/22/west-edmonton-mall.jpg)"}}></div>
          <article>
            <h1>{this.props.name}</h1>
            {this.props.address}
            <br/>


          </article>
        </a>
      </div>
    );
  }

}
