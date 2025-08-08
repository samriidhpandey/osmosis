import React from 'react'
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';


// import Hyperspeed from '../Reactbit/Hyperspeed'
import {  Link } from "react-router-dom"

// import Hyperspeed from '../Reactbit/Hyperspeed/Hyperspeed';

import RedHero from './RedHero';
// import SplineViewer from './SplineViewer';

function Hero({ isDark }) {
  
  return (
    <>
    
       <RedHero/>
       
      <div className="container-fluid">


        
        
        <Section2 isDark={isDark} />
        <Section3 isDark={isDark} />
        <Section4 isDark={isDark} />
        <Section5 isDark={isDark} />

      </div>
    </>
  )
}

export default Hero