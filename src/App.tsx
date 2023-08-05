import { Route, Routes } from "react-router-dom"
import Footer from "./Components/Pages/Footer"
import Main from "./Components/Pages/Main"
import Nav from "./Components/UI-Component/Nav"
import AboutUs from "./Components/Pages/AboutUs"

function App() {

  return (
    <>

      <Nav />
      <div className=" max-w-7xl mx-auto text-primary ">
        <Routes >
          <Route element={<Main />} path="/Main" />
          <Route element={<AboutUs />} path="/About" />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
