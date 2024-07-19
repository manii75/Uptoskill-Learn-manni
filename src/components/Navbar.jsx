import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faAngleDown, faTimes, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import Courses from './NavComponents/Courses';
import Compiler from './NavComponents/Compiler';

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [navColor, setNavColor] = useState('bg-gray-900 text-white');
    const [coursesVisible, setcoursesVisible] = useState(false)
    const [compilerVisible, setcompilerVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setNavColor('bg-white text-black');
            } else {
                setNavColor('bg-gray-900 text-white');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    function handleCompilerVisible(){
        setcoursesVisible(false)
        setcompilerVisible(!compilerVisible)
    }

    function handleCourseVisible(){
        setcompilerVisible(false)
        setcoursesVisible(!coursesVisible)
    }

    return (
        <nav className={`flex ${navColor} transition-all item-center m-auto lg:justify-around md:justify-between sm:justify-between justify-between md:p-5 gap-10 py-3 fixed w-full`}>
            {/* Menu for large screen */}
            <div className='flex items-center justify-center lg:gap-10 md:gap-10'>
                <h2 className='font-bold text-3xl'>
                    <span className='text-orange-500'>Upto</span>
                    <span className='text-blue-600'>skill</span>
                </h2>
            </div>

            {/* Menu for other screens */}
            <div className={`lg:hidden border-b ${navColor} ${mobileMenuOpen ? 'md:block sm:block block' : 'md:hidden sm:hidden hidden'} absolute left-0 top-16 w-full`}>
                <ul className='p-5'>
                    <li className='py-3 font-bold'>
                        <a href="#">Products</a>
                    </li>

                    <li className='py-3 font-bold'>
                        <a href="#">Courses </a>
                        <FontAwesomeIcon icon={faAngleDown} />
                    </li>

                    <li className='py-3 font-bold'>
                        <a href="#">CodeCompiler <FontAwesomeIcon icon={faAngleDown} className='text-lg' /></a>
                    </li>

                    <li className='py-3 font-bold'>
                        <a href="#">Discuss</a>
                    </li>

                    <li className='py-3 font-bold'>
                        <a href="#">Team</a>
                    </li>
                </ul>
            </div>

            <div className='hidden md:hidden sm:hidden lg:flex gap-5'>
                <ul className=' relative gap-2 lg:gap-5 hidden text-lg md:hidden sm:hidden lg:flex'>
                    <li onClick={handleCourseVisible}><a href="#">Courses <FontAwesomeIcon icon={coursesVisible? faAngleUp : faAngleDown}  /></a></li>
                 
                    {
                        coursesVisible ? <Courses/> : null  
                    }
                    <li onClick={handleCompilerVisible}><a href="#">CodeCompiler <FontAwesomeIcon icon={compilerVisible? faAngleUp : faAngleDown} /></a></li>
                   
                    {

                        compilerVisible ? <Compiler/> : null

                    }
                    <li><a href="#">Discuss</a></li>
                    <li><a href="#">Team</a></li>
                </ul>
                <button className={`py-2 px-5 border border-blue-500 rounded capitalize ${navColor} mr-2 font-bold text-sm`}>Login</button>
                <button className='py-2 px-5 bg-blue-500 rounded capitalize font-bold text-sm'>Register</button>
            </div>

            <FontAwesomeIcon icon={!mobileMenuOpen ? faBars : faTimes} className='lg:hidden block mt-2 text-lg' onClick={() => setMobileMenuOpen(!mobileMenuOpen)} />
        </nav>
    );
};

export default Navbar;
