import { FC } from 'react'
import Ring from '../../../public/Ring.svg'
import Phones from '../../../public/Phones.svg'

type P = object
const PhoneImage: FC<P> = () => {
    return <div className=' py-10 '>
        <img src={Ring} alt="Ring" className=' sm:w-1/2 sm:-my-10 absolute z-10 sm:top-72  md:top-20 md:right-10 ' />
        <div className='w-full h-full relative  flex flex-col justify-center'>
            <div className='w-full h-80 bg-blue-500 top-32  sm:h-[450px] rounded-full sm:max-w-md mx-auto self-center absolute z-0 blur-3xl '> </div>
            <img src={Phones} alt="Phones" className='z-20 relative  -bottom-12 sm:w-full sm:h-[600px] md:left-5' />
        </div>
    </div>
}
export default PhoneImage;