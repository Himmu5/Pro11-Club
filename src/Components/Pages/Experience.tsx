import { FC } from 'react'
import Player from '../../../public/Player.svg'
import Ball from '../../../public/ball.png'
import Star from '../../../public/Star.png'
import EPhone from '../../../public/Phone.svg'
import ExperienceMapper from '../UI-Component/ExperienceMapper'
import ResponsiveExperienceMapper from '../UI-Component/ResponsiveExperienceMapper'
import { useMediaQuery } from '@mui/material'
import { motion } from 'framer-motion'


type P = object

const Experience: FC<P> = () => {
    const size = useMediaQuery("(min-width : 600px)");
    
    return <>
        <div className='sm:flex sm:items-center max-w-7xl mx-auto'>
            <div className='flex items-center justify-between sm:w-1/2'>
                <div className='pt-10 w-2/3 '>
                    <motion.div whileInView={{ opacity: 1, x : -200 , y : 70  ,  transition : { duration : 1.5 } } } ><motion.img src={Ball} alt='Ball' className=' absolute sm:flex left-96 top-6 sm:top-0 -mr-96 ' /></motion.div>
                    <img src={Player} alt="Player" className='relative  ' />
                </div>
                <div className=' sm:invisible sm:w-0 mt-8 mr-6 '>
                    <img src={Star} alt="Star" />
                </div>
            </div>
            <h1 className='text-3xl text-center sm:text-left mt-8 text-[#111111] sm:text-5xl font-bold flex flex-col '><span> Unleash the amazing </span><span>Gaming Experience</span></h1>
        </div>
        <div className='sm:flex sm:items-center  sm:justify-center max-w-7xl mx-auto'>
            <div className='flex w-full '>
                {size === true ? <ResponsiveExperienceMapper /> : <ExperienceMapper />}
            </div>
            <div className='sm:w-2/3 sm:h-full'>
                <img src={EPhone} alt="EPhone" />
            </div>
        </div>
    </>
}
export default Experience;