import styles from './styles/Projetos.module.css';

interface Project {
  image: string;
  name: string;
  description: string;
  technologies: string[];
  projectLink: string;
  repoLink: string;
}

interface ProjectsProps {
  projects: Project[];
}

export const projectsData = [
  {
    image: '#', 
    name: 'Studio Ghibli',
    description: 'Desenvolvimento de um Layout simples, para praticas básicas de frontend, estruturas de página.',
    technologies: ['CSS', 'HTML', 'Javascript'],
    projectLink: 'https://project-studio-ghibli.netlify.app/',
    repoLink: 'https://github.com/kellen-xavier/page-studio-ghibli', 
  },
];

export function Projects({ projects }: ProjectsProps) {
  return (
    <div className={styles.projectsContainer}>
      {projects.map((project) => (
        <div key={project.name} className={styles.projectCard}>
          <img src={project.image} alt={project.name} className={styles.projectImage} />
          <h3 className={styles.projectName}>{project.name}</h3>
          <p className={styles.projectDescription}>{project.description}</p>
          <div className={styles.technologies}>
            {project.technologies.map((tech) => (
              <span key={tech} className={styles.technology}>{tech}</span>
            ))}
          </div>
          <div className={styles.projectButtons}>
            <a href={project.projectLink} target="_blank" rel="noopener noreferrer" className={styles.projectButton}>
              Acessar o projeto
            </a>
            <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className={styles.projectButton}>
              Acessar repositório
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}