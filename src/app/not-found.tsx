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

            <main style={{ flexGrow: 1 }} className={styles.main}>
                <h2 className="text-6xl font-bold text-gray-900 dark:text-white mb-4">
                    404
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                    Oops! The page you are looking for does not exist.
                </p>
                <br />
                <Link
                    href="/"
                    className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700"
                >
                    Return to Portfolio
                </Link>
            </main>
            <Footer />
        </div>
    )
}
