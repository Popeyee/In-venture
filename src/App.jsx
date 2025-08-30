import React, { useState } from "react";
import "./App.css";
import Navbar from "./assets/components/NavBar/Navbar";
import Main from "./assets/components/Main/Main";
import Platform from "./assets/components/Platform/Platform";
import FutureFeatures from "./assets/components/FutureFeatures/FutureFeatures";
import ContactUs from "./assets/components/ContactUs/ContactUs";
import Footer from "./assets/components/Footer/Footer";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      {/* Hero Section */}
      <Main />
      {/* Platform Section */}
      <Platform />
      {/* Future Features */}
      <FutureFeatures />
      {/* Contact Section */}
      <ContactUs />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
