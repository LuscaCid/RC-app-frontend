import { Container } from "./style";

export const Button = ({functions , isForm ,title, span}) => {
    return (
        <Container 
        onClick={functions}
        isForm = {isForm} 
        span={span}>

            {title}
            <span>
            {span}
            </span>

        </Container>


    )
}