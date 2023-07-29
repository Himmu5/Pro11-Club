import { FC } from 'react'
import ThreePhones from '../../../public/ThreePhones.svg'

type P = object

const ConnectingFans: FC<P> = () => {
    return <div className='flex flex-col text-center '>
        
        <h1 className='text-3xl font-bold '>Real-time Banter Connecting Fans Amplifying Excitement.</h1>
        <p className='text-sm space-y-3 py-5 flex flex-col'><span>Engage in lively conversations with fellow fans,</span> <span>sharing the exhilaration of live matches through Pro 11</span><span> Club's immersive chat experience.</span></p>
        <div className='relative'></div>
        <img src={ThreePhones} alt="Three Phones" className=' relative py-10 px-4' />

    </div>
}   
export default ConnectingFans;