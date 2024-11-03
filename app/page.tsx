import Link from 'next/link'
import styles from './components/styles/Page.module.css'
import { Experience , experiencesData } from './components/experiences'; 
import { Projects, projectsData } from './components/projetos';

export default function Page() {
  return (
    <section className={styles.pageContainer}>
      <div className={styles.pageIntroducao}>
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
      
      <div id="sobre" className={styles.sobreContainer}>
        <h1 className={styles.nomeSecundario}>Sobre mim</h1> 
        <p className={styles.sobreMim}>
          {`Me chamo Kellen e tenho formação em Análise e Desenvolvimento de Sistemas. 
          Estou trabalhando como Quality Assurance Engineer e atualmente compartilho 
          meus estudos e trabalhos na área de tecnologia. 👩🏼‍💻📚💜`}
        </p>

        <div className="redes-sociais">
          <Link 
            href="#">
          </Link>
        </div>
        
        <div>
          <Link 
            href="/path/to/curriculo.pdf"
            target="_blank"
            className={styles.curriculoButton}>
            Baixar currículo
          </Link>
        </div>
      </div>

      <div id='experiencia' className={styles.sobreContainer}>
        <Link 
        href="experiencia">
          <h1 className={styles.nomeSecundario}>Experiências</h1>
        </Link>
          <Experience experiences={experiencesData} />
        <div>
          
        </div>
      </div>
      
      <div className={styles.sobreContainer}>
        <Link 
          href="#projetos">
            <h1 id='projetos' className={styles.nomeSecundario}>Projetos</h1>
          </Link>
          <Projects projects={projectsData} />
      </div>

      <div id='servicos' className={styles.sobreContainer}>
      <Link 
        href="#servicos">
          <h1 className={styles.nomeSecundario}>Serviços</h1>
        </Link>
      </div>
    </section>
  )
}
