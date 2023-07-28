import { FC } from 'react'
import TwoPhones from '../../../public/TwoPhones.svg'
import CutBall from '../../../public/CutBall.svg'

type P = object

const FantasyCricket: FC<P> = () => {
    return <div className=' flex flex-col '>
        <div className='flex flex-col '>
            <img src={TwoPhones} alt="TwoPhones" className='absolute z-10 mb-20' />
            <h1 className='text-4xl mt-[210px] font-bold text-center  relative  '>CRICKET FANTASY</h1>
        </div>

        <img src={CutBall} alt="CutBall" className='h-56 self-end pt-10' />
    </div>
}
export default FantasyCricket;