'use client'

import { useState, useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
    const [windowWidth, setWindowWidth] = useState(0);
    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }
        
        window.addEventListener("resize", handleResize);
        
        handleResize();
        
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    const toggleMenu = () => {
        showMenu ? setShowMenu(false) : setShowMenu(true) 
    };
    return (
        <nav className={styles.navbarContainer}>
            {windowWidth > 800 ?
                <div className={styles.navbar}>
                    <div>
                        <a href="#banner" className={styles.logo}><h1>AMELIE</h1></a>
                    </div>
                    <div className={styles.navbarLinks}>
                        <div>
                            <a href="">Contacto</a>
                            <a href="#reviews">Testimonios</a>
                            <a href="#about">Acerca de nosotros</a>
                        </div>
                    </div>
                </div>
            :
                <div className={styles.navbarLinksMobile}>
                    <div>
                        <span className={styles.dropMenuIcon} onClick={toggleMenu}><AiOutlineMenu/></span>
                    </div>
                    <div className={showMenu? styles.dropMenu : styles.hide}> 
                        <span><a href="#about">Acerca de nosotros</a></span>
                        <span><a href="#reviews">Testimonios</a></span>
                        <span><a href="">Contacto</a></span>
                    </div>      
                </div>
            }
        </nav>
    );
}
 
export default Navbar;