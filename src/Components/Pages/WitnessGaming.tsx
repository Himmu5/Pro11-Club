import { FC } from 'react'
import Star from '../../../public/Star.png'
import Ball from '../../../public/BigBall.svg'
import Fade from 'react-reveal/Fade';
import Roll from 'react-reveal/Roll';

type P = object

const WitnessGaming: FC<P> = () => {

    const images = [
        "https://images.pexels.com/photos/17551621/pexels-photo-17551621/free-photo-of-child-sitting-on-cropland-field.jpeg",
        "https://images.pexels.com/photos/13425264/pexels-photo-13425264.jpeg",
        "https://images.pexels.com/photos/13425264/pexels-photo-13425264.jpeg",
        "https://images.pexels.com/photos/17591272/pexels-photo-17591272/free-photo-of-light-landscape-man-people.jpeg",
        "https://images.pexels.com/photos/17075271/pexels-photo-17075271/free-photo-of-a-person-holding-a-puppy.jpeg",
        "https://images.pexels.com/photos/17718120/pexels-photo-17718120.jpeg",
        "https://images.pexels.com/photos/15134001/pexels-photo-15134001.jpeg",
        "https://images.pexels.com/photos/16883535/pexels-photo-16883535/free-photo-of-woman-in-white-dress-posing-in-building-door.jpeg",
    ]

    return <Fade bottom>
        <div className='mt-10 flex flex-col gap-4 items-center sm:min-h-screen '>
            <img src={Star} alt="Star" className='h-24 self-end' />
            <h1 className='font-bold text-3xl sm:text-4xl md:text-6xl text-center sm:flex sm:flex-col '> <span> Witness the Power of</span><span> Mobile Fantasy Gaming!</span></h1>
            <div className='flex gap-12 sm:gap-16 mt-10 w-full overflow-auto px-4 sm:z-10 sm:relative no-scrollbar '>
                {
                    images.map((img) => <> <img alt='images' className=' h-32 w-40 sm:h-80 sm:w-[300px] object-cover rounded-xl shadow-md shadow-gray-400 ' src={img} /></>)
                }
            </div>

            <Roll top>
                <div className='sm:flex sm:justify-center md:top-40  sm:absolute sm:w-full h-full '>
                    <img src={Ball} alt="Ball" className=' sm:w-1/2 h-full ' />
                </div>
            </Roll>
        </div>
    </Fade>
}
export default WitnessGaming;