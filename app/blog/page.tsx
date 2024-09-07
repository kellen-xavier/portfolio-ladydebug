import { BlogPosts } from 'app/components/posts'
import styles from 'app/components/styles/Page.module.css'


export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <section className={styles.pageContainer}>
      <div className={styles.body}>
        <h1 className={styles.nomePrincipal}>Meu Blog</h1>
        <p className={styles.nomeSecundario}>
          Em desenvolvimento....
        </p>
        <BlogPosts />
      </div>
    </section>
  )
}
