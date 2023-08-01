import { FC } from 'react'
import { BsQuote } from 'react-icons/bs'
import Logo from '../../../public/LogoSVG.svg'
import { AiFillFacebook , AiFillInstagram , AiFillLinkedin} from 'react-icons/ai'

type P = object
const Footer: FC<P> = () => {
    return <>
        <div className='flex flex-col items-center  '>
            <h1 className='text-3xl font-bold'>FAQs</h1>
            <div className='flex overflow-scroll gap-4 w-full px-2 py-16 no-scrollbar border-b-2 border-black'>
                {
                    [...Array(5)].map(() => {
                        return <div className='flex flex-col py-2 min-w-[200px] px-4 space-y-3 w-64  border-2 border-[#111111] rounded-2xl'>
                            <div className='text-white p-1 bg-[#111111] self-start rounded-full '>
                                <BsQuote />
                            </div>
                            <h1>What is Fantasy Sport?</h1>
                            <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi facilis impedit, unde perferendis magni ab repellendus iusto aperiam obcaecati commodi iste quod quaerat beatae nam exercitationem voluptas magnam perspiciatis odio.</p>
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
                <AiFillInstagram size={35}/>
                <AiFillFacebook size={35}/>
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
    </>
}
export default Footer;