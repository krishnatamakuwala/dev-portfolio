"use client";

import { useEffect, useState } from 'react';
import { ArrowUpward } from '@mui/icons-material';
import styles from '@/app/page.module.css';
import scrollToTopStyles from './ScrollToTop.module.css';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const toggleVisibility = () =>
            window.pageYOffset > 500 ? setIsVisible(true) : setIsVisible(false)

        window.addEventListener('scroll', toggleVisibility)
        return () => window.removeEventListener('scroll', toggleVisibility)
    }, []);

    function handleClick() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }

    return isVisible ? (
        // <div className={`${styles.btn} ${styles.btnPlain} ${scrollToTopStyles.scrollTop}`}>
            <button
                className={`${styles.btn} ${styles.btnPlain} ${scrollToTopStyles.scrollTop}`}
                aria-label='top'
                onClick={handleClick}
            >
                <ArrowUpward />
            </button>
        // </div>
    ) : null
}

export default ScrollToTop
