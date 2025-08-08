import React from 'react'

import { Link, Outlet } from 'react-router-dom';
import HTMLIntroduction from './Introduction/HTMLIntroduction';

function Homehtml() {


  const sidelist1 = () => {
    const sidelist = document.getElementById("sidelist");
    if (sidelist.style.display === "none") {
      sidelist.style.display = "block";
    } else {
      sidelist.style.display = "none";
    }
    const [activeItem, setActiveItem] = useState("intro1"); // default active

  const handleItemClick = (key) => {
    setActiveItem(key);
  };
  };

   
  


  return (
    <>
      
    </>
  )
}

export default Homehtml