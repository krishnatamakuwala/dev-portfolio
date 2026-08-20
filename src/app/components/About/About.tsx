import { GitHub, LinkedIn } from '@mui/icons-material';
import { about } from '../../portfolio';
import Image from 'next/image';
import styles from '@/app/page.module.css';
import aboutStyles from './About.module.css';
import Link from 'next/link';
import { Resume } from './Resume';

const About = () => {
    const { name, role, description, resume, social, picture } = about;

    return (
        <div className={`${aboutStyles.about} ${styles.center}`}>
            <div className={aboutStyles.aboutHeader}>
                {picture && (
                    <Image
                        src={
                            picture.startsWith('http')
                                ? picture
                                : `/images/${picture}`
                        }
                        width={50}
                        height={50}
                        sizes='50vw'
                        alt={name}
                        className={aboutStyles.aboutPicture}
                    />
                )}

                <div className={aboutStyles.aboutIntro}>
                    {name && (
                        <h1>
                            Hi, I am <span className={aboutStyles.aboutName}>{name}.</span>
                        </h1>
                    )}

                    {role && <h2 className={aboutStyles.aboutRole}>A {role}.</h2>}
                    <p className={aboutStyles.aboutDesc}>{description && description}</p>
                </div>
            </div>

            <div className={`${aboutStyles.aboutContact} ${styles.center}`}>
                {resume && (
                    <Resume resume={resume}/>
                )}

                {social && (
                    <>
                        {social.github && (
                            <Link
                                href={social.github}
                                aria-label='github'
                                style={{ marginRight: '0.8em' }}
                                className={`${styles.link} ${styles.linkIcon}`}
                            >
                                <GitHub />
                            </Link>
                        )}

                        {social.linkedin && (
                            <Link
                                href={social.linkedin}
                                aria-label='linkedin'
                                style={{ marginRight: '0.8em' }}
                                className={`${styles.link} ${styles.linkIcon}`}
                            >
                                <LinkedIn />
                            </Link>
                        )}
                    </>
                )}
            </div>
        </div>
    )
}

export default About