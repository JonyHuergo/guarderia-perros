import styles from '../styles/Reviews.module.css'

const Reviews = () => {
    return (
        <section className={styles.reviews} id='reviews'>
            <h2 className={styles.reviewsTitle}>TESTIMONIOS</h2>
            <div className={styles.reviewsContainer}>
                <div className={styles.review}>
                    <div className={styles.reviewPhotosContainer}>
                        <img src="/white-dog.jpg" alt="" />
                        <img src="/white-dog.jpg" alt="" />
                    </div>
                    <h3 className={styles.reviewName}>Nombre Cliente y Nombre Perro</h3>
                    <p className={styles.reviewText}>Texto reseña</p>
                </div>
                <div className={styles.review}>
                    <div className={styles.reviewPhotosContainer}>
                        <img src="/white-dog.jpg" alt="" />
                        <img src="/white-dog.jpg" alt="" />
                    </div>
                    <h3 className={styles.reviewName}>Nombre Cliente y Nombre Perro</h3>
                    <p className={styles.reviewText}>Texto reseña</p>
                </div>
                <div className={styles.review}>
                    <div className={styles.reviewPhotosContainer}>
                        <img src="/white-dog.jpg" alt="" />
                        <img src="/white-dog.jpg" alt="" />
                    </div>
                    <h3 className={styles.reviewName}>Nombre Cliente y Nombre Perro</h3>
                    <p className={styles.reviewText}>Texto reseña</p>
                </div>
            </div>
            <img className={styles.bottomImg} src="/white-dog.jpg" alt="" />
        </section>
    );
}
 
export default Reviews;