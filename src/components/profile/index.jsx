import { Link } from "react-router-dom";
import { Container } from "./style";
import { useAuth } from "../../hooks/auth";
export const Profile = () => {
    const {user, name} = useAuth()
    return (
        <Container to= "/profile">
            <span>{name}</span>
            <img src={`https://github.com/${user}.png`} alt="imagem do usuário" />
        </Container>

    )
}