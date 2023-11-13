import { Container, DetailsContainer, MainContent } from "./style";
import { Header } from "../../components/header";
import { SideNav } from "../../components/sideNavMenu";
import { Textarea } from "../../components/textarea";
import { Button } from "../../components/button";
import { ButtonText } from "../../components/buttonText";
import { DisplayOS } from '../../components/displayOS'


export function ClientDetails(){
    const Oss = [
        {
            model : "xiaomi redmi note 10",
            realease : "18/11/2023",
            OS_id : 3
        },
        {
            model : "iphone 15 max",
            realease : "18/11/2022",
            OS_id : 2
        }
    ]
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
                    <div className="detalhes  ">
                        <div className="Details ">
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
                            <div className="button">

                                <Button title= "Avançar" span="para gerar OS" />
                            </div>
                        </div>
                    </div>
                    <div className="registros hide">
                        <div className="registers">
                            <h1>Registros de ordens de serviço</h1>
                                {Oss.map(element => {
                                    return <DisplayOS 
                                    phoneModel={element.model}
                                    releaseDate={element.realease}
                                    OS_id={element.OS_id}
                                    />
                                })}   
                        </div>
                    </div>
                    
                </DetailsContainer>
                </MainContent>
            </main>
          
        </Container>    
    )
}