import { Link } from "react-router-dom";
import { Container } from "./style";
import { useAuth } from "../../hooks/auth";
export const Profile = () => {
    const {user} = useAuth()
    return (
        <Container to= "/profile">
            <div className="texts">
                <p>Seja bem-vindo</p>
                <span>{user.name}</span>

            </div>
            <img src={`https://github.com/${user.name}.png`} alt="imagem do usuário" />
        </Container>

    )
}