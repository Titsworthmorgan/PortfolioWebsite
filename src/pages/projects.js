import Image from "next/image";
import styles from '../styles/pages/projects.module.scss'
import background from '../assets/backround-sideways.png'
import FooterComponent from "../components/footer/Footer";
import HomePicture from "../assets/home-usage-white.png"
import Head from "next/head";
import Link from 'next/link'
export default function Projects() {

    return(
    <>
        <Head>
            <title>Morgan Titsworth</title>
            <meta name="description" content="Created and developed by Morgan Titsworth" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className={styles.main}>
            <Link href={"/"} className={styles.homeButton}>
                <Image src={HomePicture} alt={"Home button"} height={50} width={50}/>
            </Link>
            <Image
                className={styles.backgroundImage}
                style={{position: 'fixed', top: '0', left: '0', zIndex: '-1'}}
                src={background}
                alt={"A background image"}
                responsive
                quality={100}/>
            <FooterComponent />
        </div>
    </>
    )
}