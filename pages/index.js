import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.scss'
import backround from '../public/background'
import FooterComponent from '../Components/Footer/Footer'
import CenterButton from '../Components/CenterButtons/CenterButton'
import Particles from '../Components/ParticleBackround/particles'




const inter = Inter({ subsets: ['latin'] })

export default function Home() {

//https://nextjs.org/docs/advanced-features/dynamic-import
  return (
    <>
      <Head>
        <title>Morgan Titsworth</title>
        <meta name="description" content="Created and developed by Morgan Titsworth" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Particles />
        <div className={styles.main}>
          <h1>Morgan Titsworth</h1>
          <div className={styles.buttonHolder}>
            <CenterButton />
          </div>
        </div>
        <Image 
          className={styles.backgroundImage}
          style={{position: 'fixed', top: '0', left: '0', zIndex: '-1'}}
          src={backround}
          alt={"A backround image"}
          quality={100}
          responsive/>
        <FooterComponent />
      </main>
    </>
  )
}
