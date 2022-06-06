import React from 'react-dom/client';
import Topbar from './Topbar';
import Intro from './Intro';
import Portofolio from './Portofolio';
import PortofolioVideo from './PortofolioVideo';
import "../styles/portoApp.scss";
import {useState} from 'react';
import Menu from './Menu';



function PortoApp() {
const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className='porto-app' >
        <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <div className='sections'>
        <Intro />
        <Portofolio />
        <PortofolioVideo/>
        </div>
    </div>
  )
}

export default PortoApp