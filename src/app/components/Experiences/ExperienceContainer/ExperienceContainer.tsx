import Image from 'next/image';
import { IExperience } from '@/app/portfolio';
import experienceContainerStyles from './ExperienceContainer.module.css';

const ExperienceContainer = ({ experience }: { experience: IExperience }) => (
    <div className={experienceContainerStyles.experience}>
        <div className={experienceContainerStyles.experienceCompany}>
            {experience.image && (
                <div style={{ position: 'relative', width: '50%', aspectRatio: '1/1' }}>
                    <Image
                        src={
                            experience.image.startsWith("http")
                                ? experience.image
                                : `/images/${experience.image}`
                        }
                        alt={`${experience.name} screenshot`}
                        fill
                        sizes='50vw'
                        style={{ objectFit: 'cover', clipPath: experience.imageClipped ? 'circle(50%)' : 'none' }}
                    />
                </div>
            )}

            <h3>{experience.name}</h3>
            <i>{experience.location}</i>
            <h5>{experience.role}</h5>
            <i>{experience.startDate} - {experience.endDate ?? 'current'}</i>
        </div>

        <div className={experienceContainerStyles.experienceDescription}>
            <ul className={experienceContainerStyles.experienceDescriptionList}>
                {experience.description.map((item, i) => (
                    <li key={i} className={experienceContainerStyles.experienceDescriptionItem}>
                        <p>{item}</p>
                    </li>
                ))}
            </ul>
            {experience.stack && (
                <ul className={experienceContainerStyles.experienceStack}>
                    {experience.stack.map((item, i) => (
                        <li key={i} className={experienceContainerStyles.experienceStackItem}>
                            {item}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    </div>
)

export default ExperienceContainer
