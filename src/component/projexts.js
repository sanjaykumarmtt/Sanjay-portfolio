import websid1 from '../assets/todoapp.png';
import websid2 from '../assets/courier.jpeg';
import websid3 from '../assets/result_locun.jpeg';
import websid4 from '../assets/finalyer_pr.jpeg';
import websid5 from '../assets/hostel_manag.jpeg';
import { VscGithub } from "react-icons/vsc";
import { RiLiveLine } from "react-icons/ri";
import { useState } from 'react';

function Projects() {
  const config = {
        projrcts: [
            {
                image: websid1,
                description: 'My First Todo Application. useing Tools Frontdend:HTML,CSS,Js Backend:Java Spring Boot,Mysql DB',
                link: 'https://68bf25a3c052f04a6e79763e--cute-cheesecake-3aa27d.netlify.app/spring.html',
                gitf: 'https://github.com/sanjaykumarmtt/Todo_app_frontend.git',
                gitb: 'https://github.com/sanjaykumarmtt/Todo_application_Springboot.git',
                live: true
            },
            {
                image: websid2,
                description: 'Sumal Courier pr Frontdend:React Js Backend:Java Spring Boot,Mysql DB ',
                link: 'https://dinesh-french-uthangarai.web.app/',
                link2: 'https://dinesh-french-uthangarai.web.app/admin',
                live: true,
                con: true
            },
            {
                image: websid3,
                description: 'Annauniversity result portal clone Frontdend:React Js Backend:Java Spring Boot,Mysql DB',
                link: 'https://annauniversity-result-clone.web.app/',
                link2: 'https://annauniversity-result-clone.web.app/admin',
                gitf: 'https://github.com/sanjaykumarmtt/Anna-University-Result-Portal-Clone-Frontend-React-js.git',
                gitb: 'https://github.com/sanjaykumarmtt/Anna-University-Result-Portal-Clone_app_Backend_JavaSpringboot.git',
                live: true,
                con: true
            },
            {
                image: websid4,
                description: 'This is My FinalYear Project LMS Frontdend:React Js Backend:Java Spring Boot,Mysql DB',
                link: 'https://github.com/sanjaykumarmtt/Finalyear-project-LMS-Frontend.git',
                link2: 'https://github.com/sanjaykumarmtt/LMS-backend-JavaSpring-boot.git',
                gitf: 'https://github.com/sanjaykumarmtt/Finalyear-project-LMS-Frontend.git',
                gitb: 'https://github.com/sanjaykumarmtt/LMS-backend-JavaSpring-boot.git',
                con: true
            }
            , {
                image: websid5,
                description: 'Hostel Management System Frontdend:React Js Backend:Java Spring Boot,Mysql DB',
                link: 'https://github.com/sanjaykumarmtt/Hostel-Frontend-React-js.git',
                link2: 'https://github.com/sanjaykumarmtt/Hostelbackend-JavaSpring-boot.git',
                gitf: 'https://github.com/sanjaykumarmtt/Hostel-Frontend-React-js.git',
                gitb: 'https://github.com/sanjaykumarmtt/Hostelbackend-JavaSpring-boot.git',
                con: true
            }
        ]
    }


    return (
        <div id='project' className="flex flex-col py-20 px-5 justify-center text-white bg-prim">


            <div className="w-full">
                <div className="flex flex-col px-10 py-5">
                    <h1 className="text-4xl border-b-2 mb-5 w-[135px] font-bold">Projects</h1>
                    <p className='font-bold  font-hero-font text-xl'>These are some of my best projects. I Hava built these with React Js, vanilla css & JavaSpring boot,Mysql Check them out.</p>
                </div>
            </div>
            <div className='overflow-y-auto h-[270px]'>
                <div className="md:w-[1700px]  cursor-pointer mt-4">
                    <div className='flex flex-col md:flex-row px-10 gap-5'>
                        {config.projrcts.map((peojer) => (
                            <div className='relative hover:scale-105 duration-300 shadow-lg shadow-black justify-items-center'>
                                <img className='h-[220px]  rounded-lg w-[500px] ' src={peojer.image} />
                                <div className='project-desc'>
                                     {peojer.live && <div className='flex gap-2 ml-3 mt-3 font-bold'>
                                            <div className='text-red-500'>
                                                <RiLiveLine />
                                            </div>
                                            <label>It's live</label>
                                        </div>}
                                    <p className='text-center px-5'>{peojer.description}</p>
                                    <div className='flex justify-center mt-1 gap-2'>
                                        {peojer.con ?
                                            <div className='flex flex-col gap-1'>
                                                <a className='butn caser cursor-pointer' target='_blank' href={peojer.link}>View Project</a>
                                                <a className='butn cursor-pointer' target='_blank' href={peojer.link2}>Admin Project</a>
                                            </div> :
                                            <a className='butn cursor-pointer' target='_blank' href={peojer.link}>View Project</a>
                                        }

                                    </div>
                                    {/* h-[200px] w-[500px] */}
                                        <div className='flex gap-3  justify-self-end mr-4'>
                                            <a href={peojer.gitf} title='Frontend code in github' className='hover:scale-125 duration-300 '><VscGithub size={21} /></a>
                                            <a href={peojer.gitb} title='Backend code in github' className='hover:scale-125 duration-300'><VscGithub size={21} /></a>
                                        </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Projects