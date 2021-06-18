import React, { useState, useEffect } from 'react';
import './NavBar.css';
import {Link} from "react-router-dom";
import { MdFingerprint } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from 'react-icons/lib';

import { Button } from '../Button.js'

const NavBar = () => {
    const [click, setClick] = useState(false); // If false, show hamburger. If true, show 'x' icon.
    const [button, setButton] = useState(true); // True if hamburger menu is in webapp mode and false if hamburger menu is in mobile mode

    const handleClick = () => setClick(!click); // toggle click to be true or false.
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    }

    useEffect(() => {
       showButton();
        // Add an event listener so that everytime the window changes size, we call the showButton function.
        // I put it in here so we can reduce memory usage/leaks.
        window.addEventListener('resize', showButton);
        return () => {
            window.removeEventListener('resize', showButton);
        }
    }, []);

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}> {/* We are essentially adding a global style? */}
                <nav className="navbar">
                    <div className="navbar-container container">
                        <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                            <MdFingerprint className="navbar-icon" />
                            HALLO
                        </Link>
                        <div className="menu-icon" onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </div>
                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li className='nav-item'>
                                <Link to="/" className='nav-links' onClick={closeMobileMenu}>
                                    Home
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to="/services" className='nav-links' onClick={closeMobileMenu}>
                                    Services
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to="/products" className='nav-links' onClick={closeMobileMenu}>
                                    Products
                                </Link>
                            </li>
                            <li className='nav-btn'>
                                {button ? (
                                    <Link to='/sign-up' className='btn-link'>
                                        <Button buttonStyle='btn--outline'>SIGN UP</Button>
                                    </Link>
                                ) : (
                                    <Link to='/sign-up' className='btn-link'>
                                        <Button buttonStyle='btn--outline'
                                                buttonSize='btn--mobile'
                                                onClick={closeMobileMenu}
                                        >
                                            SIGN UP
                                        </Button>
                                    </Link>
                                )}
                            </li>
                        </ul>
                    </div>
                </nav>
            </IconContext.Provider>
        </>
    );
}

export default NavBar;


// *********** Tutorial Source Code ************

// import React, { useState, useEffect } from 'react';
// import './NavBar.css';
// import {Link} from "react-router-dom";
// import { MdFingerprint } from "react-icons/md";
// import { FaBars, FaTimes } from "react-icons/fa";
// import { IconContext } from 'react-icons/lib';
//
// import { Button } from '../Button.js'
//
// function Navbar() {
//     const [click, setClick] = useState(false);
//     const [button, setButton] = useState(true);
//
//     const handleClick = () => setClick(!click);
//     const closeMobileMenu = () => setClick(false);
//
//     const showButton = () => {
//         if (window.innerWidth <= 960) {
//             setButton(false);
//         } else {
//             setButton(true);
//         }
//     };
//
//     window.addEventListener('resize', showButton);
//
//
//     useEffect(() => {
//         showButton();
//     }, []);
//
//
//     return (
//         <>
//             <IconContext.Provider value={{ color: '#fff' }}>
//                 <nav className='navbar'>
//                     <div className='navbar-container container'>
//                         <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
//                             <MdFingerprint className='navbar-icon' />
//                             LAVISH
//                         </Link>
//                         <div className='menu-icon' onClick={handleClick}>
//                             {click ? <FaTimes /> : <FaBars />}
//                         </div>
//                         <ul className={click ? 'nav-menu active' : 'nav-menu'}>
//                             <li className='nav-item'>
//                                 <Link to='/' className='nav-links' onClick={closeMobileMenu}>
//                                     Home
//                                 </Link>
//                             </li>
//                             <li className='nav-item'>
//                                 <Link
//                                     to='/services'
//                                     className='nav-links'
//                                     onClick={closeMobileMenu}
//                                 >
//                                     Services
//                                 </Link>
//                             </li>
//                             <li className='nav-item'>
//                                 <Link
//                                     to='/products'
//                                     className='nav-links'
//                                     onClick={closeMobileMenu}
//                                 >
//                                     Products
//                                 </Link>
//                             </li>
//                             <li className='nav-btn'>
//                                 {button ? (
//                                     <Link to='/sign-up' className='btn-link'>
//                                         <Button buttonStyle='btn--outline'>SIGN UP</Button>
//                                     </Link>
//                                 ) : (
//                                     <Link to='/sign-up' className='btn-link'>
//                                         <Button
//                                             buttonStyle='btn--outline'
//                                             buttonSize='btn--mobile'
//                                             onClick={closeMobileMenu}
//                                         >
//                                             SIGN UP
//                                         </Button>
//                                     </Link>
//                                 )}
//                             </li>
//                         </ul>
//                     </div>
//                 </nav>
//             </IconContext.Provider>
//         </>
//     );
// }
//
// export default Navbar;
