import { projects } from '../../portfolio';
import ProjectContainer from './ProjectContainer/ProjectContainer';
import styles from '@/app/page.module.css';
import projectStyle from './Projects.module.css';
import projectContainerStyles from './ProjectContainer/ProjectContainer.module.css';

const Projects = () => {
    if (!projects.length) return null;

    return (
        <section id='projects' className={`${styles.section} ${projectContainerStyles.projects}`}>
            <h2 className={styles.sectionTitle}>Projects</h2>

            <div className={projectStyle.projectsGrid}>
                {projects.map((project, i) => (
                    <ProjectContainer key={i} project={project} />
                ))}
            </div>
        </section>
    )
}

export default Projects
