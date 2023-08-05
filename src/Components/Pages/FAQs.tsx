import { FC } from 'react'
import Fade from 'react-reveal/Fade';
import BigBall from '../../../public/BigBall.svg'
import { BsQuote } from 'react-icons/bs'

type P = object
const FAQs: FC<P> = () => {
    return <div className='relative flex flex-col items-center  '>
        <Fade top duration={2 * 1000}>
            <img src={BigBall} alt="ball" className='absolute h-full self-center w-full ' />
        </Fade>
        <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold'>FAQs</h1>
        <div className='relative z-20 flex overflow-scroll gap-4 w-full sm:h-[520px] px-2 py-16 no-scrollbar border-b-2 border-black'>
            {
                [...Array(5)].map((item) => {
                    return <div key={item} className='flex backdrop-blur-sm flex-col py-2 min-w-[250px] px-4 space-y-3 w-64  border-2 border-[#111111] rounded-2xl'>
                        <div className='text-white p-1 bg-[#111111] self-start rounded-full '>
                            <BsQuote />
                        </div>
                        <h1>What is Fantasy Sport?</h1>
                        <p className='text-sm '>
                            Fantasy sports is a competitive online game where participants create virtual teams composed of real-life athletes from various sports. Players earn points based on the performance of their selected athletes in actual sporting events. Fantasy sports allow fans to showcase their knowledge, strategy, and passion for sports while competing against others for prizes or bragging rights.
                        </p>
                    </div>
                })
            }
        </div>
    </div>
}
export default FAQs;