import React from "react"
import Banner from "./Components/Banner"
import './App.css'
import Card from "./Components/Card"
import Cards from "./Components/Cards/index"
import Footer from "./Components/Footer"
import Slider from "./Components/Slider"

function App() {

  return (
    <div className="App">
      <Banner />
      <Card />
      <Cards />
      <Slider />
      <Footer/>
    </div>
  )
}

export default App
