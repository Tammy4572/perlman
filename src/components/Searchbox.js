import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { Redirect } from 'react-router'
import AllTrails from './AllTrails';


class Searchbox extends Component {
  constructor(props) {
        super(props)

        this.state = {
            city: "",
            state: "",
            country: "",
            radius: ""

        }
        this.submitSearch = this.submitSearch.bind(this);
    }

    handleCity = (e) => {
        e.preventDefault();
        this.setState({ city: e.target.value });
    }

    handleState = (e) => {
        e.preventDefault();
        this.setState({ state: e.target.value });
    }
    handleCountry = (e) => {
        e.preventDefault();
        this.setState({ country: e.target.value });
    }

    handleRadius = (e) => {
        e.preventDefault();
        this.setState({ radius: e.target.value });
    }

  // componentDidMount() {
    submitSearch(event) {
        event.preventDefault();
      //   if(this.state.state != null)
      //   return
      //   state = '&q[country_cont]='this.state.state
      //
      //   if (this.state.state == undefined) {
      //     state = '';
      //   '&q[country_cont]='this.state.state
      // };  let state = '&q[country_cont]='this.state.state
      this.props.fetchTrails(this.state)
    }

  render() {
    // console.log(this.props.location)
    //
    // const { from } = this.props.location.state || '/'
    console.log('now in render?',this.state.places)

    return (
      <div>
      <form className='form-inline' onSubmit={this.submitSearch}>
        <div className="form-group">

        <input type="text" className="form-control mb-2 mr-sm-2 mb-sm-0" id="city" placeholder="Enter a City" onChange={this.handleCity} value={this.state.value} />

        <select className="form-control mb-2 mr-sm-2 mb-sm-0" onChange={this.handleState} id="state" name="state" value={this.state.value}>
            <option value="">Select a State</option>
            <option value="AK">Alaska</option>
            <option value="AL">Alabama</option>
            <option value="AR">Arkansas</option>
            <option value="AZ">Arizona</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DC">District of Columbia</option>
            <option value="DE">Delaware</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="HI">Hawaii</option>
            <option value="IA">Iowa</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="MA">Massachusetts</option>
            <option value="MD">Maryland</option>
            <option value="ME">Maine</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MO">Missouri</option>
            <option value="MS">Mississippi</option>
            <option value="MT">Montana</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="NE">Nebraska</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NV">Nevada</option>
            <option value="NY">New York</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="PR">Puerto Rico</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VA">Virginia</option>
            <option value="VT">Vermont</option>
            <option value="WA">Washington</option>
            <option value="WI">Wisconsin</option>
            <option value="WV">West Virginia</option>
            <option value="WY">Wyoming</option>
        </select>
        <input type="text" className="form-control mb-2 mr-sm-2 mb-sm-0" id="country" placeholder="Enter a Country" onChange={this.handleCountry} value={this.state.value} />

        <select className="form-control mb-2 mr-sm-2 mb-sm-0" id="radius" name="radius" onChange={this.handleRadius} value={this.state.value}>

              <option value="">Select Radius</option>
              <option value="25">25 Miles</option>
              <option value="50">50 Miles</option>
              <option value="100">100 Miles</option>
            </select>
                <button type="submit">search</button>
              </div>
          </form>

</div>
   );
  }

}

export default Searchbox;
