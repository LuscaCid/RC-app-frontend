import { Container } from "./style";
import {FiX, FiEdit} from 'react-icons/fi'
export function DisplayOS({phoneModel, releaseDate, OS_id}){
    function handleClick(){
        console.log(phoneModel, releaseDate, OS_id)
    }
    return (
        <Container
        onClick={handleClick}
        >
            <div className="info">
                <h2>{phoneModel}</h2>
                <p>data de criação: {releaseDate}</p>
            </div>
            
            <div className="buttons">
                <button className="edit">{<FiEdit />}</button>
                <button className="remove">{<FiX/>}</button>
            </div>
            
        </Container>
    )

}