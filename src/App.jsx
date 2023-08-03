import { useState } from 'react'
import './App.css'
import Header from './Header';
import Homepage from './Homepage';
import Footer from './Footer';

function App() {

  const firstName = "Hamit";
  const lastName = "Licina"

  return (
    <div>
      <Header />
      <Homepage />
     <h1>Hello React, {firstName} is my first name.</h1>
     <p>This is paragraph that doesn't have any meaning.And This is my surname {lastName} </p>
     <Footer />
    </div>
  )
}

export default App
