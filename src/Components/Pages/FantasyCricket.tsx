import { FC } from 'react'
import TwoPhones from '../../../public/TwoPhones.svg'
import CutBall from '../../../public/CutBall.svg'

type P = object

const FantasyCricket: FC<P> = () => {
    return <div className=' flex flex-col '>
        <div className='flex flex-col sm:w-full sm:items-center '>
            <img src={TwoPhones} alt="TwoPhones" className='absolute sm:relative z-10 mb-20 sm:mb-0  sm:w-4/6  ' />
            <h1 className='text-4xl mt-[210px] sm:mt-0 top-0 font-bold text-center sm:text-7xl relative  sm:w-full  '>CRICKET FANTASY</h1>
        </div>

        <img src={CutBall} alt="CutBall" className='h-56 self-end pt-10 ' />
    </div>
}
export default FantasyCricket;