import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailIcon from '@mui/icons-material/Mail';



import "../styles/intro.scss";

function Intro() {
  return (
    <div className='intro' id='intro'>
      <div className="left">
        <div className="leftContainer">
          <div className="IconSosmed">
            <div >
              <a href="https://www.google.com/">
              <InstagramIcon className="Icon"/>
              </a>
            </div>
            <div >
            <a href="https://www.google.com/">
              <FacebookIcon className="Icon"/>
              </a>
            </div>
            <div >
            <a href="https://www.google.com/">
              <WhatsAppIcon className="Icon"/>
              </a>
            </div>
            <div >
            <a href="https://www.google.com/">
              <MailIcon className="Icon"/>
              </a> 
            </div>
          </div>
        </div>
      </div>
      <div className="mid">
        <div className="font">
          <h1>Hi, Im Niko</h1>
          
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur turpis non tincidunt tincidunt. Cras sit amet nunc id dolor ultrices vulputate in nec mi. </p>
        </div>
        <a href="#portofolio">
          <button class="btn">See Me More </button>
        </a>
      </div>
      <div className="right">
      
      </div>
    </div>
  )
}

export default Intro