import {Container , Calendar} from './style'
import {Header} from '../../components/header'
import { SideNav } from '../../components/sideNavMenu'
import logoImg from '../../assets/photo1697480913-removebg-preview 1.png'
import { useAuth } from '../../hooks/auth'
import { useEffect, useState } from 'react'
export const Menu = ()=>{
    const { user } = useAuth()
    const [hours, setHours] = useState()
    const [minutes, setMinutes] = useState()
    const [displayMins, setDisplay] = useState()
    const [weekDay, setWeekDay] = useState()
    const [month, setMonth] = useState()
    const [day, setDay] = useState()
    const [year, setYear] = useState()
    const [infoDate, setInfoDate] = useState({})
    const [nomenclatura, setNomenclatura] = useState({})
    const [nomDay, setNomDay] = useState({})
    function separeteNamesOfDates(){
        console.log(weekDay)
        switch(weekDay){
            case 0 :setNomDay({weekDay : 'Domingo'})
            break;
            case 1: setNomDay({weekDay : 'Segunda-feira'})
            break;
            case 2: setNomDay({weekDay : 'Terça-feira'})
            break;
            case 3: setNomDay({weekDay : 'Quarta-feira'})
            break;
            case 4: setNomDay({weekDay : 'Quinta-feira'})
            break;
            case 5: setNomDay({weekDay : 'Sexta-feira'})
            break;
            case 6: setNomDay({weekDay : 'Sabado'})
            break;
        }
        switch(month) {
            case 0 : setNomenclatura({month : "Janeiro"})
            break;
            case 1 : setNomenclatura({month : "Fevereiro"})
            break;
            case 2 : setNomenclatura({month : "Março"})
            break;
            case 3 : setNomenclatura({month : "Abril"})
            break;
            case 4 : setNomenclatura({month : "Maio"})
            break;
            case 5 : setNomenclatura({month : "Junho"})
            break;
            case 6 : setNomenclatura({month : "Julho"})
            break;
            case 7 : setNomenclatura({month : "Agosto"})
            break;
            case 8 : setNomenclatura({month : "Setembro"})
            break;
            case 9 : setNomenclatura({month : "Outubro"})
            break;
            case 10 : setNomenclatura({month : "Novembro"})
            break;
            case 11 : setNomenclatura({month : "Dezembro"})
        }
        
    }
    const date = new Date()
    const tempo = {
        minutes :  date.getMinutes(), 
        hours :  date.getHours(),
        weekDay : date.getDay(),
        month : date.getMonth() -1,
        year : date.getFullYear(),
        day : date.getDate()
    }
    setTimeout(() => {
        
        setWeekDay(tempo.weekDay)

        setMonth(Number(tempo.month) + 1)
        setDay(tempo.day)
        setYear(tempo.year)
        setHours(()=> {
            if(Number(tempo.hours) < 10)return `0${tempo.hours}`
            return tempo.hours 
        } )
        setMinutes(()=> {
            if(Number(tempo.minutes) < 10)return `0${tempo.minutes}`
            return tempo.minutes
        } )
        separeteNamesOfDates()
        
        
    }, 1);
    useEffect(()=> {
        setDisplay(minutes)
    }, [minutes])
    return (
    <Container>
        <Header />
        <SideNav/>
        <img src={logoImg} alt="logo da empresa" />
        <div className="timing">
            <div className="clock">
                <span>{hours}</span>
                <span>:</span>
                <span>{displayMins}</span>

            </div>
            <Calendar>
                <span>{nomDay.weekDay}. </span> 
                <span>{tempo.day}</span>
                <span>de</span>
                <span>{nomenclatura.month}</span>
                <span>de</span>
                <span>{tempo.year}</span>
            </Calendar>
        </div>
    </Container>

    )
}