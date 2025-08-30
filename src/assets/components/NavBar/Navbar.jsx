import React from "react";

const Navbar = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <>
      <nav className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <div className="font-medium text-lg">Inventure</div>
            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-8">
              <a
                href="#home"
                className="text-gray-600 hover:text-black transition-colors"
              >
                Home
              </a>
              <a
                href="#platform"
                className="text-gray-600 hover:text-black transition-colors"
              >
                Platform
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-black transition-colors"
              >
                Contact
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span
                  className={`h-0.5 w-full bg-black transition-all ${
                    isMenuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                ></span>
                <span
                  className={`h-0.5 w-full bg-black transition-all ${
                    isMenuOpen ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`h-0.5 w-full bg-black transition-all ${
                    isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                ></span>
              </div>
            </button>
          </div>

          {/* Mobile Nav */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-200 py-4">
              <div className="flex flex-col space-y-4">
                <a
                  href="#home"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  Home
                </a>
                <a
                  href="#platform"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  Platform
                </a>
                <a
                  href="#contact"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};
export default Navbar;
