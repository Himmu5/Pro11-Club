import { FC } from 'react'
import Logo from '../../../public/LogoSVG.svg'
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'



type P = object
const Footer: FC<P> = () => {
    return <div  name="Footer">
           
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