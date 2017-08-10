import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/App.css';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import {BrowserRouter, Route, Switch, NavLink} from 'react-router-dom';
import TrailList from './components/TrailsList';
import Detail from './components/Detail';
import Contact from './components/Contact';


ReactDOM.render(
  <BrowserRouter>

  <div>
    <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                 <ul className="navbar-header">
                   <li><NavLink activeClassName="selected" className="nav-link" to="/">Home</NavLink></li>
                   <li><NavLink activeClassName="selected" className="nav-link" exact to="/TrailList">Find your trail</NavLink></li>
                   <li><NavLink activeClassName="selected" className="nav-link" to="/contact">Contact Us</NavLink></li>
                 </ul>
          </div>
       </nav>

   <Switch>
      <Route exact path="/" component={App}/>
      <Route path="/TrailList" component={TrailList}/>
      <Route path="/TrailList/:id" component={Detail}/>
      <Route path="/Contact" component={Contact}/>


    </Switch>

 </div>
</BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
