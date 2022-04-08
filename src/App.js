import React from "react"

import './main.css'

import NavBar from "./Components/NavBar/NavBar";
import Hero from "./Components/Hero/Hero";
import SearchBox from "./Components/SearchBar/SearchBar";
import Footer from "./Components/Footer/Footer"
import Result from "./Components/Result/Result";

const App = () => {
  return (
    <div className="app_container">
      <NavBar />
      <Hero />
      <SearchBox />  
      <Result />
      <Footer />            
    </div>
  )
}

export default App;
