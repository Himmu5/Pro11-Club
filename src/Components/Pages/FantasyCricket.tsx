import { FC } from 'react'
import TwoPhones from '../../../public/TwoPhones.svg'
import CutBall from '../../../public/CutBall.svg'

type P = object

const FantasyCricket: FC<P> = () => {
    return <div className=' flex flex-col '>
        <div className='flex flex-col sm:w-full sm:items-center relative'>
            <img src={TwoPhones} alt="TwoPhones" className=' sm:-mt-40  mb-20 sm:mb-0  sm:w-4/6  relative z-10' />
            <h1 className='text-4xl font-bold text-center sm:text-7xl md:text-9xl absolute top-72 sm:w-full  '>CRICKET FANTASY</h1>
        </div>

        <img src={CutBall} alt="CutBall" className=' h-56 self-end pt-10 ' />
    </div>
}
export default FantasyCricket;