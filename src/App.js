import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './Components/Home';
import Colleges from './Components/Colleges';
import College from './Components/College';
import Charts from './Components/Charts';
import Favourites from './Components/Favourites';

class App extends Component {

  render() {
    return (
       <Router>
           <div className="App">
            <Switch>
              <Route exact path='/' component={Home}></Route>
              <Route exact path='/colleges' component={Colleges}></Route>
              <Route exact path='/charts' component={Charts}></Route>
              <Route exact path='/college' component={College}></Route>
              <Route exact path='/favourites' component={Favourites}></Route>
            </Switch>
          </div>
       </Router>
   );
  }
}


  
export default App;