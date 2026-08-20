import { header } from '../../portfolio';
import Navbar from '../Navbar/Navbar';
import styles from '@/app/page.module.css';
import headerStyles from './Header.module.css';

const Header = () => {
    return (
        <header className={`${headerStyles.header} ${styles.center}`}>
            <meta name="apple-mobile-web-app-title" content="Krishna Tamakuwala | Portfolio" />
            <h3>
                {header.homepage ? (
                    <a href={header.homepage} className={styles.link}>
                        {header.title}
                    </a>
                ) : (
                    header.title
                )}
            </h3>
            <Navbar />
        </header>
    )
}

export default Header
