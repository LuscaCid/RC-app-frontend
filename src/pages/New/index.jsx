import { Container, Form, MainContent } from "./style";
import { Header } from "../../components/header";
import { Input } from "../../components/Input";
import {FiSmartphone } from 'react-icons/fi'
import {AiOutlineBarcode } from 'react-icons/ai'
import {BsFillCalendar2DateFill } from 'react-icons/bs'
import { Textarea } from "../../components/textarea";
import {Button} from '../../components/button'
import { SideNav } from "../../components/sideNavMenu";
export const New = () => {
    return (
        <Container>
            <Header />
            <SideNav />
            <main>
            <MainContent>
                <Form >
                    <h1>CADASTRO DE O.S. PARA:</h1>
                    
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

                        <label htmlFor="entry">Data de entrada:</label>
                        <Input 
                        type='date'
                        id="entry" 
                        icon={BsFillCalendar2DateFill}
                        />

                    </section>
                    
                </div>
                
                <div className="two-inputs">
                    <footer>
                    <label htmlFor="obs">Observações sobre o aparelho</label>
                        <Textarea
                        id = "obs" 
                        placeholder="Insira aqui as observações..."
                        />
                    </footer>
                    
                    <footer>
                    <label htmlFor="problem">Problema relatado:</label>
                    <Textarea 
                    id ="problem"
                    placeholder="Problema relatado..."
                    />
                    </footer>
                        
                </div>   
                <label htmlFor="info">Informações sobre garantia:</label>
                    <Textarea 
                    id = "info"
                    placeholder="Insira aqui as informações"
                    />
               
                </Form>
                <Button 
                isForm
                span = "ORDEM DE SERVIÇO"
                title= "GERAR" />
            </MainContent>
           
                 
            </main>
                
            
        </Container>
        
    )
}