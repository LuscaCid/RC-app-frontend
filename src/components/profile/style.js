import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled(Link)`  
    text-decoration: none;
    display: flex;
    flex-direction: row-reverse;
    gap: 1rem;
    align-items: center;
    >span {
        font-size: 2.1rem;
        color: #fff;
        font-weight: 700;
    }
    >img {
        margin-right: 5rem;
        width: 6rem;
        height: 6rem;
        border-radius: 50%;

    }
    
`