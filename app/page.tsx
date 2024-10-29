import Link from 'next/link'
import styles from './components/styles/Page.module.css'
import { Experience , experiencesData } from './components/experiences'; 
import { Projects, projectsData } from './components/projetos';

export default function Page() {
  return (
    <section className={styles.pageContainer}>
      <div>
        <p className={styles.sobreIntro}>
          Olá, me chamo,
        </p>
        <h1 className={styles.nomePrincipal}>Kellen Xavier</h1>
        <p className={styles.sobreIntro}>QA - Analista de Testes - Engenharia de Software </p> <br></br>
        <Link 
          href="https://www.linkedin.com/in/kellen-xavier"
          target="_blank"
          className={styles.linkedinButton}>
          LinkedIn
        </Link>

      </div>
      
      <div className="my-40">
        <Link 
        href="#Sobre"
        target="_blank">
          <h1 className={styles.nomeSecundario}>Sobre mim</h1> 
        </Link>
        <p className="my-8">
          {`Me chamo Kellen e tenho formação em Analise e Desenvolvimento de Sistemas, 
          estou trabalhando como Quality Assurance Engineer 
          e atualmente ando compartilhando um pouco dos meus estudos e trabalhos 👩🏼‍💻📚💜`}
        </p>

        <div>
          <Link 
            href="#"
            target="_blank"
            className={styles.linkedinButton}>
            Baixar currículo
          </Link>
        </div>
      </div>

      <div className="my-40">
        <Link 
        href="#Experiencia"
        target="_blank">
          <h1 className={styles.nomeSecundario}>Experiências</h1>
        </Link>
          <Experience experiences={experiencesData} /> 
        <div>
          
        </div>
      </div>
      
      <div className="my-40">
      <Link 
        href="#"
        target="_blank">
          <h1 className={styles.nomeSecundario}>Projetos</h1>
        </Link>
        <Projects projects={projectsData} />
      </div>

      <div className="my-40">
      <Link 
        href="#servicos"
        target="_blank">
          <h1 className={styles.nomeSecundario}>Serviços</h1>
        </Link>
      </div>
    </section>
  )
}
