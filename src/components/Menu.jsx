import React from 'react'
import "../styles/menu.scss"

function Menu({menuOpen, setMenuOpen}) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
        <ul>
            <li>
                <a href="#intro " onClick={()=>setMenuOpen(false)}>Home</a>
            </li>
            <li>
                <a href="#portofolio " onClick={()=>setMenuOpen(false)}>Potrait Photography</a>
            </li>
            <li>
                <a href="#portofolio " onClick={()=>setMenuOpen(false)}>Design Grafis</a>
            </li>
            <li>
                <a href="#portofolioVideo " onClick={()=>setMenuOpen(false)}>Video</a>
            </li>
        </ul>
    </div>
  )
}

export default Menu