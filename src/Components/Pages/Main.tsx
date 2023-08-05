import { FC } from 'react'
import Home from './Home';
import Experience from './Experience';
import ElevateExperience from './ElevateExperience';
import FantasyCricket from './FantasyCricket';
import WitnessGaming from './WitnessGaming';
import ConnectingFans from './ConnectingFans';
type P = object
const Main: FC<P> = () => {
    return <>
        <Home />
        <Experience />
        <ElevateExperience />
        <FantasyCricket />
        <WitnessGaming />
        <ConnectingFans />
    </>
}
export default Main;