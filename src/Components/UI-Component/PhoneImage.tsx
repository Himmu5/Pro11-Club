import { FC } from 'react'
import Phones from '../../../public/Ring.png'
import Ring from '../../../public/Phones.png'

type P = object
const PhoneImage: FC<P> = () => {
    return <div className='  my-10 w-full'>
        <img src={Phones} alt="phones" className='  absolute z-2 -rotate-3' />
        <img src={Ring} alt="ring" className='relative -bottom-12 ' />
    </div>
}
export default PhoneImage;