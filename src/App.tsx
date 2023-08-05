import Footer from "./Components/Pages/Footer"
import Main from "./Components/Pages/Main"
import Nav from "./Components/UI-Component/Nav"

function App() {

  return (
    <>

      <Nav />
      <div className=" max-w-7xl mx-auto text-primary ">
        <Main />
        <Footer />
      </div>
    </>
  )
}

export default App
