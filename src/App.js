import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Error from './pages/Error.jsx';
import ThemeSwitcher from './pages/ThemeSwitcher';
import ProfileCard from './components/ProfileCard';
import CarouselOverlay from './components/CarouselOverlay';
import Portfolio from './pages/Portfolio';
import Timeline from './components/Timeline';
// import TimelineVertical from './components/TimelineVertical';
import Carousel2Column from './components/Carousel2Column';
import ThirdsCol from './components/ThirdsCol';
import ColumnBs from './components/ColumnBs';
import ColumnCarousel from './components/ColumnCarousel';
import TimelineHorizontal from './components/TimelineHorizontal';
// import TimelineVertical2 from './components/TimelineVertical2';
import TimelineVertical2 from './components/TimelineVertical2';
import BootstrapSite from './components/bs_site/BootstrapSite';
import HalfCol from './components/HalfCol';
import CarouselOverlayGeneral from './components/CarouselOverlayGeneral';
import { MrKatTimeline } from './components/ForFunTimeline';
import { BandOnlyPage } from './pages/BandOnlyPage';

import Album from './pages/material-ui-examples/Album';
import Pricing from './pages/material-ui-examples/Pricing';
import Blog from './pages/material-ui-examples/blog/Blog'
import BandHomePage from './pages/BandHomePage';

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
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          {/* <Route exact path="/" component={Portfolio}/> */}
          {/* LIVE */}
          {/* <Route exact path="/mr-kat" render={(props) => <Portfolio {...props} id="first" data={data}/>}/> */}
          {/* <Route exact path="/portfolio-web" render={(props) => <Portfolio {...props} id="first" data={data}/>}/> */}
          <Route exact path="/" 
            render={(props) => 
              <BandOnlyPage
                bgColor={data.colors.purple2}
                cardColor={data.colors.white}
              />  
            }
          />
          <Route exact path="/new" render={(prop) => <BandHomePage/>}/>
          <Route exact path="/album" render={(prop) => <Album></Album>}/>
          <Route exact path="/pricing" render={(prop) => <Pricing></Pricing>}/>
          <Route exact path="/blog" render={(prop) => <Blog></Blog>}/>
          <Route exact path="/old" 
            render={(props) => 
              <BandOnlyPage
                bgColor={data.colors.purple2}
                cardColor={data.colors.white}
              />  
            }
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
