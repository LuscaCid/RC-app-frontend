import { Container, Form } from "./style";
import { Header } from "../../components/header";
import { Input } from "../../components/Input";
import {FiSmartphone } from 'react-icons/fi'
import {AiOutlineBarcode } from 'react-icons/ai'
import {BsFillCalendar2DateFill } from 'react-icons/bs'
import { Textarea } from "../../components/textarea";
import {Button} from '../../components/button'
export const New = ({user, ...rest}) => {
    return (
        <Container>
            <Header 
            src = {`https://github.com/${user}.png` }
            username = {user}
            />
            <main>

            <Form {...rest}>
                    <h1>CADASTRO DE O.S. PARA: {user}</h1>
                    
                    <div className="flex">
                    <section>
                        <label htmlFor="model">Modelo do celular</label>
                        <Input 
                        placeholder="Modelo" 
                        id="model" 
                        icon={FiSmartphone}
                        />
                        <label htmlFor="imei">IMEI</label>
                        <Input 
                        placeholder="IMEI" 
                        id="imei" 
                        icon={AiOutlineBarcode}
                        />
                    </section>
                    <section>
                        <label htmlFor="date">Data prevista:</label>
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

                    </section>
                    
                </div>
                
                <div className="two-inputs">
                    <footer>
                    <label htmlFor="">Observações sobre o aparelho</label>
                        <Textarea
                        id = "obs" 
                        placeholder="Insira aqui as observações..."
                        />
                    </footer>
                    
                    <footer>
                    <label htmlFor="">Problema relatado:</label>
                    <Textarea 
                    id ="problem"
                    placeholder="Problema relatado..."
                    />
                    </footer>
                        
                </div>   
                <label htmlFor="">Informações sobre garantia:</label>
                    <Textarea 
                    id = "info"
                    placeholder="Insira aqui as informações"
                    />
                <Button 
                span = "ORDEM DE SERVIÇO"
                title= "GERAR" />
                </Form>
            </main>
                
            
        </Container>
        
    )
}