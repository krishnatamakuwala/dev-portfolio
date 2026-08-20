import Image from 'next/image';
import { IEducation } from '@/app/portfolio';
import educationContainerStyles from './EducationContainer.module.css';

const EducationContainer = ({ education }: { education: IEducation }) => (
    <div className={educationContainerStyles.education}>
        <div className={educationContainerStyles.educationItem}>
            {education.image && (
                <div style={{ position: 'relative', width: '50%', aspectRatio: '1/1' }}>
                    <Image
                        src={
                            education.image.startsWith("http")
                                ? education.image
                                : `/images/${education.image}`
                        }
                        alt={`${education.name} screenshot`}
                        fill
                        sizes='50vw'
                        style={{ objectFit: 'cover', clipPath: education.imageClipped ? 'circle(50%)' : 'none' }}
                    />
                </div>
            )}

            <h3>{education.name}</h3>
            <i>{education.location}</i>
            <i>{education.startDate} - {education.endDate ?? 'pursuing'}</i>
        </div>

        <div className={educationContainerStyles.educationDescription}>
            <ul className={educationContainerStyles.educationDescriptionList}>
                {education.description.map((item, i) => (
                    <li key={i} className={educationContainerStyles.educationDescriptionItem}>
                        <p>{item}</p>
                    </li>
                ))}
            </ul>
        </div>
    </div>
)

export default EducationContainer
