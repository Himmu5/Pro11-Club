import { FC } from 'react'
import ExperienceItem from './ExperienceItem'
import './ExperienceMapper.css'

type P = object
const ExperienceMapper: FC<P> = () => {
    return <div className=' mt-3 h-64 Ex-mapper overflow-auto '>
        {
            [...Array(8)].map(() => <ExperienceItem />)
        }
    </div>
}
export default ExperienceMapper;