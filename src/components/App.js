
import React, { Component } from 'react';
import '../styles/App.css';
import Searchbox from './Searchbox';
import Featuredloc from './Featuredloc';
import { NavLink, Link } from 'react-router-dom';

// import GoogleMap from './googlemap.js';
const trailAPI = '76b8cb5f85aa3aea5703c33b6ebb90b6040d6008a514da965c5e3e4ad5b83380'


class App extends Component {
     constructor(props){
          super(props)
     }
  render() {
    return (
      <div className="App">
        <div style={{"padding-top":"100px"}} className="App-header">

          <h2>Trail It Easy!</h2>
        </div>
        <div className="App-intro">
          <Link to='/TrailList' className="btn btn-warning btn-lg">Find your dream trail NOW!</Link>
          <Featuredloc />
        </div>
{this.props.children}
      </div>
    );
  }
}

export default App;
