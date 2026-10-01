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
  ];

  const students = [
    { id: 1, name: "Anna", className: "4P", age: 20, specialization: "C#" },
    { id: 2, name: "Jan", className: "4P", age: 18, specialization: "C"  },
    { id: 3, name: "Adam", className: "4P", age: 16, specialization: "C++"  },
    { id: 4, name: "Józef", className: "4P", age: 14, specialization: "HTML"  }
  ];

  return (
    <>
      <Header />

        <Navigation />

        <main>
          {technologies.map((tech) => (
              <Technology
                key={tech.id}
                name={tech.name}
                category={tech.category}
                hours={tech.hours}
              />
            ))}

          {students.map((student) => {
            return (
              <Student
                key={student.id}  
                name={student.name}
                className={student.className}
                age={student.age}
                specialization={student.specialization}
              />
            );
          })}

          <CourseCard
            name="React Course"
            teacher="Rafał Taraszka"
            hours={2}
            completed={false}
          />
          
          <InfoBox />
        </main>

      <Footer />
    </>
  );
}

export default App;