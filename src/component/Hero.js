import HeroImg from "../assets/Sanjay_3.png"
import { FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation';
import { VscGithub } from "react-icons/vsc";
import { BsLinkedin } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneSquare } from "react-icons/fa";
import { useState } from "react";
function Hearo() {
    return (
        <section id='hero' className="flex flex-col md:flex-row px-5 py-32 bg-prim justify-center">
            <div className="md:w-1/2 flex flex-col">
                <h1 className=" text-white text-6xl font-hero-font">Hi, <br /> Im K SANJAY </h1>
                {/* <p className="text-2xl">JAVA FULL Stack WITH SPRING BOOT DEVELOPER FRESHER</p> */}
                <div title="JAVA FULL Stack WITH SPRING BOOT DEVELOPER FRESHER">
                    <TypeAnimation className="text-2xl font-hero-font text-white"
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'JAVA FULL Stack',
                            1000,
                            'JAVA FULL Stack WITH SPRING BOOT',
                            1000,
                            'JAVA FULL Stack WITH SPRING BOOT DEVELOPE',
                            1000,
                            'JAVA FULL Stack WITH SPRING BOOT DEVELOPER FRESHER',
                            1000
                        ]}
                        wrapper="span"
                        speed={50}
                        style={{ fontSize: '2em', display: 'inline-block' }}
                        repeat={Infinity}
                    />
                </div>
                <div className="flex gap-3 py-7 ">
                    <a href="mailto:sanjays82943@gmail.com" className="hover:text-white hover:scale-125 duration-300"><MdOutlineMail size={30} /></a>
                    <a href="https://wa.me/8270300793" className="hover:text-white hover:scale-125 duration-300"><FaWhatsapp size={30} /></a>
                    <a href="tel:+918270300793" className="hover:text-white hover:scale-125 duration-300"><FaPhoneSquare size={30} /></a>
                    <a href="https://www.linkedin.com/in/sanjay-k03" className="hover:text-white hover:scale-125 duration-300"><BsLinkedin size={30} /></a>
                    <a href="https://github.com/sanjaykumarmtt?tab=repositories" className="hover:text-white hover:scale-125 duration-300"><VscGithub size={30} /></a>

                </div>
            </div>

            <img className="md:w-1/3" src={HeroImg}></img>
        </section>
    )
}
export default Hearo