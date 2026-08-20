"use client";

import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Educations from "./components/Educations/Educations";
import Experiences from "./components/Experiences/Experiences";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Skills from "./components/Skills/Skills";
import { useThemeContext } from "./contexts/ThemeContext";
import { ThemeName } from "./enums/ThemeName";
import styles from "./page.module.css";

export default function Home() {
    const { themeName } = useThemeContext();
    const theme = themeName === ThemeName.dark ? styles.dark : styles.light;
    
    return (
        <div className={`${theme} ${styles.page}`}>
            <Header />

            <main className={styles.main}>
                <About />
                <Educations />
                <Experiences />
                <Projects />
                <Skills />
                <Contact />
            </main>
            
            <ScrollToTop />
            <Footer />
        </div>
    );
}
