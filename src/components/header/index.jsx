import {Container} from './style'
import imgLogo from '../../assets/photo1697480913-removebg-preview 1.png'

import { ButtonText } from '../buttonText'
import { Profile } from '../profile'

//import { } from 'react-icons/fi'

export function Header ({src, username}) {
    return (
        <Container>
            <div id='first-div'>
                <img src={imgLogo} alt="logo da empresa" />
                <ButtonText src="/" title="Home" isActive/>
                <ButtonText src= "new" title="Buscar cliente"/>
                <ButtonText title="Estoque" isActive/>
                <ButtonText title="Cadastrar cliente" />
            </div>
            <div>
                <Profile srcImg ={src} username={username}/> 
            </div>    
                
               
        </Container>
    )
}