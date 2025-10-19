import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import ResumImg from '../assets/resume.jpg';
function Contact() {
    const [state, handleSubmit] = useForm("xblabrjd");
    if (state.succeeded) {
      alert("Thanks for Contact Me");
    }
    return (
        <section id='resum' className='flex flex-col bg-prim px-5 py-16 text-white'>
            <div className='flex flex-col gap-2 items-center'>
                <div className='condbox hover:scale-95 duration-300'>
                    <h1 className='text-4xl border-b-2 mb-5 w-[140px] font-bold'>Contact</h1>
                    <form onSubmit={handleSubmit}className='flex flex-col gap-5'>
                        <label htmlFor="email"></label>
                        <input className='input1' text="text" placeholder='Your Name'></input>

                        <input className='input1' type="email" name="email" id="email" placeholder='Enter Your Email'></input>
                        <ValidationError prefix="Email" field="email" errors={state.errors}/>
                    
                        <textarea className='input2' id="message" name="message" placeholder='Massage'></textarea>
                        <ValidationError prefix="Message" field="message" errors={state.errors}/>

                        <div className="text-center">
                            <button className='bg-blue-900 w-20 h-9 hover:border-2 border-white rounded-md shadow-md shadow-black hover:scale-105 duration-300' type="submit" disabled={state.submitting} >Send</button>
                        </div>
                    </form>
                </div>
                <div className='flex flex-col mt-10 items-center'>
                    <p className='font-hero-font'>If you to discuss more in , please cantact me</p>
                    <p><span className='font-bold'>Email :</span> <a href='mailto:sanjays82943@gmail.com'>sanjays82943@gmail.com</a></p>
                    <p><span className='font-bold'>Phone :</span> <a href="tel:+918270300793">8270300793</a></p>
                </div>

            </div>
        </section>

    )
}
export default Contact