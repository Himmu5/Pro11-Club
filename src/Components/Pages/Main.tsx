import { FC } from 'react'
import Home from './Home';
import Experience from './Experience';
import ElevateExperience from './ElevateExperience';
import FantasyCricket from './FantasyCricket';
import WitnessGaming from './WitnessGaming';
import ConnectingFans from './ConnectingFans';
import FAQs from './FAQs';
type P = object
const Main: FC<P> = () => {
    return <>
        <Home />
        <Experience />
        <ElevateExperience />
        <FantasyCricket />
        <WitnessGaming />
        <ConnectingFans />
        <FAQs />
    </>
}
export default Main;