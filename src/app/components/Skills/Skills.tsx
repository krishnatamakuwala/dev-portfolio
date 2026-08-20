import { skills } from '../../portfolio'
import styles from '@/app/page.module.css';
import skillStyles from './Skills.module.css';

const Skills = () => {
    if (!skills.length) return null

    return (
        <section className={`${styles.section} ${styles.skills}`} id='skills'>
            <h2 className={styles.sectionTitle}>Skills</h2>
            <ul className={skillStyles.skillsList}>
                {skills.map((skill, i) => (
                    <li key={i} className={`${skillStyles.skillsListItem} ${styles.btn} ${styles.btnPlain}`}>
                        {skill}
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Skills
