import styles from '../styles/Banner.module.css'

const Banner = () => {
    return (
        <header className={styles.banner}>
            <img src="/banner-img.jpg" alt="Banner" className={styles.bannerImg}/>
            <div className={styles.bannerText}>
                <h1>El mejor lugar para tu perro</h1>
            </div>
        </header>
    );
}
 
export default Banner;