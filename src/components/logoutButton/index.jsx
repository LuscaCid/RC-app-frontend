import { useAuth } from '../../hooks/auth'
import {Container} from './style'
import { FiPower } from 'react-icons/fi'
export const LogoutButton = () => {
  const {signOut} = useAuth()
  return (
    <Container to='/' onClick={signOut}>
      {<FiPower size={40} color='white' />}
    </Container>

  )
}