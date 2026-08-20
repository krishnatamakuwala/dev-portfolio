import Link from 'next/link';
import footerStyles from './Footer.module.css';

const Footer = () => (
    <footer className={footerStyles.footer}>
        <p>&copy; {new Date().getFullYear()} Krishna Tamakuwala. Code released under the 
            <Link href="LICENSE.md" target="_blank" rel="noopener noreferrer">MIT License</Link>.</p>
    </footer>
)

export default Footer
