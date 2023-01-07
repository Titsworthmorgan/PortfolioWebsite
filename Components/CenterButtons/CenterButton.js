import styles from './CenterButton.module.scss'
import Image from 'next/image'
import sideways from '../../public/Arrow_usage.png'
import downwards from '../../public/Arrow_down_usage.png'
import Link from 'next/link'

export default function CenterButton(){

    return(
        <>
            <div className={styles.buttonDiv}>
                <Link href={"/Projects"}>
                    <h2>Projects</h2>
                </Link>
                <div>
                    <Image src={sideways} alt={"alt Image"} height={48} width={48}/>
                </div>
            </div>            
            <div className={styles.buttonDiv}>
                <h2>Contact</h2>
                <div>
                    <Image src={downwards} alt={"alt Image"} height={48} width={48}/> 
                </div>           
            </div>            
            <div className={styles.buttonDiv}>
                <Link href={"/About"}>
                    <h2>About</h2>
                </Link>
                <div>
                    <Image src={sideways} alt={"alt Image"} height={48} width={48}/>
                </div>
            </div>
        </>
    )
}