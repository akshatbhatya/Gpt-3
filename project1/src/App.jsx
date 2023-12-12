import './App.css'

import { Article, Brand, Cta, Feature, Navbar } from "./Components";
import { Blog, Features, Header, Footer, Possibility, WhatGpt3 } from './Components/Container'




function App() {


  return (
    <>
      <div className='gradient-bg'>
        <Navbar />
        <Header />
      </div>
      <div>
        <Brand />
        <WhatGpt3 />
        <Feature />
        <Possibility />
        <Blog />
        <Cta />
        <Footer />
      </div>
      <Article />

    </>
  )
}

export default App
