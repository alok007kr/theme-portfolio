import React from 'react'
import './Services.css';
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card.js"
import Resume from './Resume.pdf';
const Services = () => {
  return (
    <div className="services" id="Services">
        <div className="awesome">
            <span>My Awesome</span>
            <span>Services</span>
            <span>
                Lorem ispum is simply dummy text of printing of printing Lorem
                <br />
                Lorem ispum is simply dummy text of printing
            </span>
           <a href={Resume} download>
              <button className="button s-button">Download CV</button>
           </a>
            <div className="blur s-blur1" style={{background: "#ABF1FF94"}}></div>
        </div>
        <div className="cards">
            <div style={{left:'14rem',}}>
                <Card 
                emoji = {HeartEmoji}
                heading = {'Design'}
                detail = {"Figma, Sketch, Photoshop, Adobe, Adobe xd"}
                />
            </div>
            {/* second card */}
            <div style={{top:'12rem',left:'-4rem'}}>
                <Card 
                emoji = {Glasses}
                heading = {'Developer'}
                detail = {"HTML,CSS,JavaScript, React"}
                />
            </div>
            {/* Third card */}
            <div style={{left:'12rem',top:'19rem'}}>
                <Card 
                emoji = {Humble}
                heading = {'UI/UX'}
                detail = {"Figma, Sketch, Photoshop,wondershare,Apple"}
                />
            </div>
            <div className="blur s-blur2" style={{background: "var(--purple)"}}></div>
        </div>
       
    </div>
  )
}

export default Services