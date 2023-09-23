import styles from '../styles/About.module.css'

const About = () => {
    return (
        <section className={styles.about}>
            <div className={styles.aboutRow}>
                <div>
                    <h2>Texto Importante 1</h2>
                    <p>Texto</p>
                </div>
                <img src="/white-dog.jpg" alt="Cachorro blanco sobre fondo celeste" />
            </div>
            <div className={styles.aboutRow}>
                <img src="/pink-dog.jpg" alt="Caniche sobre fondo rosa" />
                <div>
                    <h2>Texto Importante 1</h2>
                    <p>Texto</p>
                </div>
            </div>
        </section>
    );
}
 
export default About;