import React from 'react-dom/client';
import "../styles/portofolio.scss";
import PortofolioList from './PortofolioList';
import {useEffect, useState} from "react";
import { DesignPortofolio, ProductPortofolio, CouplePortofolio, PotraitPortofolio} from "../utils/data";
import CloseIcon from '@mui/icons-material/Close';


function Portofolio() {
    const [selected,setSelected] = useState("potrait");
    const [data,setData] = useState([]);

    const [model, setModel] = useState(false);
    const [tempingSrc, setTempImgSrc] = useState(''); 
    const getImg = (img) => {
      setTempImgSrc(img);
      setModel(true);
    }


  const list = [
    {
      id: "potrait",
      title: "Potrait Photography"
    },
    {
      id: "couple",
      title: "Couple Photograph"
    },
    {
      id: "product",
      title: "Product Photography"
    },
    {
      id: "design",
      title: "Design Grafis"
    }
  ];

useEffect(() => {
  switch(selected){
    case "potrait":
      setData(PotraitPortofolio);
      break;
      case "couple":
      setData(CouplePortofolio);
      break;
      case "product":
      setData(ProductPortofolio);
      break;
      case "design":
      setData(DesignPortofolio);
      break;
      default: 
      setData(PotraitPortofolio);
  }
},[selected])

  return (
    <div className='portofolio' id='portofolio'>
      <h1>Portofolio</h1>
      <ul>
        {list.map(item => (
          <PortofolioList key={item.id} title={item.title } active={selected === item.id} setSelected={setSelected} id={item.id} />
        ))}
      </ul>
      <div className={model? "model open" : "model"}>
        <img src={tempingSrc} alt="" />
        <CloseIcon onClick={()=> setModel(false)} />

      </div>
      <div className="container">
        {data.map((d) => (
          <div className="item" key={d.id} onClick={() => getImg(d.img)}>
          <img src={d.img} 
          alt="" />
          <h3>{d.title}</h3>
        </div>  
        ))}
      </div>
    </div>
  )
}

export default Portofolio