import React from 'react'
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import TypingText from './TypingText';
// import Hyperspeed from '../Reactbit/Hyperspeed'
import {  Link } from "react-router-dom"
import AnimatedName from './AnimatedName';
// import Hyperspeed from '../Reactbit/Hyperspeed/Hyperspeed';
import { filter } from 'framer-motion/client';
import RedHero from './RedHero';
// import SplineViewer from './SplineViewer';

function Hero({ isDark }) {
  const overlayStyle = {
    paddingTop: '10%',
    paddingBottom: '10%',
    background: isDark
      ? 'linear-gradient(rgba(235, 226, 226, 0.98), rgba(0,0,0,0.5), rgba(0,0,0,0.5))'
      : 'linear-gradient(rgba(245, 240, 240, 1), rgba(255,0,0,0.5), rgba(255,0,0,0.5))',
    
  };
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