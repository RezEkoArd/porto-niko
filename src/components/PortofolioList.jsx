import React from 'react';
import "../styles/portofolioList.scss";

function PortofolioList({id, title, active, setSelected }) {
  return (
    <li className={active ? "portofolioList active" : "portofolioList" } onClick={()=>setSelected(id)}>
         {title}
    </li>
  )
}

export default PortofolioList