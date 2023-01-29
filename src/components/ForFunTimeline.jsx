import React, { Component } from 'react';
import Constants from './constants/constant';
import './ForFunTimeline.css';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const Intro = (props) => {
  return (
    <div className="w3-margin-bottom">
      <div className="w3-card w3-padding-16	 d-flex flex-column align-items-center justify-content-center	" style={{backgroundColor: props.cardColor}}>
        <img className="title-logo" src={Constants.img.img_aud}></img>
        <h3 className="title">After Hours</h3>
        <p className="description">
          In my spare time I enjoy playing basketball, jamming with friends (I play the guitar), and lifting weights. I recently formed a band with some close friends and have some demos to share. We are also scheduled for our first show in September 2022. I also recently achieved a major goal basketball of getting a solid dunk thanks to strength training.
        </p>
        
      </div> 
    </div>
  );
}

export const MrKatTimeline = ({bgColor, cardColor,caption, children}) => {
  const classes = useStyles();

  return (
      <div className="w3-margin-bottom">
        <div className="w3-card w3-padding-16	 d-flex flex-column align-items-center justify-content-center	" style={{backgroundColor: cardColor}}>
          <img className="title-logo" src={require("./../images/lifePics/mr-kat-logo.jpg")}></img>
          <h3 className="title">Mr. Kat Band</h3>
          {caption && 
            <p className="description">
              {caption}
            </p>
            
          }
          {children}

          
          <div className="container">
          <h3>BCS 101 Show - Dec 9th, 2022</h3>

          <div className="row justify-content-around">
            <CaptionVid src={require("./../images/lifePics/12-09-22-mr-kat-show/sandbox-love.mp4")} caption="sandbox love"/>
            <CaptionVid src={require("./../images/lifePics/12-09-22-mr-kat-show/hrsb.mp4")} caption="hsrb x beach goons"/>
            <CaptionVid src={require("./../images/lifePics/12-09-22-mr-kat-show/bastard.mp4")} caption="bastard"/>
            <CaptionVid src={require("./../images/lifePics/12-09-22-mr-kat-show/ccr.mp4")} caption="cream cheese rangoon"/>
            <CaptionVid src={require("./../images/lifePics/12-09-22-mr-kat-show/crowd.mov")} caption="pre-show"/>
            <CaptionVid src={require("./../images/lifePics/12-09-22-mr-kat-show/teeth.mp4")} caption="teeth"/>

            <CaptionImg src={require("./../images/lifePics/12-09-22-mr-kat-show/cover.jpeg")} caption="101 sign"/>
            <CaptionImg src={require("./../images/lifePics/12-09-22-mr-kat-show/i-k-1.JPG")} caption="isaac"/>
            <CaptionImg src={require("./../images/lifePics/12-09-22-mr-kat-show/k-v-j-1.JPG")} caption="isaac"/>
            <CaptionImg src={require("./../images/lifePics/12-09-22-mr-kat-show/v-2.JPG")} caption="isaac"/>
            <CaptionImg src={require("./../images/lifePics/12-09-22-mr-kat-show/i-1.JPG")} caption="isaac"/>
            <CaptionImg src={require("./../images/lifePics/12-09-22-mr-kat-show/j-1.JPG")} caption="isaac"/>
            <CaptionImg src={require("./../images/lifePics/12-09-22-mr-kat-show/k-1.JPG")} caption="isaac"/>
            <CaptionImg src={require("./../images/lifePics/12-09-22-mr-kat-show/i-k-v-1.JPG")} caption="isaac"/>
            <CaptionImg src={require("./../images/lifePics/12-09-22-mr-kat-show/v-k-1.JPG")} caption="isaac"/>
            <CaptionImg src={require("./../images/lifePics/12-09-22-mr-kat-show/i-3.JPG")} caption="isaac"/>            
            <CaptionImg src={require("./../images/lifePics/12-09-22-mr-kat-show/j-2.JPG")} caption="isaac"/>
            <CaptionImg src={require("./../images/lifePics/12-09-22-mr-kat-show/i-k-3.JPG")} caption="isaac"/>
            <CaptionImg src={require("./../images/lifePics/12-09-22-mr-kat-show/i-2.JPG")} caption="isaac"/>
            <CaptionImg src={require("./../images/lifePics/12-09-22-mr-kat-show/j-3.JPG")} caption="isaac"/>
            <CaptionImg src={require("./../images/lifePics/12-09-22-mr-kat-show/j-k-1.JPG")} caption="isaac"/>
            
          </div>

            <h3>BCS 101 Show - Sept 30th, 2022</h3>

            <div className="row justify-content-around">
              <CaptionVid src={require("./../images/lifePics/mr-kat-debut/bastard-end.mp4")} caption="bastard"/>
              <CaptionVid src={require("./../images/lifePics/mr-kat-debut/bastard-mosh.mp4")} caption="bastard - mosh"/>
              <CaptionVid src={require("./../images/lifePics/mr-kat-debut/wcc.mp4")} caption="working class clown"/>
              <CaptionVid src={require("./../images/lifePics/mr-kat-debut/redrum.mp4")} caption="redrum"/>
              <CaptionVid src={require("./../images/lifePics/mr-kat-debut/u-mean-it.mp4")} caption="u mean it"/>

              <CaptionImg src={require("./../images/lifePics/mr-kat-debut/mr-kat-at-101.jpeg")} caption="Mr. Kat @ 101"/>
              <CaptionImg src={require("./../images/lifePics/mr-kat-debut/sydney-climbing.jpeg")} caption="risk it for the biscuit"/>
            </div>

            <h3>
              Demos
            </h3>
            <div className="row justify-content-around">
              <CaptionVid src={require("./../images/lifePics/vids/teeth-demo-short.mov")} caption="teeth [demo]"/>
              <CaptionVid src={require("./../images/lifePics/vids/cream-cheese-rangoon-demo-short.mov")} caption="creem cheese rangoon [demo]"/>
              <CaptionVid src={require("./../images/lifePics/vids/redruM.mov")} caption="redrum [demo]"/>
              <CaptionVid src={require("./../images/lifePics/vids/bastard.mov")} caption="bastard [demo]"/>
              <CaptionVid src={require("./../images/lifePics/vids/u-mean-it.mov")} caption="u mean it [demo]"/>
              
            </div>
          </div>
          <div className="container">
            <h3>
              Extras
            </h3>
            <div className="row justify-content-around">
              <CaptionVid src={require("./../images/lifePics/vids/i cant win - double.mp4")} caption="i cant win x the strokes"/>
              <CaptionVid src={require("./../images/lifePics/vids/teeth-solo.mov")} caption="teeth remote jam sesh"/>
              <CaptionVid src={require("./../images/lifePics/vids/teeth.mov")} caption="teeth duet w/ Kat"/>
              <CaptionImg src={require("./../images/lifePics/mr-kat-sticker.jpg")} caption="Mr. Kat sticker"/>
              <CaptionImg src={require("./../images/lifePics/sticker-laptop.jpg")} caption="sticker's home"/>
            </div>
          </div>
        </div> 
      </div>
    );
}

