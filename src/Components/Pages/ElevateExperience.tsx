import { FC } from 'react'
import Star1 from '../../../public/Star1.png'
import Star2 from '../../../public/Star2.svg'
import Ball from '../../../public/BigBall.svg'

type P = object

const ElevateExperience: FC<P> = () => {
    return <div className='text-center flex flex-col items-center py-10 px-2'>
        <img src={Star1} alt="Star1" className=' self-start py-4 ' />
        <div className='flex flex-col gap-5'>
            <h1 className='flex flex-col'> <span className='text-3xl sm:text-4xl font-bold '> Elevate Your </span><span className='text-2xl font-bold'> Cricket Fantasy Experience</span> </h1>
            <p className=''>Take your cricket fantasy journey to new heights with Pro 11 Club, where excitement knows no bounds.</p>
        </div>
        <div className='flex flex-col relative'>
            <img src={Star2} alt="Star2" className='self-end absolute  -mr-6 ' />
            <img src={Ball} className=' h-64 mt-8 ' alt="Ball" />
        </div>
    </div>
}
export default ElevateExperience;