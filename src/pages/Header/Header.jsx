import styles from './Header.module.css';

import profilePic from '../../assets/image-profile.png'
import Image from 'next/image';
import About from '../About/About';

const Header = () => {
    return (
        <section className={styles.headerSection}>
            <div className={styles.profileContainer}>
            <Image src={profilePic} alt="Profile" className={styles.profileImage}  />
                <h2 className={styles.userName}>Pedro Gonzalez</h2>
            </div>
        </section>
    )
}

export default Header;
