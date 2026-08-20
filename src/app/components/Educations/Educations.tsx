import { educations } from '../../portfolio';
import EducationContainer from './EducationContainer/EducationContainer';
import styles from '@/app/page.module.css';
import educationStyles from './Educations.module.css';
import educationContainerStyles from './EducationContainer/EducationContainer.module.css';

const Educations = () => {
    if (!educations.length) return null

    return (
        <section id='educations' className={`${styles.section} ${educationContainerStyles.educations}`}>
            <h2 className={styles.sectionTitle}>Educations</h2>

            <div className={educationStyles.EducationGrid}>
                {educations.map((education, i) => (
                    <EducationContainer key={i} education={education} />
                ))}
            </div>
        </section>
    )
}

export default Educations
