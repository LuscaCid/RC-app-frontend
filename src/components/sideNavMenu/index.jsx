import { Container } from "./style";
import { ButtonText } from "../buttonText";
export const SideNav = (props) => {
    return (
        <Container>
            <ButtonText title="Home" src="/"  />
            <ButtonText title="Buscar cliente" src= "new" />
            <ButtonText title=  "Cadastrar cliente" />
            <ButtonText title=  "Estoque" />
            <ButtonText title = "Relatórios" />
            <ButtonText title = "Fila de espera" />
            <ButtonText title = "Histórico de OS" />
        </Container>

    )
}