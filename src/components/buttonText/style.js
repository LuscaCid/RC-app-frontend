import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled(Link)`
    &:hover{
       filter: brightness(.7) 
    }
    display: flex;
    flex-direction: row;
    align-items: center;
    background: transparent;
    color: ${({theme}) => theme.colors.buttonTextBg};
    text-decoration: underline;
    cursor: pointer;
    font-size: 1.6rem;
    padding: 1rem 3.5rem;
    color: ${({theme, isActive}) => isActive? theme.colors.buttonTextBg : "#fff"};
`