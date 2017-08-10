import React, {Component} from 'react';
import Map from './Map';
import '../styles/App.css';


class Detail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var trail = this.props.trails.find((singleTrail) => {
      console.log(singleTrail.unique_id)
      return singleTrail.unique_id === parseInt(this.props.match.params.id)
    });

    if(this.props.trails.length < 1) {
      return (
          <div className="progress col-md-3">loading
            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: '75%'}}></div>
  </div>
      )
    }
    return (
      <div>
        <h1>{trail.name}</h1>
        <p style={{color: "white"}}>Trail length: {trail.activities.length} mile(s)</p>

        <p style={{color: "white"}}>About this trail: {trail.description}</p>
        <p style={{color: "white"}}>Directions: {trail.directions}</p>

        <p style={{color: "white"}}>Find out more about this location: <a href={trail.activities[0].url}>click here</a></p>

        <p style={{color: "white"}}>Check out where this trail starts on the map below:</p>

        <Map
               center={{lat:trail.lat,lng:trail.lon}}
               zoom={16}
               containerElement={<div style={{ height: `500px`, width: `500px` }} />}
               mapElement={<div style={{ height: `500px`, width: `500px` }} />}
          />
        </div>
    );
  }
}
export default Detail;
