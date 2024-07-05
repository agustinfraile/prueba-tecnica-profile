import styles from "./About.module.css";

const About = () => {
    return (
        <section 
            className={styles.aboutSection}
            id="sobre-mi"
        >
            <h2 className={styles.aboutHeader}>Sobre mí</h2>
            <p className={styles.aboutDescription}>
                Soy un desarrollador web apasionado por crear aplicaciones intuitivas y eficientes. Me especializo en JavaScript, React y Node.js. Siempre estoy aprendiendo nuevas tecnologías y mejorando mis habilidades para ofrecer las mejores soluciones a mis clientes.
            </p>
        </section>
    )
}

export default About;
