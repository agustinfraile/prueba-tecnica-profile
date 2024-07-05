import styles from './Interests.module.css';

const Interests = () => {
    return (
        <section 
            className={styles.interestsSection}
            id="intereses"
        >
            <h2 className={styles.interestsHeader}>Mis intereses</h2>
            <div className={styles.interestsGrid}>
                <div className={styles.interestItem}>
                    <h3>Desarrollo Web</h3>
                    <p>Crear aplicaciones web modernas y eficientes.</p>
                </div>
                <div className={styles.interestItem}>
                    <h3>Inteligencia Artificial</h3>
                    <p>Explorar algoritmos y aplicaciones de IA.</p>
                </div>
                <div className={styles.interestItem}>
                    <h3>Ciclismo</h3>
                    <p>Disfrutar de paseos en bicicleta y la naturaleza.</p>
                </div>
                <div className={styles.interestItem}>
                    <h3>Lectura</h3>
                    <p>Leer libros de diversos géneros y autores.</p>
                </div>
                <div className={styles.interestItem}>
                    <h3>Viajar</h3>
                    <p>Conocer nuevas culturas y lugares.</p>
                </div>
            </div>
        </section>
    )
}

export default Interests;

