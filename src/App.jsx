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
import Book from './components/Book'
import Product from './components/Product'

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
    {
      id: 4,
      name: "Express",
      category: "Backend",
      hours: 25
    },
    {
      id: 5,
      name: "MongoDB",
      category: "Baza danych",
      hours: 20
    }
  ];

  const students = [
    { id: 1, name: "Anna", className: "4P", age: 20, specialization: "C#" },
    { id: 2, name: "Jan", className: "4P", age: 18, specialization: "C"  },
    { id: 3, name: "Adam", className: "4P", age: 16, specialization: "C++"  },
    { id: 4, name: "Józef", className: "4P", age: 14, specialization: "HTML"  }
  ];

  const books = [
    { id: 1, title: "Wiedźmin", author: "Andrzej Sapkowski" },
    { id: 2, title: "Hobbit", author: "J.R.R. Tolkien" },
    { id: 3, title: "Lalka", author: "Bolesław Prus" }
  ];

  const products = [
    { id: 1, name: "Laptop", price: 500 },
    { id: 2, name: "Phone", price: 1000 }
  ];

  function selectProduct(name){
    console.log(`Wybrano produkt: ${name}`);
  }

  return (
    <>
      <Header />

        <Navigation />

        <main>

          {products.map((product) => {return ( <Product key={product.id} name={product.name} price={product.price} onSelect={selectProduct}/> );})}

          {books.map((book) => {
            return (<Book 
              key={book.id}
              title={book.title}
              author={book.author}
            />
          )})}
          <hr />
          
          {books.map((book) => (<Book key={book.id} title={book.title} author={book.author} />))}

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
          
          <InfoBox />
        </main>

      <Footer />
    </>
  );
}

export default App;