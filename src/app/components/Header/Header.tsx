import { header } from '../../portfolio';
import Navbar from '../Navbar/Navbar';
import styles from '@/app/page.module.css';
import headerStyles from './Header.module.css';
import Link from 'next/link';

const Header = () => {
    return (
        <header className={`${headerStyles.header} ${styles.center}`}>
            <meta name="apple-mobile-web-app-title" content="Krishna Tamakuwala | Portfolio" />
            <h3>
                {header.homepage ? (
                    <Link href={header.homepage} className={styles.link}>
                        {header.title}
                    </Link>
                ) : (
                    header.title
                )}
            </h3>
            <Navbar />
        </header>
    )
}

export default Header
