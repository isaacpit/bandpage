import React, { Component } from 'react';

let MrKatLogo;

export default MrKatLogo = ({width, marginRight, ...leftOver}) => {
  return (<img className="title-logo" style={{width: width, borderRadius: 20, marginRight: marginRight ? marginRight : 0 ,  overflow: "hidden", borderWidth: 3, borderColor: "red"}}  src={require("./../images/lifePics/mr-kat-logo.jpg")}></img>)
}