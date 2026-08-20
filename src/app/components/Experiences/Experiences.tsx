import { experiences } from '../../portfolio';
import ExperienceContainer from './ExperienceContainer/ExperienceContainer';
import styles from '@/app/page.module.css';
import experienceStyles from './Experiences.module.css';
import experienceContainerStyles from './Experiences.module.css';

const Experiences = () => {
    if (!experiences.length) return null

    return (
        <section id='experiences' className={`${styles.section} ${experienceContainerStyles.experiences}`}>
            <h2 className={styles.sectionTitle}>Experience</h2>

            <div className={experienceStyles.experienceGrid}>
                {experiences.map((experience, i) => (
                    <ExperienceContainer key={i} experience={experience} />
                ))}
            </div>
        </section>
    )
}

export default Experiences
