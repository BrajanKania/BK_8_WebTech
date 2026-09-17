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

import StudentCard from "./components/StudentCard"
import CourseCard from './components/CourseCard'

function App() {
  const technologies = [
    {
      id: 1,
      name: "React",
      category: "Frontend",
      hours: 30
    },
    {
      id: 2,
      name: "Node.js",
      category: "Backend",
      hours: 40
    },
    {
      id: 3,
      name: "MySQL",
      category: "Database",
      hours: 20
    },
  ]

  return (
    <>
      <Header />

        <Navigation />

        <main>
          {
            technologies.map((tech) => (
              <Technology
                id={tech.id}
                name={tech.name}
                category={tech.category}
                hours={tech.hours}
              />
            ))
          }

          <CourseCard
            name="React Course"
            teacher="Rafał Taraszka"
            hours={2}
            completed={false}
          />

          <Student />
          
          <StudentCard 
            name="Jan Kowalski" 
            className="4P" 
            specialization="technik programista" 
            age={18}
            active={true}
          />
          
          <StudentCard 
            name="Adam Nowak" 
            className="3P" 
            specialization="technik programista"
            age={17}
            active={false}
          />

          <StudentCard 
            name="Józef Kowal" 
            className="2P" 
            specialization="technik programista"
            age={16}
            active={true}
          />
          
          <InfoBox />
        </main>

      <Footer />
    </>
  );
}

export default App;