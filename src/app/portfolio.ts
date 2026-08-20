const header: IHeader = {
    // all the properties are optional - can be left empty or deleted
    homepage: 'https://github.com/krishnatamakuwala',
    title: 'KT.',
}

const about: IAbout = {
    // all the properties are optional - can be left empty or deleted
    name: 'Krishna Tamakuwala',
    role: 'Software Engineer - Distributed System',
    picture: 'krishna.jpg',
    description:
        'Recent Master of Information Technology graduate from Whitecliffe College, with prior commercial experience building distributed backend systems in a production environment. Looking for a graduate or early-career software engineering role in New Zealand where I can contribute technically, keep learning, and grow with a team over the long term.',
    resume: 'Krishna Tamakuwala Resume.pdf',
    social: {
        linkedin: 'https://linkedin.com',
        github: 'https://github.com',
    },
}

const educations: IEducation[] = [
    // educations can be added an removed
    // if there are no educations, Educations section won't show up
    {
        name: 'Master of Information Technology',
        location: 'Whitecliffe College, New Zealand',
        startDate: 'November 2024',
        endDate: 'April 2026',
        description: [
            'Core Focus: Cybersecurity, Cloud Infrastructure, Data Analysis, and Information Security Standards',
        ],
        image: 'whitecliffe.jpg',
        imageClipped: true
    },
    {
        name: 'Bachelor of Computer Science',
        location: 'Gujarat Technological University, India',
        startDate: 'July 2019',
        endDate: 'May 2023',
        description: [
            'Core Focus: Software Development (.NET C#, Java, JavaScript), Databases, Networking, Data Science, and Machine Learning',
        ],
        image: 'gtu.png',
        imageClipped: true
    },
]

const experiences: IExperience[] = [
    // experiences can be added an removed
    // if there are no experiences, Experiences section won't show up
    {
        name: 'Casepoint Pvt. Ltd.',
        role: 'Software Developer',
        location: 'India',
        startDate: 'July 2023',
        endDate: 'September 2024',
        description: [
            'Contributed to development and maintenance of high-performance enterprise applications used by large-scale clients.',
            'Worked on distributed automation systems for scheduled task execution across clustered environments, improving operational reliability and reducing manual intervention.',
            'Built backend services in C# (.NET) integrated with PostgreSQL, Redis, and RabbitMQ to support asynchronous and message-driven workflows.',
            'Refactored processing logic into independent microservices, improving response time by approximately 1.5 seconds in critical workflows.',
            'Developed internal automation tools including a database Script Executor and FOIA auto-scheduler, reducing DevOps effort and improving execution speed by ~40%.',
            'Participated in Agile Scrum, peer code reviews, and CI/CD pipelines via Azure DevOps; diagnosed and resolved production incidents across distributed systems.',

        ],
        stack: ['.NET C#', 'PostgreSQL', 'Redis', 'RabbitMQ', 'ElasticSearch', 'Azure DevOps', 'HTML', 'CSS', 'Kendo UI', 'CI/CD', 'TDD', 'Unit Testing', 'OWASP', 'SDLC'],
        image: 'casepoint.avif',
        imageClipped: true
    },
    {
        name: 'Casepoint Pvt. Ltd.',
        role: 'Intern Developer',
        location: 'India',
        startDate: 'January 2023',
        endDate: 'June 2023',
        description: [
            'Gained hands-on experience in .NET application development with emphasis on clean architecture and dependency injection.',
            'Contributed to backend and UI features using Redis, RabbitMQ, PostgreSQL, and Kendo UI Participated in production debugging and learned enterprise coding standards within a large-scale system environment.'
        ],
        stack: ['.NET C#', 'PostgreSQL', 'Redis', 'RabbitMQ', 'ElasticSearch', 'Azure DevOps', 'Dependency Injection', 'Constructor Injection', 'Kendo UI', 'GitHub', 'TDD', 'Unit Testing', 'Version Control'],
        image: 'casepoint.avif',
        imageClipped: true
    },
]

