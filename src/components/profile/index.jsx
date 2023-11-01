import { Link } from "react-router-dom";
import { Container } from "./style";
import {FiPower} from 'react-icons/fi'
export const Profile = ({ srcImg, username}) => {
    return (
        <Container to="/profile">
              <Link>
            <FiPower size={40} color="white"/>
            </Link>
            <img src={srcImg} alt="imagem do usuário" />
            <span>{username}</span>
          
        </Container>

    )
}