"use client";
import { useState } from 'react';
import styles from './Navbar.module.css';
import Link from 'next/link';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleSmoothScroll = (e, targetId) => {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
        setIsOpen(false);
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.navHeader}>
                <button className={styles.hamburger} onClick={toggleMenu}>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                </button>
            </div>
            <ul className={`${styles.navLinks} ${isOpen ? styles.navLinksOpen : ''}`}>
                <li className={styles.navItem}>
                    <Link 
                        href="#inicio" 
                        className={styles.navLink} 
                        onClick={(e) => handleSmoothScroll(e, "#inicio")}
                    >
                        Inicio
                    </Link>
                </li>
                <li
                    className={styles.navItem}>
                    <Link 
                        href="#sobre-mi" 
                        
                        className={styles.navLink} 
                        onClick={(e) => handleSmoothScroll(e, "#sobre-mi")}
                    >
                        Sobre mí
                    </Link>
                </li>
                <li className={styles.navItem}>
                    <Link 
                        href="#intereses" 
                        className={styles.navLink} 
                        onClick={(e) => handleSmoothScroll(e, "#intereses")}
                    >
                        Intereses
                    </Link>
                </li>
                <li className={styles.navItem}>
                    <Link 
                        href="#contacto" 
                        className={styles.navLink} 
                        onClick={(e) => handleSmoothScroll(e, "#contacto")}
                    >
                        Contacto
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
