import {FC} from 'react'
import { IoRadioButtonOnSharp } from 'react-icons/io5'
import { BiChevronRight } from 'react-icons/bi'

type P = object
const ExperienceItem:FC<P> =()=>{
  return <div className='flex gap-2 items-center border-2 rounded-xl p-2 mx-2 my-1 justify-center'>
      <IoRadioButtonOnSharp size={25} className="text-blue-500"/>

      <p>Earn Badges to Get Extra Reward</p>
      <BiChevronRight />
</div>
}
export default ExperienceItem;