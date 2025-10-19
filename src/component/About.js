import ReactIcon from "../assets/atom_11871257.png";
import Tailwind from "../assets/icons8-tailwind-css-128.png";
import Api from "../assets/icons8-rest-api-96.png";
import JavaI from "../assets/java_226777.png";
import Springb from "../assets/icons8-spring-boot-96.png";
import Mysqlb from '../assets/mysql_1199128.png';
import AboutImg from '../assets/about.png';
function About() {
    return (
        <section id='about' className='flex flex-col md:flex-row bg-secondary px-5'>
            <div className='py-5 md:w-1/2 '>
                <img src={AboutImg} />
            </div>
            <div className='md:w-1/2 flex justify-center text-white'>
                <div className='flex flex-col justify-center'>
                    <div>
                        <h1 className='text-4xl border-b-2 mb-5 w-[170px] font-bold'>About Me</h1>
                        <div className='flex flex-col gap-4 font-hero-font'>
                            Hello, my name is K Sanjay, and I am a passionate Java Full Stack developer with a focus on Spring Boot. As a recent graduate, I'm eager to apply my skills in building robust and scalable applications. I am proficient in Java, Spring Boot, React, and SQL. I am a quick learner and a dedicated team player, excited to contribute to innovative projects.
                            {/* <p><span className='text-2xl font-bold'>SEO          : </span> Optimized content can help a law firm appear higher in search engine results pages (SERPs).</p>
                        <p><span className='text-2xl font-bold'>Language     : </span>It's important to demonstrate expertise without using unnecessary legal jargon, which can confuse clients. When legal terminology is used, it's best to include easy-to-understand explanations. </p>
                        <p><span className='text-2xl font-bold'>Content type : </span>Case studies are a popular content type for law firms, as they allow the firm to share real-life legal challenges and strategies. Industry-specific legal guides can also be helpful, as they outline key legal considerations for specific industries. </p> */}
                        </div>
                    </div>
                    <div>
                        <h1 className='text-4xl border-b-2 mb-5 w-[90px] mt-8 md:mt-14 font-bold'>Skills</h1>
                        <div className="flex gap-3 mobil-only mt-6">
                            <img className="h-12 hover:scale-110 duration-300" title="React.Js" src={ReactIcon} />
                            <img className="h-12 hover:scale-110 duration-300" title="Tailwins Css" src={Tailwind} />
                            <img className="h-12 hover:scale-110 duration-300" title="Reat API" src={Api} />
                            <img className="h-12 hover:scale-110 duration-300" title="Core Java" src={JavaI} />
                            <img className="h-12 hover:scale-110 duration-300" title="Spring boot" src={Springb} />
                            <img className="h-12 hover:scale-110 duration-300" title="MySql" src={Mysqlb} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About