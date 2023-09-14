
import './App.css'
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Project from './components/projects/Project';
import Skill from './components/skills/Skill';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {


  return (
    <>
      <BrowserRouter>

        <Header />

        <Routes>
          <Route path='/' element={<Hero />} />


        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
