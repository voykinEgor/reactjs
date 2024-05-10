import styles from './Header.module.scss';

const Header = () => {
    return(
        <div>
            <header className={styles.header}>
                <h1>
                    Web application
                </h1>
                <p>description</p>
            </header>
            <nav className={styles.nav}>
                <a href="/">Home</a>
                <a href="/catalog">Catalog</a>
                <a href="/about">About</a>
                <a href="/productlistapi">Api</a>
                <a href="/wearlistapi">Wears Api</a>
                <a href="/spacexapi">SpaceX Api</a>
                
            </nav>
        </div>
    );
}

export default Header;