const projects: IProject[] = [
    // projects can be added an removed
    // if there are no projects, Projects section won't show up
    {
        name: 'C# Debug Visualizer',
        description: [
            'Designed and published a developer tool that visualises complex C# data structures during debugging sessions, filling a gap in the VS Code ecosystem and trusted and downloaded 5000+ times.',
            'Migrated the codebase from JavaScript to TypeScript and changed variable fetching architecture, improving execution performance by 113%.'
        ],
        stack: ['TypeScript', 'VS Code API', 'HTML', 'CSS', 'GitHub Actions'],
        sourceCode: 'https://github.com/krishnatamakuwala/csharp-debug-visualizer',
        livePreview: 'https://marketplace.visualstudio.com/items?itemName=KrishnaPiyush.csharp-debug-visualizer',
        image: 'csharp-debug-visualizer.png',
        imageClipped: true
    },
    {
        name: 'Orchflow',
        description: [
            'Built a managed preprocessing service for Machine Learning teams. You submit a dataset, select your steps, get back clean data. No infrastructure to manage.',
            'Implemented distributed message-driven architecture using RabbitMQ and Redis; services containerised with Docker and deployed independently.',
            'Integrated ELK Stack for centralised logging and real-time monitoring of agent health, job status, and system throughput.',
            'Designed end-to-end authentication and authorisation across services.',
            'Finalizing pre-launch preparations.'
        ],
        stack: ['Node.js', 'Next.js', 'PostgreSQL', 'Redis', 'RabbitMQ', 'Docker', '.NET Background Services', 'ELK Stack', 'S3', 'Cloud', 'CI/CD', 'Material UI'],
        sourceCode: null,
        livePreview: null,
        image: 'orchflow.png',
        imageClipped: false
    },
    {
        name: 'Dev Portfolio',
        description: [
            'A simple, responsive, and minimal portfolio for a developers to showcase their work experience, projects, education and achievements.',
            'Built in Next.js to serve server-side rendered pages (SSR) to get better SEO ranking, and hosted on cloudflare pages via GitHub actions on every push to main branch.'
        ],
        stack: ['Next.js', 'CSS', 'GitHub Actions', 'CI/CD', 'Cloudflare Hosting', 'SSR', 'SEO'],
        sourceCode: 'https://github.com/krishnatamakuwala/dev-portfolio',
        livePreview: 'https://krishnatamakuwala.com/',
        image: 'dev-portfolio.png',
        imageClipped: true
    },
    {
        name: 'Anil Chauhan Photography',
        description: [
            'Designed and published a portfolio website for a client to showcase their passion and dedication towards photography.',
            'Built in simple HTML, CSS, and JavaScript and used GSAP for smooth animations.',
            'Served all images dynamically from Cloudinary storage via backend Node.js API.'
        ],
        stack: ['Node.js', 'Cloudinary', 'HTML', 'CSS', 'GSAP'],
        sourceCode: 'https://github.com/krishnatamakuwala/photographer-portpholio/tree/v1.0.0_main_changes',
        livePreview: 'https://anil-chauhan-photography.onrender.com/',
        image: 'acp.png',
        imageClipped: true
    },
    {
        name: 'Eskra',
        description: [
            'Built and deployed a college magazine website as part of a design and development team, covering front-end implementation, content layout and original visual graphics; served as the college\'s live digital publication platform (now retired).'
        ],
        stack: ['HTML', 'CSS', 'JavaScript', 'PHP'],
        sourceCode: null,
        livePreview: null,
        image: 'eskra.jpg',
        imageClipped: true
    },
    {
        name: 'NIDS',
        description: [
            'Built a Python-based NIDS inside a simulated Docker environment, focusing on packet inspection and anomaly detection in containerised infrastructure.'
        ],
        stack: ['Python', 'Docker'],
        sourceCode: null,
        livePreview: null,
        image: 'nids.png',
        imageClipped: true
    }
]

const skills: string[] = [
    // skills can be added or removed
    // if there are no skills, Skills section won't show up

    // Backend
    '.NET (C#)',
    'Node.js',
    'TypeScript',
    'Java',
    'PostgreSQL',
    'MongoDB',
    'Redis',
    'RabbitMQ',
    'Rest APIs',

    // Fronend
    'React',
    'Next.js',
    'SSR',
    'Material UI',
    'Kendo UI',

    // Cloud & DevOps
    'Google Cloud Platform',
    'Docker',
    'CI/CD',
    'Azure DevOps',
    'GitHub',
    'GitHub Actions',

    // Monitoring & Observability
    'ELK Stack (elasticsearch, Logstash, Kibana',
    'Centralised logging',

    // Testing & Practices
    'TDD',
    'Unit Testing',
    'Integration Testing',
    'Clean Code',
    'Secure Coding',
    'Agile',
    'SDLC',
    'OWASP',

    // Other
    'Python',
    'Bash Scripting',
    'Linux/Unix command-line'
]

const contact: IContact = {
    // email is optional - if left empty Contact section won't show up
    email: 'krishna.piyush.tamakuwala@gmail.com',
}

export { header, about, educations, experiences, projects, skills, contact }

export interface IExperience {
    name: string;
    role: string;
    location: string;
    startDate: string;
    endDate: string | null;
    description: string[];
    stack: string[];
    image: string | null;
    imageClipped: boolean;
}

export interface IEducation {
    name: string;
    location: string;
    startDate: string;
    endDate: string | null;
    description: string[];
    image: string | null;
    imageClipped: boolean;
}

export interface IProject {
    name: string;
    description: string[];
    stack: string[];
    sourceCode: string | null;
    livePreview: string | null;
    image: string | null;
    imageClipped: boolean;
}

export interface IContact {
    email: string;
}

export interface IHeader {
    homepage: string | null;
    title: string | null;
}

export interface IAbout {
    name: string;
    role: string;
    picture: string;
    description: string;
    resume: string;
    social: {
        linkedin: string;
        github: string;
    },
}