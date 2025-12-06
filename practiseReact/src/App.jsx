import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Footer from "./components/Footer";
import CallMe from "./pages/CallMe";

const App = () => {
  return (
 
    <Router>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/callme" element={<CallMe />} />
        <Route path="" element=""/>
      </Routes>

      <Footer />

    </Router>



  );
};

export default App;
