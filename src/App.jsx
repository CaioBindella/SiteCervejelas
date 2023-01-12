import React from "react"
import Banner from "./Components/Banner"
import './App.css'
import Card from "./Components/Card"
import Cards from "./Components/Cards/index"
import Footer from "./Components/Footer"
import Slider from "./Components/Slider"
import History from "./Components/History"
import VLibras from "@djpfs/react-vlibras"

function App() {

  return (
    <div className="App">
      <VLibras/>
      <Banner />
      <Card />
      <Cards />
      <Slider />
      <History />
      <Footer/>
    </div>
  )
}

export default App
