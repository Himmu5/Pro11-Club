import { FC } from 'react'
import Phones from '../../../public/Ring.png'
import Ring from '../../../public/Phones.png'

type P = object
const PhoneImage: FC<P> = () => {
    return <div className='  py-10 '>
        <img src={Phones} alt="phones" className=' sm:w-1/2 sm:-my-10 absolute z-2  -rotate-3  ' />
        <img src={Ring} alt="ring" className=' relative -bottom-12 sm:w-full' />
    </div>
}
export default PhoneImage;