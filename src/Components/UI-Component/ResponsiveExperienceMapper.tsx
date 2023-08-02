import { FC } from 'react'
import BlueTick from '../../../public/BlueTick.svg'
import Chart from '../../../public/Chart.svg'
import Chat from '../../../public/Chat.svg'
import person from '../../../public/person.svg'

import { BiChevronRight } from 'react-icons/bi'

type P = object

const ExperienceMapper: FC<P> = () => {

    return <div className='flex flex-col gap-3 w-full h-[380px] overflow-auto custom-scrollbar'>
        <div className='flex justify-between items-center px-3 rounded-md py-4 shadow-lg  border mr-5'>
            <div className='flex items-center gap-4'>
                <img src={BlueTick} alt="BlueTick" />
                <p>Earn Badges to Get Extra Reward</p>
            </div>
            <BiChevronRight />
        </div>

        <div className='flex justify-between items-center px-3 rounded-md py-4 shadow-lg  border mr-5'>
            <div className='flex items-center gap-4'>
                <img src={Chart} alt="Chart" />
                <p>Play Along Chat</p>
            </div>
            <BiChevronRight />
        </div>

        <div className='flex justify-between items-center px-3 rounded-md py-4 shadow-lg  border mr-5'>
            <div className='flex items-center gap-4'>
                <img src={Chat} alt="Chat" />
                <p>Get Rewarded for being an Expert</p>
            </div>
            <BiChevronRight />
        </div>

        <div className='flex justify-between items-center px-3 rounded-md py-4 shadow-lg  border mr-5'>
            <div className='flex items-center gap-4'>
                <img src={person} alt="person" />
                <p>Get Expert’s help</p>
            </div>
            <BiChevronRight />
        </div>
        <div className='flex justify-between items-center px-3 rounded-md py-4 shadow-lg  border mr-5'>
            <div className='flex items-center gap-4'>
                <img src={person} alt="person" />
                <p>Get Expert’s help</p>
            </div>
            <BiChevronRight />
        </div>
        <div className='flex justify-between items-center px-3 rounded-md py-4 shadow-lg  border mr-5'>
            <div className='flex items-center gap-4'>
                <img src={person} alt="person" />
                <p>Get Expert’s help</p>
            </div>
            <BiChevronRight />
        </div>
        <div className='flex justify-between items-center px-3 rounded-md py-4 shadow-lg  border mr-5'>
            <div className='flex items-center gap-4'>
                <img src={person} alt="person" />
                <p>Get Expert’s help</p>
            </div>
            <BiChevronRight />
        </div>
        <div className='flex justify-between items-center px-3 rounded-md py-4 shadow-lg  border mr-5'>
            <div className='flex items-center gap-4'>
                <img src={person} alt="person" />
                <p>Get Expert’s help</p>
            </div>
            <BiChevronRight />
        </div>
        <div className='flex justify-between items-center px-3 rounded-md py-4 shadow-lg  border mr-5 '>
            <div className='flex items-center gap-4'>
                <img src={person} alt="person" />
                <p>Get Expert’s help</p>
            </div>
            <BiChevronRight />
        </div>
    </div>
}
export default ExperienceMapper;