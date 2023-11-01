import {Container} from './style'

export const Textarea = ({ icon : Icon, placeholder, ...rest}) => {
  return (
    <Container 
    placeholder = {placeholder}
    rest = {rest}>
      {Icon && <Icon size={20} />}
     
    </Container>

  )

}