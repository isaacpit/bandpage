import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Album from './pages/material-ui-examples/Album';
import Pricing from './pages/material-ui-examples/Pricing';
import Blog from './pages/material-ui-examples/blog/Blog'
import BandHomePage from './pages/BandHomePage';
import Error from './pages/Error';

// import Data from './../constants/data';


const data = { 
  colors: {
    blue: "#d7ecfe",
    anotherBlue: "#e5edff",
    yellow: "#FFFDBC",
    red: "#ffd6da",
    purple:  "#d6deff",
    purple2: "#dde3ff",
    purple3: "#e4e9ff",
    purple4: "#ebeeff",
    anotherPurple: "#dff6f4",
    brown: "#F2DFD7",
    pink: "#FEF9FF",
    white: "#ffffff",
    blueAccent: "#ACC7CC",
    yellowAccent: "#FFF696",
    purpleAccent:  "#C1D1FF",
    brownAccent: "#FFCDBA",
    pinkAccent: "#EED3FF",
    whiteAccent: "#eee",
    grey: "#555",
  }
}
  

class App extends Component {
  constructor(props) {
    super(props);
    console.log("PUBLIC_URL=", process.env.PUBLIC_URL);
  }
  
  render() {
    
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" render={(prop) => <BandHomePage/>}/>
          <Route exact path="/new" render={(prop) => <BandHomePage/>}/>
          <Route exact path="/album" render={(prop) => <Album></Album>}/>
          <Route exact path="/pricing" render={(prop) => <Pricing></Pricing>}/>
          <Route exact path="/blog" render={(prop) => <Blog></Blog>}/>
          <Route path='*' render={(props) => <Error />}/>
          {/* <Route exact path="/old" 
            render={(props) => 
              <BandOnlyPage
                bgColor={data.colors.purple2}
                cardColor={data.colors.white}
              />  
            }
          /> */}
        </Switch>
      </Router>
    );
  }
}

export default App;
