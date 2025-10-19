import ResumImg from '../assets/resume.jpg';

function Resum() {
const config={
    link:'https://drive.google.com/file/d/1fdcIeMFzVTLgmhFR1Sei1mWzk3LK1Ojd'
}

    return (
        <section id='resum' className='flex flex-col md:flex-row bg-secondary px-5'>
            <div className='py-5 md:w-1/2 flex justify-center md:justify-end'>
                <img className='w-[300px] ' src={ResumImg} />
            </div>
            <div className='py-7 md:w-1/2 flex justify-center text-white'>
                <div className='flex flex-col justify-center'>
                    <h1 className='text-4xl border-b-2 mb-5 w-[140px] font-bold'>Resume</h1>
                    <div className='flex flex-col gap-4'>
                        <p>You Can view My Resume <a className='butn' href={'/sanjay_re .pdf'}>Open</a></p>
                
                    </div>
                </div>
            </div>
        </section>

    )
}
export default Resum