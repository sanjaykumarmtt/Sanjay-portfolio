import { IoMenu } from "react-icons/io5";
import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

function Heade() {
  var [mobil, setmobil] = useState(false);
  const [showText, setShowText] = useState(true);

  // டெக்ஸ்ட் தோன்றி மறையும் அனிமேஷனுக்கான ஸ்பிரிங் பண்புகள்
  const propse = useSpring({
    opacity: showText ? 1 : 0, // showText true ஆக இருந்தால், opacity 1 ஆக இருக்கும், இல்லையென்றால் 0
    from: { opacity: 0 }, // அனிமேஷன் 0 opacity-யில் இருந்து தொடங்கும்
    config: { duration: 1000 }, // அனிமேஷன் 1000 மில்லி செகண்டுகள் (1 வினாடி) நீடிக்கும்
  });

  // ஒவ்வொரு 2 வினாடிக்கும் டெக்ஸ்ட்-ஐ மாற்றுவதற்கு (காட்டுவது/மறைப்பது)
  useEffect(() => {
    const interval = setInterval(() => {
      setShowText(prevShowText => !prevShowText);
    }, 2000); // 2000 மில்லி செகண்டுகள் (2 வினாடிகள்) இடைவெளியில் இயங்கும்
    return () => clearInterval(interval); // componentWillUnmount போன்று interval-ஐ சுத்தம் செய்யும்
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