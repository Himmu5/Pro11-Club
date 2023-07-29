import ConnectingFans from "./Components/Pages/ConnectingFans"
import ElevateExperience from "./Components/Pages/ElevateExperience"
import Experience from "./Components/Pages/Experience"
import FantasyCricket from "./Components/Pages/FantasyCricket"
import Footer from "./Components/Pages/Footer"
import Home from "./Components/Pages/Home"
import WitnessGaming from "./Components/Pages/WitnessGaming"
import Nav from "./Components/UI-Component/Nav"

function App() {

  return (
    <>  
      <Nav />
      <Home />
      <Experience />
      <ElevateExperience />
      <FantasyCricket />
      <WitnessGaming />
      <ConnectingFans />
      <Footer />
    </>
  )
}

export default App
