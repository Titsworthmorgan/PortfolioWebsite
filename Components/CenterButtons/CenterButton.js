import styles from './CenterButton.module.scss'

export default function CenterButton(){

    return(
        <>
        <div className={styles.buttonDiv}>
            <h2>Projects</h2>
            <div>                
                <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="m24 40-2.1-2.15L34.25 25.5H8v-3h26.25L21.9 10.15 24 8l16 16Z"/></svg>
            </div>
        </div>            
        <div className={styles.buttonDiv}>
            <h2>Contact</h2>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M24 40 8 24l2.1-2.1 12.4 12.4V8h3v26.3l12.4-12.4L40 24Z"/></svg> 
            </div>           
        </div>            
        <div className={styles.buttonDiv}>
            <h2>About</h2>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="m24 40-2.1-2.15L34.25 25.5H8v-3h26.25L21.9 10.15 24 8l16 16Z"/></svg>
            </div>
        </div>
      </>
    )
}