import styles from '../styles/Banner.module.css'

const Banner = () => {
    return (
        <header className={styles.banner} id='banner'>
            <img src="/banner-img.jpg" alt="Banner" className={styles.bannerImg}/>
            <div className={styles.bannerText}>
                <h2>El mejor lugar para tu perro</h2>
            </div>
        </header>
    );
}
 
export default Banner;