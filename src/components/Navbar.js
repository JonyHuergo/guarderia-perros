import styles from '../styles/Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <a href="#banner"><h2 className={styles.navbarTitle}>Navbar</h2></a>
            <div>
                <a href="#about"><button>Acerca de nosotros</button></a>
                <a href="#reviews"><button></button>Testimonios</a>
                <a href="#contact"><button></button>Contacto</a>
            </div>
        </nav>
    );
}
 
export default Navbar;