"use client";

import { useState } from 'react';
import styles from './styles/Experience.module.css';
interface Experience {
  company: string;
  jobTitle: string;
  period: string;
  description: string;
}

interface ExperienceProps {
  experiences: Experience[];
}

export const experiencesData: Experience[] = [
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
    description: 'Suporte em Projetos nível N1, N2. Atendimento e na manutenção de projetos Web e Mobile.'
  },
  {
    company: 'POP3DEV',
    jobTitle: 'Autonômo | Desenvolvimento Web Frontend | Suporte',
    period: 'Dez 2019 - Jan 2023',
    description: 'Suporte de Projeto - Realizar implementações nos Sistemas Web Desenvolvimento (Frontend) - Validar Funcionalidades existentes no Sistema.'
  },
  {
    company: 'Ondaweb',
    jobTitle: 'Estágio | Desenvolvimento Web Frontend | Suporte',
    period: 'Dez 2019 - Jan 2023',
    description: 'Atendimento ao cliente, suporte, manutenção e desenvolvimento web Front-end.'
  },
];

export function Experience({ experiences }: Readonly<ExperienceProps>) {
  const [selectedExperience, setSelectedExperience] = useState<Experience>(experiences[0]);

  const handleExperienceClick = (experience: Experience) => {
    setSelectedExperience(experience);
  };

  return (
    <div className={styles.experienceContainer}>
      <div className={styles.experienceList}>
        {experiences.map((experience) => (
          <button
            key={experience.company}
            onClick={() => handleExperienceClick(experience)}
            className={`${styles.experienceItem} ${
              selectedExperience.company === experience.company ? styles.active : ''
            }`}
          >
            {experience.company}
          </button>
        ))}
      </div>

      <div className={styles.experienceDetails}>
        <h2 className={styles.companyName}>{selectedExperience.company}</h2>
        <p className={styles.period}>{selectedExperience.period}</p>
        <h4 className={styles.jobTitle}>{selectedExperience.jobTitle}</h4>
        <p className={styles.description}>{selectedExperience.description}</p>
      </div>
    </div>
  );
}
