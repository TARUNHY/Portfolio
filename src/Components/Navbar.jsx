import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="container mx-5 bg-gray-900 text-white  ">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-between p-2 rounded-md text-white  focus:outline-none "
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger menu icon */}
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Close menu icon */}
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          {/* Navbar title and links */}
          <div className="flex items-center justify-between w-full">
            <div className="flex-shrink-0">
              <h3 className="text-3xl font-mono  sm:text-center">Portfolio</h3>
            </div>
            <div className="hidden sm:flex sm:items-center sm:ml-6">
              <div className="flex space-x-8 ml-4">
                <a href="#home" className="text-lg hover:text-blue-500 hove">
                  Home
                </a>
                <a href="#skills" className="text-lg hover:text-blue-500 hove">
                  Skills
                </a>
                <a href="#projects" className="text-lg hover:text-blue-500 hove">
                  Projects
                </a>
                <a href="#contact" className="text-lg hover:text-blue-500 hove">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a href="#home" className="text-lg hover:text-blue-500 block" onClick={toggleMenu}>
            Home
          </a>
          <a href="#skills" className="text-lg hover:text-blue-500 block" onClick={toggleMenu}>
            Skills
          </a>
          <a href="#projects" className="text-lg hover:text-blue-500 block" onClick={toggleMenu}>
            Projects
          </a>
          <a href="#contact" className="text-lg hover:text-blue-500 block" onClick={toggleMenu}>
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
