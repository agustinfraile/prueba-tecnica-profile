import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <Link href="/" className={styles.navLink}>Inicio</Link>

            <ul className={styles.navLinks}>
                <li className={styles.navItem}>
                    <Link href="#sobre-mi" className={styles.navLink}>Sobre mí</Link>
                </li>
                <li className={styles.navItem}>
                    <Link href="#intereses" className={styles.navLink}>Intereses</Link>
                </li>
                <li className={styles.navItem}>
                    <Link href="#contacto" className={styles.navLink}>Contacto</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;