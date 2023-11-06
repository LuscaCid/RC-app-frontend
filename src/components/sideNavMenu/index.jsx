import { Container } from "./style";
import { ButtonText } from "../buttonText";
import {useAuth} from '../../hooks/auth'
export const SideNav = () => {
    const {test, otherTest } = useAuth()
    return (
        <Container>
            
            <ButtonText title = "Buscar cliente" src= "new" />
            <ButtonText title = "Cadastrar cliente" src='/clientregister'/>
            <ButtonText title = "Estoque" />
            <ButtonText title = "Relatórios" />
            <ButtonText title = "Fila de espera" functions = {otherTest}/>
            <ButtonText title = "Histórico de OS" functions= {test}/>
        </Container>

    )
}