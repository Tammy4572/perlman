import React, {Component} from 'react';

class Featuredloc extends Component {
  render() {
    return (

   <div className="featured">


     <h1>Featured Locations</h1>


     <div className="sc">
        <div className="row header text-center">
          <div className="col-md-12">
            <h1>South Carolina</h1>
            <p className="lead">A simple sub-heading.</p>
            <a className="btn btn-large btn-primary" href="/TrailList">Learn more</a>
          </div>
        </div>
      </div>

       <div className="nc">
          <div className="row header text-center">
            <div className="col-md-12">
              <h1>North Carolina</h1>
              <p className="lead">A simple sub-heading.</p>
              <a className="btn btn-large btn-primary" href="/TrailList">Learn more</a>
            </div>
          </div>
        </div>

       <div className="ca">
          <div className="row header text-center">
            <div className="col-md-12">
              <h1>California</h1>
              <p className="lead">A simple sub-heading.</p>
              <a className="btn btn-large btn-primary" href="/TrailList">Learn more</a>
            </div>
          </div>
        </div>

       <div className="az">
          <div className="row header text-center">
            <div className="col-md-12">
              <h1>Arizona</h1>
              <p className="lead">A simple sub-heading.</p>
              <a className="btn btn-large btn-primary" href="/TrailList">Learn more</a>
            </div>
          </div>
        </div>

       <div className="ak">
          <div className="row header text-center">
            <div className="col-md-12">
              <h1>Alaska</h1>
              <p className="lead">A simple sub-heading.</p>
              <a className="btn btn-large btn-primary" href="/TrailList">Learn more</a>
            </div>
          </div>
        </div>

     </div>

   );
  }
}

export default Featuredloc;
