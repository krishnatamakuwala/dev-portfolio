import { GitHub, Launch } from '@mui/icons-material';
import { IProject } from '@/app/portfolio';
import Image from 'next/image';
import styles from '@/app/page.module.css';
import projectContainerStyles from './ProjectContainer.module.css';
import Link from 'next/link';

const ProjectContainer = ({ project }: { project: IProject }) => (
    <div className={projectContainerStyles.project}>
        {project.image && (
            <div className={projectContainerStyles.projectImgContainer} style={{ position: 'relative', width: '50%', aspectRatio: '1/1' }}>
                <Image
                    src={
                        project.image.startsWith("http")
                            ? project.image
                            : `/images/${project.image}`
                    }
                    alt={`${project.name} screenshot`}
                    fill
                    sizes='50vw'
                    style={{ objectFit: 'cover', clipPath: project.imageClipped ? 'circle(50%)' : 'none' }}
                />
            </div>
        )}

        <h3>{project.name}</h3>

        <ul className={projectContainerStyles.projectDescription}>
            {project.description.map((item, i) => (
                <li key={i} className={projectContainerStyles.projectDescriptionItem}>
                    <p className={projectContainerStyles.projectDescription}>{item}</p>
                </li>
            ))}
        </ul>
        {project.stack && (
            <ul className={projectContainerStyles.projectStack}>
                {project.stack.map((item, i) => (
                    <li key={i} className={projectContainerStyles.projectStackItem}>
                        {item}
                    </li>
                ))}
            </ul>
        )}

        <div className={projectContainerStyles.projectLinkContainer}>
            {project.sourceCode && (
                <Link
                    href={project.sourceCode}
                    aria-label='source code'
                    style={{ marginLeft: '0.5em' }}
                    className={`${styles.link} ${styles.linkIcon}`}
                >
                    <GitHub />
                </Link>
            )}

            {project.livePreview && (
                <Link
                    href={project.livePreview}
                    aria-label='live preview'
                    style={{ marginLeft: '0.5em' }}
                    className={`${styles.link} ${styles.linkIcon}`}
                >
                    <Launch />
                </Link>
            )}
        </div>
    </div>
)

export default ProjectContainer