class BasketballTimeline extends Component {
  constructor() {
    super();
  }

  render() {
    const {
      cardColor,
      bgColor
    } = this.props;

    return (
      <div className="w3-margin-bottom">
        <div className="w3-card w3-padding-16 d-flex flex-column align-items-center justify-content-center	" style={{backgroundColor: cardColor}}>
          <img width="100px" height="100px" src={"https://img.icons8.com/doodle/200/000000/basketball.png"} alt="basketball"/>
          <h3 className="title">Basketball</h3>
          <p className="description">
            Finally figured out how to dunk in basketball nicely recently. It'd been a long time coming considering how long I've played.
          </p>
          <div className="container">
            <div className="row justify-content-around">
              <CaptionVid src={require("./../images/lifePics/vids/dunk1.mov")} caption="dunk #1"/>
              <CaptionVid src={require("./../images/lifePics/vids/dunk2.mov")} caption="dunk #2"/>
              <CaptionVid src={require("./../images/lifePics/vids/dunk3.mov")} caption="dunk #3"/>
            </div>
          </div>
        </div> 
      </div>
    )
  }
}

class FriendsTimeline extends Component {
  constructor(props) {
    console.log("FriendsTimeline: ", props);
    super(props);
  }

  render() {
    const {
      cardColor,
      bgColor
    } = this.props;

    return (
      <div className="w3-margin-bottom">
        <div className="w3-card w3-padding-16	 d-flex flex-column align-items-center justify-content-center	" style={{backgroundColor: cardColor}}>
          <img width="100px" height="100px" src={"https://img.icons8.com/bubbles/200/000000/camera.png"} alt="camera"/>
          <h3 className="title">Various pictures</h3>
          <p className="description">
            Here's some photos with friends and my fiance, Audrey.
          </p>
          <div className="container">
            <div className="row justify-content-around">
              
              <CaptionImg src={require("./../images/lifePics/aud.jpeg")} caption="picnic with Audrey"></CaptionImg>
              <CaptionImg src={require("./../images/lifePics/aud2.jpeg")} caption="another pic with Audrey"></CaptionImg>
              <CaptionImg src={require("./../images/lifePics/me.jpeg")} caption="at practice zoning out"></CaptionImg>
              <CaptionImg src={require("./../images/lifePics/band-pic.JPG")} caption="Mr. Kat band practice "></CaptionImg>
              <CaptionImg src={require("./../images/lifePics/paris.jpeg")} caption="in front of Paris hotel in Vegas"></CaptionImg>
              <CaptionImg src={require("./../images/lifePics/friends-eating.jpg")} caption="restaurant with friends"></CaptionImg>
              <CaptionImg src={require("./../images/lifePics/portrait.jpeg")} caption="large portraits @ paris hotel"></CaptionImg>
              <CaptionImg src={require("./../images/lifePics/extendo.jpeg")} caption="funny panorama"></CaptionImg>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

class CaptionImg extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="column caption-img-container">
        <img className="for-fun-pics" src={this.props.src}></img> 
        <h4 className="caption">{this.props.caption}</h4>
      </div>
    )
  }
}

class CaptionVid extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="column caption-vid-container">
        <video width="400" controls src={this.props.src} type="video/mp4"/>
        <h4 className="caption">{this.props.caption}</h4>
      </div>
    )
  }
}

export default class ForFunTimeline extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div id={this.props.id} style={{backgroundColor: this.props.bgColor}}>
        <div id="for-fun-header" style={{backgroundColor: "white"}} className="d-flex justify-content-center">
          <h3 id="titleFunExperience">For Fun</h3>
        </div>
        
        <div className="container d-flex" >
          <div className="w3-row-padding  w3-center w3-margin-top ">
            <Intro
              cardColor={this.props.cardColor}
            />

            <MrKatTimeline
              caption="Disclaimer: Some of the songs have some swearing and suggestive content. Nothing too outlandish."
              bgColor={this.props.bgColor}
              cardColor={this.props.cardColor}
            />

            <BasketballTimeline 
              bgColor={this.props.bgColor} 
              cardColor={this.props.cardColor}
            />
            
            <FriendsTimeline 
              bgColor={this.props.bgColor}
              cardColor={this.props.cardColor}
            />
              
          </div>
        </div>
      </div>
    )
  }
}