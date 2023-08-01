import { FC } from 'react'
import Ring from '../../../public/Ring.svg'
import Phones from '../../../public/Phones.svg'

type P = object
const PhoneImage: FC<P> = () => {
    return <div className='  py-10 '>
        <img src={Ring} alt="Ring" className=' sm:w-1/2 sm:-my-10 absolute z-2  ' />
        <img src={Phones} alt="Phones" className=' relative -bottom-12 sm:w-full' />
    </div>
}
export default PhoneImage;