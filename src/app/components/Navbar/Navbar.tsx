"use client";

import { useState } from 'react';
import { useThemeContext } from '../../contexts/ThemeContext';
import { projects, skills, contact, experiences, educations } from '../../portfolio';
import { Brightness2, Close, Menu, WbSunnyRounded } from '@mui/icons-material';
import styles from '@/app/page.module.css';
import navbarStyles from './Navbar.module.css';
import Link from 'next/link';

const Navbar = () => {
    const { themeName, toggleTheme } = useThemeContext();
    const [showNavList, setShowNavList] = useState(false)

    const toggleNavList = () => setShowNavList(!showNavList)

    return (
        <nav className={`${styles.center} ${styles.nav}`}>
            <ul
                className={`${navbarStyles.navList} ${showNavList ? navbarStyles.show : navbarStyles.hide}`}
            >
                {educations.length ? (
                    <li className={navbarStyles.navListItem}>
                        <Link
                            href='/#educations'
                            onClick={toggleNavList}
                            className={`${styles.link} ${styles.linkNav}`}
                            prefetch={false}
                            title='Educations'
                        >
                            Educations
                        </Link>
                    </li>
                ) : null}

                {experiences.length ? (
                    <li className={navbarStyles.navListItem}>
                        <Link
                            href='/#experiences'
                            onClick={toggleNavList}
                            className={`${styles.link} ${styles.linkNav}`}
                            prefetch={false}
                            title='Experiences'
                        >
                            Experiences
                        </Link>
                    </li>
                ) : null}

                {projects.length ? (
                    <li className={navbarStyles.navListItem}>
                        <Link
                            href='/#projects'
                            onClick={toggleNavList}
                            className={`${styles.link} ${styles.linkNav}`}
                            prefetch={false}
                            title='Projects'
                        >
                            Projects
                        </Link>
                    </li>
                ) : null}

                {skills.length ? (
                    <li className={navbarStyles.navListItem}>
                        <Link
                            href='/#skills'
                            onClick={toggleNavList}
                            className={`${styles.link} ${styles.linkNav}`}
                            prefetch={false}
                            title='Skills'
                        >
                            Skills
                        </Link>
                    </li>
                ) : null}

                {contact.email ? (
                    <li className={navbarStyles.navListItem}>
                        <Link
                            href='/#contact'
                            onClick={toggleNavList}
                            className={`${styles.link} ${styles.linkNav}`}
                            prefetch={false}
                            title='Contact'
                        >
                            Contact
                        </Link>
                    </li>
                ) : null}
            </ul>

            <button
                onClick={toggleTheme}
                className={`${styles.btn} ${styles.btnIcon} ${styles.navTheme}`}
                aria-label='toggle theme'
                title='Toggle theme'
            >
                {themeName === 'dark' ? <WbSunnyRounded /> : <Brightness2 />}
            </button>

            <button
                onClick={toggleNavList}
                className={`${styles.btn} ${styles.btnIcon} ${styles.navHamburger}`}
                aria-label='toggle navigation'
                title='Toggle navigation'
            >
                {showNavList ? <Close /> : <Menu />}
            </button>
        </nav>
    )
}

export default Navbar
