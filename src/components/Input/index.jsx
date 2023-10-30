import { Container } from "./style";

export const Input = ({icon : Icon ,type, placeholder, ...rest}) => {
    return(
        <Container >

            {Icon && <Icon size={20} />}
            <input type={type} placeholder={placeholder} {...rest} />
        </Container>
    )
}