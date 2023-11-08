import {Container } from './style'
import {Header} from '../../components/header'
import { SideNav } from '../../components/sideNavMenu'
import logoImg from '../../assets/photo1697480913-removebg-preview 1.png'
import { useAuth } from '../../hooks/auth'
import { useEffect, useState } from 'react'
export const Menu = ()=>{
    const { user } = useAuth()
    const [hours, setHours] = useState()
    const [minutes, setMinutes] = useState()
    const [infoDate, setInfoDate] = useState({})
    
    setInterval(() => {
        const date = new Date()
        const tempo = {
            minutos : date.getMinutes(), 
            horas :  date.getHours()
        }
        
        setHours(tempo.horas)
        setMinutes(tempo.minutos)
    }, 1000);
    return (
    <Container>
        <Header />
        <SideNav/>
        <img src={logoImg} alt="logo da empresa" />
        <div className="timing">
            
            <span>{hours}</span>
            <span>:</span>
            <span>{minutes}</span>

        </div>*/
    </Container>

    )
}