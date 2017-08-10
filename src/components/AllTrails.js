import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../styles/App.css';


class AllTrails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
console.log(this.props)
console.log(trails)

    let trails = this.props.trails;
    let list = trails.map((trail) => {

      return (

        <div className="col-md-5" key={trail.unique_id}>
          <h3>{trail.name}</h3>
          <p>{trail.city}, {trail.state}</p>
          <Link to={`/TrailList/${trail.unique_id}`} className="btn btn-info">More Info</Link>
        </div>
      )
    })
      return (
        <div className="card-deck">
          {list}
        </div>
    )
  }
}
    export default AllTrails;
