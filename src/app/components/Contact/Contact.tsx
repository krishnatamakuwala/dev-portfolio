'use client';

import { contact } from '../../portfolio';
import styles from '@/app/page.module.css';
import contactStyles from './Contact.module.css'
import Link from 'next/link';
import { sendGAEvent } from '@/app/utilities/GoogleAnalytics';

const Contact = () => {
    if (!contact.email) return null;

    function handleEmailClick() {
        sendGAEvent({
            action: 'open_or_send_email',
            category: 'Engagement',
            label: `mailto:${contact.email}`,
        });
    }

    return (
        <section className={`${styles.section} ${contactStyles.contact} ${styles.center}`} id='contact'>
            <h2 className={styles.sectionTitle}>Contact</h2>
            <Link href={`mailto:${contact.email}`} onClick={handleEmailClick}>
                <button className={`${styles.btn} ${styles.btnOutline}`}>
                    Email me
                </button>
            </Link>
        </section>
    )
}

export default Contact
