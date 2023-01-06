import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.scss'
import backround from '../public/backround.png'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Morgan Titsworth</title>
        <meta name="description" content="Created and developed by Morgan Titsworth" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={styles.main}>
          <h1>Morgan Titsworth</h1>
          <div className={styles.buttonHolder}>
            <div className={styles.buttonDiv}>
              <h2>Projects</h2>
              <svg xmlns="http://www.w3.org/2000/svg" height="50" width="50"><path d="m24 40-2.1-2.15L34.25 25.5H8v-3h26.25L21.9 10.15 24 8l16 16Z"/></svg>
            </div>            
            <div className={styles.buttonDiv}>
              <h2>Contact</h2>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" height="50" width="50"><path d="M24 40 8 24l2.1-2.1 12.4 12.4V8h3v26.3l12.4-12.4L40 24Z"/></svg> 
              </div>           
            </div>            
            <div className={styles.buttonDiv}>
              <h2>About</h2>
              <svg xmlns="http://www.w3.org/2000/svg" height="50" width="50"><path d="m24 40-2.1-2.15L34.25 25.5H8v-3h26.25L21.9 10.15 24 8l16 16Z"/></svg>
            </div>
          </div>
        </div>
        <Image className={styles.backroundImage}src={backround} alt={"A backround image"} fill="true" quality={100}/>
      </main>
    </>
  )
}
