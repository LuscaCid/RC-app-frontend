import { Container } from "./style";
import { ButtonText } from "../buttonText";
export const SideNav = (props) => {
    return (
        <Container>
            
            <ButtonText title = "Buscar cliente" src= "new" />
            <ButtonText title = "Cadastrar cliente" src='/clientregister'/>
            <ButtonText title = "Estoque" />
            <ButtonText title = "Relatórios" />
            <ButtonText title = "Fila de espera" />
            <ButtonText title = "Histórico de OS" />
        </Container>

    )
}