"use client";
import { useState } from 'react';
import styles from './Navbar.module.css';
import Link from 'next/link';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
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
                    <Link href="/" className={styles.navLink}>
                        Inicio
                    </Link>
                </li>
                <li className={styles.navItem}>
                    <Link href="#sobre-mi" className={styles.navLink}>
                        Sobre mí
                    </Link>
                </li>
                <li className={styles.navItem}>
                    <Link href="#intereses" className={styles.navLink}>
                        Intereses
                    </Link>
                </li>
                <li className={styles.navItem}>
                    <Link href="#contacto" className={styles.navLink}>
                        Contacto
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;

