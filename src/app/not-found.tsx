"use client";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { useThemeContext } from "./contexts/ThemeContext";
import { ThemeName } from "./enums/ThemeName";
import styles from "./page.module.css";
import Link from 'next/link';

export default function NotFound() {
    const { themeName } = useThemeContext();
    const theme = themeName === ThemeName.dark ? styles.dark : styles.light;

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100dvh' }} className={`${theme} ${styles.page}`}>
            <Header />

            <main style={{ flexGrow: 1 }} className={`${styles.main} ${styles.notFound}`}>
                <h2>
                    404
                </h2>
                <p>
                    Oops! The page you are looking for does not exist.
                </p>
                <Link
                    href="/"
                    className={`${styles.link} ${styles.linkNav}`}
                    title="Return to portfolio"
                >
                    Return to Portfolio
                </Link>
            </main>
            <Footer />
        </div>
    )
}
