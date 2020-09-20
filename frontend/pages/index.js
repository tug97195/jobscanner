import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Job Scanner Starting Page
        </h1>

        <p className={styles.description}>
          More to come!
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Job Seeker Login &rarr;</h3>
            <p>Temp- Link goes to nextjs docs</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Employer Login &rarr;</h3>
            <p>Temp- Link goes to nextjs learn</p>
          </a>

        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
