import React, { Component } from 'react';


const MrKatLogo = ({width, marginRight, ...leftOver}) => {
  return (
    <a href="/"> 
      <img className="title-logo" style={{width: width, borderRadius: 20, marginRight: marginRight ? marginRight : 0 ,  overflow: "hidden", borderWidth: 3, borderColor: "red"}}  src={require("./../images/band-pics/mr-kat-logo.jpg")}/>
    </a>
  )
}

export default MrKatLogo;