import React, { Component } from 'react';

class SearchBar extends Component{
  constructor(props){
      super(props);
      this.state ={ term : ' '};
  }
  render(){
    return (
      <div className="search-bar">
          <label htmlFor="search-bar">Search:&nbsp;</label>
          <input 
            value={this.state.term}
            onChange = {event => this.onInputChange(event.target.value)}
            type="search"
            id="search-bar"
            name="search"
            required>
          </input>
      </div>
    );
  }

  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
