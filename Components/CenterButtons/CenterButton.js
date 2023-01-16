import styles from './CenterButton.module.scss'
import Image from 'next/image'
import sideways from '../../public/arrow_usage.png'
import downwards from '../../public/arrow_down_usage.png'
import { useState } from 'react'
import { useSpring, animated, easings, } from 'react-spring'
import { useRouter } from 'next/router'

export default function CenterButton(){
    const router = useRouter()
    let arrowMoveOut = {
        from: {opacity: 0},
        to: [
            {x: 100, opacity: 0},
            {x: -50, opacity: 0, duration: 0}
        ],
        delay: 0,
        config: { duration: 500, easing: easings.easeOutQuart },
    }
    let arrowMoveIn = {
        from: {x: -50, opacity: 0},
        to: {x: 0, opacity: 1},
        delay: 0,
        config: { duration: 500, easing: easings.easeOutQuart },
      };
    let arrowMoveDown = {
        from: {y: -50, opacity: 0},
        to: {y: 0, opacity: 1},
        delay: 0,
        config: { duration: 500, easing: easings.easeOutQuart },
    }
    let arrowMoveDownOut = {
        from: {opacity: 0},
        to: [
            {y: 100, opacity: 0},
            {y: -50, opacity: 0, duration: 0}
        ],
        delay: 0,
        config: { duration: 500, easing: easings.easeOutQuart },
    }
    
    const [arrowStatic, setArrowStatic] = useState(arrowMoveOut)
    const [arrowAbStatic, setArrowAbStatic] = useState(arrowMoveOut)
    const [arrowVerStatus, setArrowVerStatus] = useState(arrowMoveDownOut)
    const arrowHorSpring = useSpring(arrowStatic)
    const arrowVerSpring = useSpring(arrowVerStatus)
    const arrowHor2Spring = useSpring(arrowAbStatic)

    const handleArrowIn = () => {
        setArrowStatic(arrowMoveIn)
    }
    const handleArrowOut = () => {
        setArrowStatic(arrowMoveOut)
    }
    const handleAbArrowIn = () => {
        setArrowAbStatic(arrowMoveIn)
    }
    const handleAbArrowOut = () => {
        setArrowAbStatic(arrowMoveOut)
    }
    const handleArrowDown = () => {
        setArrowVerStatus(arrowMoveDown)
    }
    const handleArrowDownOut = () => {
        setArrowVerStatus(arrowMoveDownOut)
    }

    return(
        <>
            <div className={styles.buttonDiv}>
                 <div onMouseOver={handleArrowIn} onMouseLeave={handleArrowOut} onClick={() => {router.push('/projects')}}>
                    <h2>Projects</h2>
                </div>
                <animated.div style={{...arrowHorSpring}}>
                    <Image src={sideways} alt={"alt Image"} height={48} width={48}/>
                </animated.div>
            </div>            
            <div className={styles.buttonDiv}>
                <h2 onMouseOver={handleArrowDown} onMouseLeave={handleArrowDownOut}>Contact</h2>
                <animated.div style={{...arrowVerSpring}}>
                    <Image src={downwards} alt={"alt Image"} height={48} width={48}/> 
                </animated.div>           
            </div>            
            <div className={styles.buttonDiv}>
                <div onClick={() => {router.push('/about')}} onMouseOver={handleAbArrowIn} onMouseLeave={handleAbArrowOut}>
                    <h2>About</h2>
                </div>
                <animated.div style={{...arrowHor2Spring}}>
                    <Image src={sideways} alt={"alt Image"} height={48} width={48}/>
                </animated.div>
            </div>
        </>
    )
}