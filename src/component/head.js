import { IoMenu } from "react-icons/io5";
import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

function Heade() {
  var [mobil, setmobil] = useState(false);
  const [showText, setShowText] = useState(true);

  const propse = useSpring({
    opacity: showText ? 1 : 0, 
    from: { opacity: 0 }, 
    config: { duration: 1000 },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setShowText(prevShowText => !prevShowText);
    }, 2000); 
    return () => clearInterval(interval);
  }, []);
  return (
    <header className="flex bg-prim justify-between px-5 py-5">
      <animated.h1 style={propse} className="font-bold text-white text-xl font-hero-font" title={"I An University College of Engineering Arni"} href="#">I An University College of Engineering Arni</animated.h1>
      <nav className="hidden md:block">
        <ul className="flex text-white font-bold text-xl">
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">about</a></li>
          <li><a href="#project">Projects</a></li>
          <li><a href="#resum">Resume</a></li>
          <li><a href="#contat">Contact</a></li>
        </ul>
      </nav>
      {mobil && <nav className="block md:hidden">
        <ul className="flex flex-col text-white mobil-nav ">
          <li><a href="#hero" onClick={() => setmobil(!mobil)}>// Home</a></li>
          <li><a href="#about" onClick={() => setmobil(!mobil)}>// about</a></li>
          <li><a href="#project" onClick={() => setmobil(!mobil)}>// Projects</a></li>
          <li><a href="#resum" onClick={() => setmobil(!mobil)}>// Resume</a></li>
          <li><a href="#contat" onClick={() => setmobil(!mobil)}>// Contact</a></li>
        </ul>
      </nav>}
      <buttom onClick={() => setmobil(!mobil)} className="block md:hidden"><IoMenu className="text-white text-2xl" /></buttom>
    </header>
  )
}

export default Heade