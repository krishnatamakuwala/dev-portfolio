"use client";

import { SyntheticEvent, useEffect, useState } from 'react';
import { ArrowUpward } from '@mui/icons-material';
import styles from '@/app/page.module.css';
import { usePathname, useRouter } from 'next/navigation';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        const toggleVisibility = () =>
            window.pageYOffset > 500 ? setIsVisible(true) : setIsVisible(false)

        window.addEventListener('scroll', toggleVisibility)
        return () => window.removeEventListener('scroll', toggleVisibility)
    }, []);

    function handleClick(e: SyntheticEvent) {
        e.preventDefault();

        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });

        router.replace(pathname, { scroll: false });
    }

    return isVisible ? (
        <button
            className={`${styles.btn} ${styles.btnPlain} ${styles.scrollTop}`}
            aria-label='top'
            title='Scroll to top'
            onClick={(e) => handleClick(e)}
        >
            <ArrowUpward />
        </button>
    ) : null
}

export default ScrollToTop
