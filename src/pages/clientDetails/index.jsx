import { Container, DetailsContainer, MainContent } from "./style";
import { Header } from "../../components/header";
import { SideNav } from "../../components/sideNavMenu";
import { Textarea } from "../../components/textarea";
import { Button } from "../../components/button";
import { ButtonText } from "../../components/buttonText";
import { DisplayOS } from '../../components/displayOS'
import { useData } from "../../hooks/data";

export function ClientDetails(){
    const {OSs , observacoes} =useData()
    
    function handleDetails(e){
        e.preventDefault()
        document.querySelector('.detalhes').classList.remove('hide')
        document.querySelector('.registros').classList.add('hide')
        document.querySelector('.observacoes').classList.add('hide')
    }
    function handleRegisters(e){
        e.preventDefault()
        document.querySelector('.detalhes').classList.add('hide')
        document.querySelector('.registros').classList.remove('hide')
        document.querySelector('.observacoes').classList.add('hide')
    }

    function handleObservations(e){
        e.preventDefault()
        document.querySelector('.detalhes').classList.add('hide')
        document.querySelector('.registros').classList.add('hide')
        document.querySelector('.observacoes').classList.remove('hide')
    }
    return(
        <Container>
            <Header />
            <SideNav />
            <main>

                <MainContent>
                    <nav>
                        <ul>
                         
                         <ButtonText title= "Detalhes"
                         functions={handleDetails}/>

                         <ButtonText title= "Registros"
                         functions={handleRegisters} />   
                         <ButtonText title= "Observações"
                         functions={handleObservations} />   
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
                    <div className="registros hide ">
                        <div className="registers">
                            <h1>Registros de ordens de serviço</h1>
                                {OSs.map(element => {
                                    return <DisplayOS 
                                    phoneModel={element.phoneModel}
                                    releaseDate={element.created_at}
                                    OS_id={element.OSs_id}
                                    />
                                })}   
                        </div>
                    </div>

                    <div className="observacoes hide">
                        <div className="obs">
                            <h1>Observações feitas:</h1>
                           {observacoes.map(element => {
                                return <>
                                    <p>{element.created_at}</p>
                                    <Textarea value={element.obs} readOnly />
                                </>

                           })}
                        </div>
                    </div>
                    
                </DetailsContainer>
                </MainContent>
            </main>
          
        </Container>    
    )
}