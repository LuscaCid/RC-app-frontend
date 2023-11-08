import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled(Link)`
    
    border-radius: .4rem;
    width: 90%;
    display: flex;
    flex-direction: row;
    align-items: center;
    background: none;
    color: ${({theme}) => theme.colors.buttonTextBg};
    text-decoration: none;
    cursor: pointer;
    font-size: 1.6rem;
    padding: 1rem 2.5rem;
    
    font-size: 1.5rem;
    color: ${({theme, isActive}) => isActive? theme.colors.buttonTextBg : "#fff"};
    &:hover{
        background: #1e2251;
        color: white;
    }
`