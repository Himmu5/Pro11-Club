import { FC } from 'react'
import Star1 from '../../../public/Star1.png'
import Star2 from '../../../public/Star2.svg'
import Ball from '../../../public/BigBall.svg'
import Fade from 'react-reveal/Fade';

type P = object

const ElevateExperience: FC<P> = () => {
    return <Fade bottom>
        <div className='text-center flex flex-col sm:flex-row-reverse items-center sm:text-start py-10 px-2 sm:w-full'>
            <img src={Star1} alt="Star1" className=' self-start py-4 ' />
            <div className='flex flex-col gap-5 sm:w-2/3  '>
                <h1 className='flex flex-col w-full  '> <span className='text-3xl sm:text-4xl font-bold md:text-5xl '> Elevate Your </span><span className='text-2xl font-bold sm:text-5xl md:text-6xl w-full '> Cricket Fantasy Experience</span> </h1>
                <p className='md:text-2xl'>Take your cricket fantasy journey to new heights with Pro 11 Club, where excitement knows no bounds.</p>
            </div>
            <div className='flex flex-col relative  sm:flex-row sm:w-1/3'>
                <img src={Star2} alt="Star2" className='self-end absolute  -mr-6 ' />
                <img src={Ball} className=' h-64 mt-8 sm:h-full sm:w-full' alt="Ball" />
            </div>
        </div>
    </Fade>
}
export default ElevateExperience;