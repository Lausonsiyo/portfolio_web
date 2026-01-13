//STYLE SHEET FOR APP COMPONENT
import './App.css'

//COMPONENT IMPORTS
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';


//REACT IMPORTS
// import { useState } from 'react'


function App() {
 

  return (
    <>
    <div className="page">
      <div className="page__content">
        <Header />
        <Main />
        <Footer />
      
      </div>
      </div>
    </>
  )
}

export default App
