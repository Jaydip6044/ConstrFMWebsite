import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Services from "./Components/Services";
import Contacts from "./Components/Contacts";

function HeroSection() {
  return (
    <>
   <Router>
      <Navbar />
      <div className="mt-24 p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contacts" element={<Contacts />} />

        </Routes>
      </div>
    </Router>
     </>
  );
}

export default HeroSection;
