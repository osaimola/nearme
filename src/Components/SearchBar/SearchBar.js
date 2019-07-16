import React from 'react';
import './SearchBar.css';

export class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      location: ""
    };
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.onSearch(this.state.term, this.state.location);
  }

  handleTermChange(e) {
    this.setState({term: e.target.value});
  }

  handleLocationChange(e) {
    this.setState({location: e.target.value});
  }

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-fields">
          <input placeholder="What are you looking for?" className="field"  onChange={this.handleTermChange}/>
          <input placeholder="Where?" className="field" style={{width:30+"%"}}  onChange={this.handleLocationChange}/>
        </div>
        <div className="SearchBar-submit">
          <a onClick={this.handleClick}>Find</a>
        </div>
      </div>
    );
  }
}
