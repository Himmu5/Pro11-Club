import { FC } from 'react'
import Logo from '../../../public/LogoSVG.svg'
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'



type P = object
const Footer: FC<P> = () => {
    return <div name="Footer">

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
        <div className='backdrop-blur-xl p-2'>

            <h1 className='font-bold text-xl text-black '> CORPORATE OFFICE</h1>
            <p>
                ONE BKC, Tower A, 12th & 14th Floor, Unit 1201 & 1202 and 1401 & 1402, Plot C-66, G Block, Bandra Kurla Complex, Bandra (East), Mumbai 400 051
            </p>
            <p className='py-3'>
                DISCLAIMER:The fantasy sport games on the BalleBaazi platform involve an element of financial risk and may be addictive. Please play responsibly and at your own risk. SBN Gaming and/or BalleBaazi platform does not promote or advertise fantasy sport games as an income opportunity or an alternative employment option. SBN Gaming and/or BalleBaazi platform shall not, in any way whatsoever, be held responsible and liable for your breach of any rules & regulations, terms & conditions and applicable laws by you. Learn More
            </p>

        </div>
    </div>
}
export default Footer;