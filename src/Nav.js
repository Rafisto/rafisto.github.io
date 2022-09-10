import React from 'react';
import './css/Nav.css';
import { useNavigate } from 'react-router-dom';


function Nav (){
  let navigate = useNavigate();
  const mainPage = () =>{
    navigate("/");
  }
  const listPage = () =>{
    navigate("/list");
}
  return (
  <div>
      <div className="navigation">
          <span className="navtitle">
            <a href="https://github.com/Rafisto">
            <img src="\github.svg" width="12" height="12" alt="github icon" style={{filter:"invert(100%)"}} />
            </a>
            &nbsp;
            </span>
          <button className="navbutton" onClick={listPage}>Lista</button>
          <button className="navbutton" onClick={mainPage}>Główna</button>
      </div>
      <div className="main">
          <img className="navimage" src="\skd-vanitas.jpg" alt="Vanitas (latin) - Matthisen, Broder (1637-1666)" />
          <a href="https://skd-online-collection.skd.museum/Details/Index/345060">
          <figcaption className="navcaption">Vanitas - Broder Matthisen</figcaption>
          </a>
          <p className="title">Wiersze</p>
          <p className="subtitle">Rafał Włodarczyk</p>
      </div>
  </div>
  );
}

export default Nav;
