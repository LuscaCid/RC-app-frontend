import {Container } from './style'
import {Header} from '../../components/header'
import { SideNav } from '../../components/sideNavMenu'
import logoImg from '../../assets/photo1697480913-removebg-preview 1.png'

export const Menu = ()=>{
    return (
    <Container>
        <Header 
        src ="https://github.com/luscacid.png" 
        username = "lucas cid"
        />
        <SideNav/>
        <img src={logoImg} alt="logo da empresa" />
    </Container>

    )
}