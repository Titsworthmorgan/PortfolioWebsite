import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from '../styles/pages/about.module.scss'
import FooterComponent from "../Components/Footer/Footer";
import HomePicture from "../public/Home-usage-white.png"
import background from '../public/Backround-middle.png'
import picture from '../public/Titsworth-round.png'
export default function About(){

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
            <div className={styles.bodyContent}>
                <Image 
                    className={styles.portImage}
                    src={picture}
                    alt={'A portfolio image'}
                    responsive
                    quality={100}
                />
                <div className={styles.biography}>
                    <h1>Biography</h1>
                    <p>loremasda aaaaaaa aaaaaaa aaaaaaa aaaaaa aaaaaa aaaaaaaa aaaaa aaaaaaa aaaaaaaaaa aaaaaaaaaa aaaaaa asdasd asdasda sd asde retg</p>
                </div>
                <div className={styles.devWork}>
                    <h1>Development work</h1>
                    <p>loremasda aaaaaaa aaaaaaa aaaaaaa aaaaaa aaaaaa aaaaaaaa aaaaa aaaaaaa aaaaaaaaaa aaaaaaaaaa aaaaaa asdasd asdasda sd asde retg</p>
                </div>
                <div className={styles.otherWork}>
                <h1>Other work</h1>
                    <p>loremasda aaaaaaa aaaaaaa aaaaaaa aaaaaa aaaaaa aaaaaaaa aaaaa aaaaaaa aaaaaaaaaa aaaaaaaaaa aaaaaa asdasd asdasda sd asde retg</p>
                </div>
            </div>
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