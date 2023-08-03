import { FC } from 'react'
import { BsQuote } from 'react-icons/bs'
import Logo from '../../../public/LogoSVG.svg'
import BigBall from '../../../public/BigBall.svg'
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'

type P = object
const Footer: FC<P> = () => {
    return <div className=''>
        <div className='relative flex flex-col items-center  '>
            <img src={BigBall} alt="ball" className='absolute h-full self-center w-full ' />
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
        <div className='flex flex-col items-center py-10 '>
            <div className='flex gap-4'>
                <img src={Logo} alt="Logo" />
                <div className='flex gap-3 font-bold text-2xl '><span>Pro</span> <span>11</span> <span>Club</span> </div>
            </div>
            <div className='flex gap-3 py-5'>
                <AiFillInstagram size={35} />
                <AiFillFacebook size={35} />
                <AiFillLinkedin size={35} />
            </div>

            <div className='flex gap-4 mx-4 font-bold text-md md:flex-col md:items-center '>

                <div className='flex flex-col gap-3 md:flex-row md:space-x-10'>
                    <h1>Download App</h1>
                    <h1>How to play</h1>
                    <h1>Invite friends</h1>
                    <h1>Fantasy Cricket</h1>
                </div>
                <div className='flex flex-col gap-3 md:flex-row md:space-x-10'>
                    <h1>Privacy Policy</h1>
                    <h1>Terms and Conditions</h1>
                    <h1>About Us</h1>
                </div>
            </div>
        </div>
    </div>
}
export default Footer;