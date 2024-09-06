import { BlogPosts } from 'app/components/posts'
import Link from 'next/link'
import styles from './components/styles/Page.module.css'
import { Experience } from './components/experiences'; 
import { experiencesData } from './components/experiences'; 

export default function Page() {
  return (
    <section className={styles.pageContainer}>
      <div>
        <p className="mb-8 text-2xl font-semibold tracking-tighter">
          Olá, me chamo!
        </p>
        <h1 className={styles.nomePrincipal}>Kellen Xavier</h1>
        <p>QA - Analista de Testes - Engenharia de Software </p> <br></br>
        <Link 
          href="https://www.linkedin.com/in/kellen-xavier"
          target="_blank"
          className={styles.linkedinButton}>
          LinkedIn
        </Link>

      </div>
      
      <div className="my-40">
        <h1 className={styles.nomeSecundario}>Sobre mim</h1>
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
        <h1 className={styles.nomeSecundario}>Experiências</h1>
          <Experience experiences={experiencesData} /> 
        <div>
          
        </div>
      </div>
      
      <div className="my-40">
        <h1 className={styles.nomeSecundario}>Projetos</h1>
      </div>

      <div className="my-40">
        <h1 className={styles.nomeSecundario}>Serviços</h1>
      </div>

      <div className="my-40">
        <h1 className={styles.nomeSecundario}>Blog</h1>
        <BlogPosts />
      </div>
    </section>
  )
}
