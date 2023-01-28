import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Resume from './Resume';
import Works from './Works';

export default function Main() {
  return (
    <main>
      <Routes>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/resume" element={<Resume />}></Route>
        <Route path="/works" element={<Works />}></Route>
      </Routes>
    </main>
  )
}
