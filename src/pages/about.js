import React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from '../styles/pages/about.module.scss'
import FooterComponent from "../components/footer/Footer";
import HomePicture from "../assets/home-usage-white.png"
import background from '../assets/backround-middle.png'
import picture from '../assets/titsworth-round.png'
import { useRouter } from 'next/router'


export default function About(){
    const router = useRouter()

    return(
        <>
        <Head>
            <title>Morgan Titsworth</title>
            <meta name="description" content="Created and developed by Morgan Titsworth" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className={styles.main}>
            <div onClick={() => {router.push('/')}} className={styles.homeButton}>
                <Image src={HomePicture} alt={"Home button"} height={50} width={50}/>
            </div>
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
                    <p>I am a Combat Engineer and Computer/detection systems repairer with a Secret Security clearance and ~4 years of proven experience in the United States Army. Accomplished measurable results while leading teams of 6-12 in a dynamic, fast - paced environment. Possess a comprehensive background in software implementation and technical hardware diagnostics/repair derived from conducting domestic and global operations in The United States. Advised and assisted counterpart units and leaders on implementation of tactics to ensure success. Managed risk upon multiple lines to protect assets, property, and equipment valued over $5,000,000 while meeting the expectations of senior leadership. Possess extensive knowledge in information technology services and nuances of many different areas of technical hardware. Recipient of multiple awards for outstanding performance and professionalism. In 2021 co-founding To Be Determined as a web developer and the head of culture/human resources. Throughout the process of starting TBD focusing heavily in web application development for TBD. </p>
                </div>
                <div className={styles.devWork}>
                    <h1>Development work</h1>
                    <p>Within TBD, as well as other digital consulting mediums, I have focused heavily on development of web applications with various programming languages including; HTML; CSS; JavaScript; and various libraries such as jQuery and react, most notably have been using Next.JS. I have experience with various CI/CD platforms, using a multitude of backend solutions ranging from wordpress to Google Cloud Platform and Vercell. Using and implementing databases; most notably Firestore. Google Cloud based development and extensive use of version control systems: Git and GitHub. Working within the agile methodology ensuring task completion and client satisfaction. As well as ensuring employees within an open employment model are properly integrated within our work space and community.</p>
                </div>
                <div className={styles.otherWork}>
                <h1>Other work</h1>
                    <p>Working with the US Army I have managed several teams of people ranging in size from 6 to 12 individuals. Charged with the oversight of those individuals general welfare and leading the professional development within their given roles. Supervising and ensuring thorough maintenance and complete operational readiness of necessary technical equipment. Managing cohesion between various sections to ensure overall operations are conducted safely and effectively.</p>
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