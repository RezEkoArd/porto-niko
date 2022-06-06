import React from 'react';
import "../styles/portofolioVideo.scss";
import { Carousel } from 'react-bootstrap';
import {videoProperties} from "../utils/data";
import ReactPlayer from 'react-player';



function PortofolioVideo() {

  return (
    <div className='portofolioVideo' id='portofolioVideo'>
      <h1>Portofolio Video</h1>
      <Carousel interval={null} >
      {videoProperties.map((videoObj) =>{
           return (
              <Carousel.Item key={videoObj.id}>
                <ReactPlayer
                 className='react-player'
                 url={videoObj.src}
                 pip={true}
                 playing={true}
                />
                
                <Carousel.Caption>  
                <h3>{videoObj.title}</h3>
                <p>{videoObj.credit}</p>
                </Carousel.Caption>
              </Carousel.Item>
           )
         })}
      </Carousel>
    </div>
  )
}

export default PortofolioVideo