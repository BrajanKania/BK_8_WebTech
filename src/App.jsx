import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {

  const app = {
    name: "WebTech",
    version: "1.0",
    author: "Brajan Kania",
    technologiesCount: 3
  };

  const technology = {
    name: "React",
    category: "Frontend",
    hours: 30,
    active: true  
  };

  const student = {
    name: "Brajan",
    surname: "Kania",
    className: "4P",
    specialization: "technik programista"
  };

  const course = {
    name: "React Course",
    teacher: "Rafal",
    hours: 30,
    completed: false
  };

  return (
    <>
      <section>
        <h1>{app.name}</h1>
        <p>Wersja: {app.version}</p>
        <p>Autor: {app.author}</p>
        <p>Liczba technologii: {app.technologiesCount}</p>
      </section>

      <section>
        <p>{technology.name}</p>
        <p>Kategoria: {technology.category}</p>
        <p>Liczba godzin: {technology.hours}</p>
      </section>

      <section>
        <p>Uczeń: {student.name} {student.surname}</p>
        <p>Klasa: {student.className}</p>
        <p>Kierunek: {student.specialization}</p>
      </section>

      <section className = "courseData">
        <h2>{course.name}</h2>
        <p>Prowadzący: {course.teacher}</p>
        <p>Ilość godzin: {course.hours}</p>
        <p>Ukończony: {course.completed ? "Tak" : "Nie"}</p>
      </section>

    </>
  );
}

export default App;