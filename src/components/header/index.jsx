import {Container} from './style'
import imgLogo from '../../assets/photo1697480913-removebg-preview 1.png'

import { ButtonText } from '../buttonText'
export function Header () {
    return (
        <Container>
            <img src={imgLogo} alt="" />
            <ButtonText title="HOME"/>
        </Container>
    )
}