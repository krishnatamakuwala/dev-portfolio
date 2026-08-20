import footerStyles from './Footer.module.css';

const Footer = () => (
    <footer className={footerStyles.footer}>
        <p>&copy; {new Date().getFullYear()} Krishna Tamakuwala. Code released under the <a href="/LICENSE.md" target="_blank" rel="noopener noreferrer" title='MIT license'>MIT License</a>.</p>
    </footer>
)

export default Footer
