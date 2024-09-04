import { BlogPosts } from 'app/components/posts'
import Link from 'next/link'
import styles from './components/styles/Page.module.css'

export default function Page() {
  return (
    <section>
      <div>
        <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
          Olá, seja bem-vindo!
        </h1>
        <p> Analista de Testes - QA </p> <br></br>
        <Link 
          href="https://www.linkedin.com/in/kellen-xavier"
          target="_blank"
          className={styles.linkedinButton}>
          LinkedIn
        </Link>

      </div>
      
      <div className="my-40">
        <h1>Sobre mim</h1>
        <p className="my-8">
          {`Me chamo Kellen e tenho formação em Analise e Desenvolvimento de Sistemas, 
          estou trabalhando como Quality Assurance Engineer 
          e atualmente ando compartilhando um pouco dos meus estudos e trabalhos 👩🏼‍💻📚💜`}
        </p>
      </div>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
