import { Container, DetailsContainer, MainContent } from "./style";
import { Header } from "../../components/header";
import { SideNav } from "../../components/sideNavMenu";
import { Textarea } from "../../components/textarea";
import { Button } from "../../components/button";
import { ButtonText } from "../../components/buttonText";

export function ClientDetails(){

    return(
        <Container>
            <Header />
            <SideNav />
            <main>

                <MainContent>
                    <nav>
                        <ul>
                         <ButtonText title= "Detalhes" />   
                         <ButtonText title= "Registros" />   
                         <ButtonText title= "Observações" />   
                        </ul>
                    </nav>
                <DetailsContainer>
                    <div className="Details">
                        <h1>Detalhes do registro</h1>
                            
                        <label htmlFor="name">Nome do cliente:</label>
                        <input type="text" id="name" value="Lucas Cid" readOnly/>

                        <label htmlFor="cpf">CPF</label>
                        <input type="text" id="cpf" value="12312312" readOnly/>

                        <label htmlFor="phone">Celular</label>
                        <input type="text" id="phone" value="71 992123121" readOnly/>

                        <label htmlFor="street">Endereço</label>
                        <input type="text" id="street" value="Rua aníbal" readOnly/>

                        <label htmlFor="neighborhood">Bairro</label>
                        <input type="text" id="neighborhood" value="IAPI" readOnly/>

                        <label htmlFor="cep">CEP</label>
                        <input type="text" id="cep" value="40330410" readOnly/>
                    </div>
                    <div className="button">

                    <Button title= "Avançar" span="para gerar OS" />
                    </div>
                </DetailsContainer>
                </MainContent>
            </main>
          
        </Container>    
    )
}