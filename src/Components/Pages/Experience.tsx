import { FC } from 'react'
import Player from '../../../public/Player.svg'
import Ball from '../../../public/ball.png'
import Star from '../../../public/Star.png'
import EPhone from '../../../public/ePhone.png'
import ExperienceMapper from '../UI-Component/ExperienceMapper'


type P = object

const Experience: FC<P> = () => {
    return <>
        <div className='sm:flex sm:items-center max-w-7xl mx-auto'>
            <div className='flex items-center justify-between sm:w-full'>
                <div className='pt-10 '>
                    <img src={Ball} alt='Ball' className=' absolute sm:flex left-56 mt-24 ' />
                    <img src={Player} alt="Player" className='relative  ' />
                </div>
                <div className=' sm:hidden mt-8 mr-6'>
                    <img src={Star} alt="Star" />
                </div>
            </div>
            <h1 className='text-2xl text-center mt-8 text-[#111111] sm:text-5xl font-bold '>Unleash the amazing Gaming Experience</h1>
        </div>
        <div className='sm:flex sm:items-center  sm:justify-center max-w-7xl mx-auto'>
            <div className='flex w-full '>
                <ExperienceMapper />
            </div>
            <div className='sm:w-2/3'>
                <img src={EPhone} alt="EPhone" />
            </div>

        </div>
    </>
}
export default Experience;