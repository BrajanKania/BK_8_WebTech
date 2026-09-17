import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

import Header from './components/Header'
import Technology from "./components/Technology"
import Footer from "./components/Footer"

import Student from "./components/Student"
import InfoBox from './components/InfoBox'
import Navigation from "./components/Navigation"

function App() {

  return (
    <>
      <Header />

        <Navigation />

        <main>

          <Technology />

          <Technology />

          <Technology />

          <Student />

          <InfoBox />
        </main>

      <Footer />
    </>
  );
}

export default App;