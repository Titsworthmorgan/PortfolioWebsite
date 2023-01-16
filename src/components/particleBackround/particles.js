import { innerHTML } from '../../assets/particles.js'

export default function Particles(){

    return(
        <>
            <di dangerouslySetInnerHTML={{__html : innerHTML}}></di>
        </> 
    )
}