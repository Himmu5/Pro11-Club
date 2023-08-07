import { FC, useState } from 'react'
import Player from '../../../public/Player.svg'
import Ball from '../../../public/BigBall.svg'
import Star from '../../../public/Star.png'
import EPhone from '../../../public/Phone.svg'

import MobileChat from '../../../public/MobileChat.svg'
import MobileExpert from '../../../public/MobileExpert.svg'
import MobileLeague from '../../../public/MobileLeague.svg'
import MobileReward from '../../../public/MobileReward.svg'

import ExperienceMapper from '../UI-Component/ExperienceMapper'
import ResponsiveExperienceMapper from '../UI-Component/ResponsiveExperienceMapper'
import { useMediaQuery } from '@mui/material'
import { motion } from 'framer-motion'
import Fade from 'react-reveal/Fade';
import Roll from 'react-reveal/Roll';


type P = object

const Experience: FC<P> = () => {
    const sm = useMediaQuery("(min-width : 600px)");
    const md = useMediaQuery("(min-width : 1080px)");
    const [selectedOption, setSelectedOption] = useState(1);

    return <>
        <Fade bottom>
            <div className='sm:flex sm:items-center max-w-7xl mx-auto '>
                <div className='flex items-center justify-between sm:w-1/2'>
                    <div className='pt-10 w-2/3 '>
                        <Roll right duration={1200}>
                            <motion.div whileInView={{ opacity: 1, x: md === true ? -80 : -200, y: md === true ? 140 : 70, transition: { duration: 1.5 } }} ><motion.img src={Ball} alt='Ball' style={{ rotate: 45 }} className=' duration-400 absolute sm:flex left-96 -mr-96 h-16 sm:h-20 ' /></motion.div>
                        </Roll>
                        <img src={Player} alt="Player" className='relative' />
                    </div>
                    <div className=' sm:invisible sm:w-0 mt-8 mr-6 '>
                        <img src={Star} alt="Star" />
                    </div>
                </div>
                <h1 className='text-3xl text-center sm:text-left mt-8 text-[#111111] sm:text-5xl font-bold flex flex-col '><span> Unleash the amazing </span><span>Gaming Experience</span></h1>
            </div>
        </Fade>
        {/* <Fade bottom delay={1}> */}
        <div className='sm:flex sm:items-center  sm:justify-center m-5'>
            <div className='flex w-full '>
                {sm === true ? <ResponsiveExperienceMapper setSelectedOption={setSelectedOption} /> : <ExperienceMapper />}
            </div>
            <Fade top>
                <div className='sm:w-2/3 sm:h-full'>
                    {selectedOption === 1 && <Fade top><img src={EPhone} alt="EPhone" /></Fade>}
                    {selectedOption === 2 && <Fade top><img  src={MobileChat} alt="MobileChat" /></Fade>}
                    {selectedOption === 3 && <Fade top><img src={MobileExpert} alt="MobileExpert" /></Fade>}
                    {selectedOption === 4 && <Fade top><img src={MobileReward} alt="MobileReward" /></Fade>}
                    {selectedOption === 5 && <Fade top  ><img src={MobileLeague} alt="Mobile League" /></Fade>}
                </div>
            </Fade>
        </div>
        {/* </Fade> */}
    </>
}
export default Experience;