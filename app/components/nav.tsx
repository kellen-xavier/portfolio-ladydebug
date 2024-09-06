import Link from 'next/link'
import styles from './styles/Nav.module.css';

const navItems = {
  '/': {
    name: 'Início',
  },
  '/sobre': {
    name: 'Sobre mim',
  },
  '/experiencia': {
    name: 'Experiências',
  },
  '/projetos': {
    name: 'Projetos',
  },
  '/blog': {
    name: 'Blog',
  },
}

export function Navbar() {
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav className={`${styles.navContainer}  
 flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative`} id="nav">
          <div className="flex flex-row">  

            <div className="flex">
              <p className={`text-primary font-sans font-bold ${styles.brandName}`}>Kellen Xavier</p>
            </div>
          </div>

          <div className={styles.navLinks}> 
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className={`${styles.navLink} transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative`}
                >
                  {name}
                </Link>
              )
            })}
          </div>
        </nav>
      </div>
    </aside>
  );
}

