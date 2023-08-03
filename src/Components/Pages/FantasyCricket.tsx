import { FC } from 'react'
import TwoPhones from '../../../public/TwoPhones.svg'
import CutBall from '../../../public/CutBall.svg'

type P = object

const FantasyCricket: FC<P> = () => {
    return <div className=' flex flex-col '>
        <div className='flex flex-col sm:w-full sm:items-center relative'>
            <img src={TwoPhones} alt="TwoPhones" className=' sm:-mt-40  mb-10 sm:mb-0 sm:w-4/6  relative z-20' />
            <h1 className='text-4xl font-bold text-center sm:text-7xl w-full md:text-9xl absolute z-10 top-56 sm:top-72  '>CRICKET FANTASY</h1>
            <div className='h-56 w-56 bg-gradient-to-r from-[#FF7BCA] to-[#7061A3] left-10 mt-5 blur-2xl rounded-full absolute'></div>
        </div>

        <img src={CutBall} alt="CutBall" className=' h-56 self-end pt-10 ' />
    </div>
}
export default FantasyCricket;