import { Link } from "react-router-dom";
import { Container } from "./style";

export const Profile = ({src, username}) => {
    return (
        <Container>
            <img src={src} alt="imagem do usuário" />
            <span>{username}</span>
        </Container>

    )
}