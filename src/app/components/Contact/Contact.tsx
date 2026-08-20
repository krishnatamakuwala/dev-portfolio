import { contact } from '../../portfolio';
import styles from '@/app/page.module.css';
import contactStyles from './Contact.module.css'
import Link from 'next/link';

const Contact = () => {
    if (!contact.email) return null

    return (
        <section className={`${styles.section} ${contactStyles.contact} ${styles.center}`} id='contact'>
            <h2 className={styles.sectionTitle}>Contact</h2>
            <Link href={`mailto:${contact.email}`}>
                <button className={`${styles.btn} ${styles.btnOutline}`}>
                    Email me
                </button>
            </Link>
        </section>
    )
}

export default Contact
