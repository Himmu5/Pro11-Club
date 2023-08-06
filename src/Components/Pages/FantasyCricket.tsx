import { FC } from 'react'
import TwoPhones from '../../../public/TwoPhones.svg'
import CutBall from '../../../public/BigBall.svg'
import Fade from 'react-reveal/Fade';
import Rotate from 'react-reveal/Rotate';

type P = object

const FantasyCricket: FC<P> = () => {
    return <Fade bottom>
        <div className=' flex flex-col '>
            <div className='flex flex-col sm:w-full sm:items-center relative'>
                <div className=' h-40 sm:h-96 w-64 bg-gradient-to-r from-[#FF7BCA] to-blue-500  left:10 md:left-80 mt-5 blur-3xl rounded-full absolute'></div>
                <img src={TwoPhones} alt="TwoPhones" className=' sm:-mt-40  mb-10 sm:mb-0 sm:w-4/6  relative z-20' />
                <h1 className='text-4xl font-bold text-center sm:text-5xl w-full md:text-9xl absolute z-10 top-56 sm:top-72  '>CRICKET FANTASY</h1>
            </div>
            <Rotate top left appear>
                <img src={CutBall} alt="CutBall" className=' h-56 md:full self-end pt-10 ' />
            </Rotate>
        </div>
    </Fade>
}
export default FantasyCricket;