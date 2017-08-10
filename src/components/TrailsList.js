import React, {Component} from 'react';
import { Link, Switch, Route, BrowserRouter } from 'react-router-dom';
import '../styles/App.css';

import AllTrails from './AllTrails';
import Detail from './Detail';
import Searchbox from './Searchbox';



class TrailsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      places: []
    };
  }
  fetchTrails = (data) => {
    let city = data.city;
    let state = data.state;
    let country = data.country;
    let radius = parseInt(data.radius);
    let url = `https://trailapi-trailapi.p.mashape.com/?limit=50&q[activities_activity_type_name_eq]=hiking&q[city_cont]=${city}&q[country_cont]=${country}&q[state_cont]=${state}&radius=${radius}`;
    // var url = `https://trailapi-trailapi.p.mashape.com/?limit=25&q[activities_activity_type_name_eq]=hiking&q[city_cont]=Los+Angeles&radius=25`;
    // axios.get(imageUrl).then(serverResponse => {
    //     this.setState({ places: serverResponse.data.photos })
         let headers = {
                 "method": "GET",
                 "Content-Type": "application/json",
                 "X-Mashape-Key": "E0wgmylcqimshyyMbitb6pMfqkNBp1HfFVNjsn3a6Agqh3YVFP",
                 "credentials": "include"
         }
        fetch(url, {headers}).then((res) => {
          console.log(res)
          return res.json();
        }).then((resData) => {
          // console.log(data)
          this.setState({places: resData.places, fireRedirect: true})
          console.log('now?',this.state.places)

        });
  }
  componentDidMount() {
  }

  render() {

    return (
      <div>
        <Searchbox fetchTrails={this.fetchTrails} />
        <BrowserRouter>
          <Switch>
            <Route exact path="/TrailList" render={() => (<AllTrails trails={this.state.places}/>)} />
            <Route exact path="/TrailList/:id" render={(props) => (<Detail {...props} trails={this.state.places}/>)} />
          </Switch>
        </BrowserRouter>

      </div>



    );
  }
}

export default TrailsList;
