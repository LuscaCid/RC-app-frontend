import { Container } from "./style";

export const Button = ({isForm ,title, span}) => {
    return (
        <Container 
        isForm = {isForm} 
        span={span}>

            {title}
            <span>
            {span}
            </span>

        </Container>


    )
}