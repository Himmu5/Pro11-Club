import { FC } from 'react'
import ThreePhones from '../../../public/ThreePhones.svg'
import BigBall from '../../../public/BigBall.svg'
import Fade from 'react-reveal/Fade';
import Roll from 'react-reveal/Roll';


type P = object

const ConnectingFans: FC<P> = () => {
    return <Fade bottom>
        <div className=' flex flex-col sm:flex-row text-center sm:text-start py-28 lg:py-64 sm:p-2 sm:mt-20'>
            <div className='sm:w-2/3 md:space-y-5'>
                <h1 className='text-3xl font-bold sm:text-4xl md:text-6xl'>Real-time Banter Connecting Fans Amplifying Excitement.</h1>
                <p className='text-sm space-y-3 py-5 flex flex-col lg:text-2xl'><span>Engage in lively conversations with fellow fans,</span> <span>sharing the exhilaration of live matches through Pro 11</span><span> Club's immersive chat experience.</span></p>
                <div className='relative'></div>
                <div className='sm:h-full'>
                    
                    <Roll top right duration={5000}>
                        <img src={BigBall} alt="Big Ball" />
                    </Roll>
                </div>
            </div>
            <div className='sm:w-1/2 sm:h-full hidden sm:block'>
                <img src={ThreePhones} alt="Three Phones" className=' sm:w-full py-10 px-4' />
            </div>
        </div>
    </Fade>
}
export default ConnectingFans;