// app/components/experiences.tsx
import styles from './styles/Experience.module.css';

interface ExperienceProps {
  experiences: {
    company: string;
    jobTitle: string;
    period: string;
    description: string;
  }[];
}

export const experiencesData = [
  {
    company: 'DBServer',
    jobTitle: 'Analista de testes',
    period: 'Jul 2022 - o momento',
    description: 'Realizar a gestão de qualidade do sistema e acompanhamento de refinamentos, realizar elaboração de testes desde o início das novas demandas e melhorias. Planejamento de automação de testes nível front-end. Criação de testes em diferentes níveis. Desenvolvimento de Software com metodologias Ágeis.'
  },
  
  {
    company: 'Vortigo Digital',
    jobTitle: 'Autonômo | Analista de testes | QA',
    period: 'Dez 2019 - Jan 2023',
    description: 'Suporte em Projetos nível N1, N2. Atendimento e na manutenção de projetos Web e Mobile.Suporte em Projetos nível N1, N2. Atendimento e na manutenção de projetos Web e Mobile.'
  },

  {
    company: 'POP3DEV',
    jobTitle: 'Autonômo | Desenvolvimento Web Frontend | Suporte',
    period: 'Dez 2019 - Jan 2023',
    description: 'Suporte de Projeto - Realizar implementações nos Sistemas Web Desenvolvimento (Frontend) - Validar Funcionalidades existentes no Sistema'
  },
  
  {
    company: 'Ondaweb',
    jobTitle: 'Estágio | Desenvolvimento Web Frontend | Suporte',
    period: 'Dez 2019 - Jan 2023',
    description: 'Atendimento ao cliente, suporte, manutenção e desenvolvimento web Front-endAtendimento ao cliente, suporte, manutenção e desenvolvimento web Front-end'
  },
];

export function Experience({ experiences }: ExperienceProps) {
  return (
    <div className={styles.experienceContainer}>
      <div className={styles.experiencesContent}> 
        {experiences.map((experience) => (
          <div key={experience.company} className={styles.experienceItem}>
            <div className={styles.companyAndPeriod}>
              <h3 className={styles.companyName}>{experience.company}</h3> 
              <p className={styles.period}>{experience.period}</p>
            </div>
            <h4 className={styles.jobTitle}>{experience.jobTitle}</h4> 
            <p className={styles.description}>{experience.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}