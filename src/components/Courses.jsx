import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretRight } from '@fortawesome/free-solid-svg-icons';

const Courses = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleSubmenu = () => {
    setSubmenuOpen(!submenuOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">
          <a href="#">
            <img src="/path-to-your-logo.png" alt="Logo" className="h-8 inline-block" />
          </a>
        </div>
        <ul className="hidden md:flex space-x-4 text-white">
          <li className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center hover:text-gray-400 focus:outline-none"
            >
              Courses <FontAwesomeIcon icon={faCaretDown} className="ml-2" />
            </button>
            {isOpen && (
              <div className="absolute top-full mt-2 right-0 bg-gray-800 text-white shadow-lg rounded-md w-48 md:w-64">
                <ul className="p-4 space-y-2">
                  <li className="relative">
                    <button
                      onClick={toggleSubmenu}
                      className="flex items-center w-full text-left hover:text-gray-400 focus:outline-none"
                    >
                      Full learning paths <FontAwesomeIcon icon={faCaretRight} className="ml-2" />
                    </button>
                    {submenuOpen && (
                      <div className="absolute left-full top-0 ml-2 bg-gray-700 text-white shadow-lg rounded-md w-48">
                        <ul className="p-2 space-y-2">
                          <li><a href="#" className="block hover:text-gray-400">Web Development</a></li>
                          <li><a href="#" className="block hover:text-gray-400">Python Developer</a></li>
                          <li><a href="#" className="block hover:text-gray-400">Coding Foundations</a></li>
                          <li><a href="#" className="block hover:text-gray-400">Coding for Data</a></li>
                          <li><a href="#" className="block hover:text-gray-400">Front-end for Beginners</a></li>
                        </ul>
                      </div>
                    )}
                  </li>
                  <li>
                    <a href="#" className="flex items-center hover:text-gray-400">
                      Programming languages <FontAwesomeIcon icon={faCaretRight} className="ml-2" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center hover:text-gray-400">
                      Generative AI <FontAwesomeIcon icon={faCaretRight} className="ml-2" />
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </li>
        </ul>
        <button className="md:hidden text-white focus:outline-none" onClick={toggleDropdown}>
          <FontAwesomeIcon icon={faCaretDown} />
        </button>
        {isOpen && (
          <div className="md:hidden absolute top-16 right-0 bg-gray-800 text-white shadow-lg rounded-md  w-48">
            <ul className="p-4 space-y-2">
              <li className="relative">
                <button
                  onClick={toggleSubmenu}
                  className="flex items-center w-full text-left hover:text-gray-400 focus:outline-none"
                >
                  Full learning paths <FontAwesomeIcon icon={faCaretRight} className="ml-2" />
                </button>
                {submenuOpen && (
                  <div className="absolute left-full top-0 ml-2  bg-gray-700 text-white shadow-lg rounded-md w-48">
                    <ul className="p-2 space-y-2">
                      <li><a href="#" className="block hover:text-gray-400">Web Development</a></li>
                      <li><a href="#" className="block hover:text-gray-400">Python Developer</a></li>
                      <li><a href="#" className="block hover:text-gray-400">Coding Foundations</a></li>
                      <li><a href="#" className="block hover:text-gray-400">Coding for Data</a></li>
                      <li><a href="#" className="block hover:text-gray-400">Front-end for Beginners</a></li>
                    </ul>
                  </div>
                )}
              </li>
              <li>
                <a href="#" className="flex items-center hover:text-gray-400">
                  Programming languages <FontAwesomeIcon icon={faCaretRight} className="ml-2" />
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center hover:text-gray-400">
                  Generative AI <FontAwesomeIcon icon={faCaretRight} className="ml-2" />
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Courses;
