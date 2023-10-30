import { Container, Form } from "./style";
import { Header } from "../../components/header";
import { Input } from "../../components/Input";
import {FiSmartphone } from 'react-icons/fi'
import {AiOutlineBarcode } from 'react-icons/ai'
import {BsFillCalendar2DateFill } from 'react-icons/bs'


export const New = ({user,title, ...rest}) => {
    return (
        <Container>
            <Header 
            src ="https://github.com/luscacid.png" 
            username = "lucas cid"
            />
            <Form>
                <h1>CADASTRO DE O.S. PARA: {user}</h1>
                <div>
                    <label htmlFor="model">Modelo do celular</label>
                    <Input 
                    placeholder="Modelo" 
                    id="model" 
                    icon={FiSmartphone}
                    />
                    <label htmlFor="model">Modelo do celular</label>
                    <Input 
                    placeholder="IMEI" 
                    id="imei" 
                    icon={AiOutlineBarcode}
                    />
                </div>
                <div>
                    <label htmlFor="model">Modelo do celular</label>
                    <Input 
                    placeholder="Data prevista" 
                    id="date" 
                    type="date"
                    icon={BsFillCalendar2DateFill}
                    />

                    <label htmlFor="model">Modelo do celular</label>
                    <Input 
                    placeholder="Modelo" 
                    id="model" 
                    icon={FiSmartphone}
                    />

                </div>
                 
            </Form>
        </Container>
        
    )
}