'use client';

import Link from "next/link";
import styles from '@/app/page.module.css';
import { sendGAEvent } from "@/app/utilities/GoogleAnalytics";

export const Resume = ({ resume }: { resume: string }) => {

    function handleResumeClick() {
        sendGAEvent({
            action: 'download_or_view_resume',
            category: 'Engagement',
            label: 'PDF Version 2026',
        });
    }

    return (
        <Link
            href={resume.startsWith('http')
                ? resume
                : `/files/${resume}`
            }
            onClick={handleResumeClick}
        >
            <button style={{ marginRight: '1em' }} className={`${styles.btn} ${styles.btnOutline}`}>
                Resume
            </button>
        </Link>
    )
}