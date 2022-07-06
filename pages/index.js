import Head from 'next/head'
import styles from '../styles/Home.module.css';
import {FiSearch, FiSun} from 'react-icons/fi';
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>AS Blog</title>
        <meta name="description" content="Albert Sigsbert Tech Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
         <div className={styles.logo}>AS Blog</div>
         <div className={styles.icons}>
             <span><FiSearch/></span>
             <span><FiSun/></span>
         </div>
      </header>
      <main className={styles.main}>
          <h1>Hello NextJS</h1>
      </main>
    </div>
  )
}
