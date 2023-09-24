import styles from '../styles/About.module.css'

const About = () => {
    return (
        <section className={styles.about} id='about'>
            <div className={styles.aboutRow}>
                <div className={styles.aboutTextContainer}>
                    <h2 className={styles.aboutTextTitle}>Texto Importante 1</h2>
                    <p className={styles.aboutText}>Texto</p>
                </div>
                <img className={styles.aboutImg} src="/white-dog.jpg" alt="Cachorro blanco sobre fondo celeste" />
            </div>
            <div className={styles.aboutRow}>
                <img className={styles.aboutImg} src="/pink-dog.jpg" alt="Caniche sobre fondo rosa" />
                <div className={styles.aboutTextContainer}>
                    <h2 className={styles.aboutTextTitle}>Texto Importante 2</h2>
                    <p className={styles.aboutText}>Texto</p>
                </div>
            </div>
        </section>
    );
}
 
export default About;