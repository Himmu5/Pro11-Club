import { FC } from 'react'
import Player from '../../../public/Player.png'
import Ball from '../../../public/ball.png'
import Star from '../../../public/Star.png'
import ExperienceMapper from '../UI-Component/ExperienceMapper'


type P = object
const Experience: FC<P> = () => {
    return <>
        <div className='flex items-center justify-between'>
            <div className='pt-10 '>
                <img src={Ball} alt='Ball' className=' absolute left-24 mt-8' />
                <img src={Player} alt="Player" className='relative' />
            </div>
            <div className='mt-8 mr-6'>
                <img src={Star} alt="Star" />
            </div>
        </div>
        <h1 className='text-xl text-center mt-8 text-[#111111] sm:text-4xl font-bold '>Unleash the amazing Gaming Experience</h1>
        <div className='flex justify-center'>
            <ExperienceMapper />
        </div>
    </>
}
export default Experience;