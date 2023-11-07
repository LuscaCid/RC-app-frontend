import styled from 'styled-components'
import { Link } from 'react-router-dom'
export const Container = styled.header`
    box-shadow: 0 1rem 2rem -1rem rgb(0,0,0, 0.4);
    width: 100%;
    padding: 0 3rem;
    background: ${({theme}) => theme.colors.background_900};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: white;
    >div{
        display: flex;
        align-items: center;
        >img{
            margin-right: 1rem;
        }
    }
   
`

export const LinkContainer = styled(Link)`
    img{   
            width: 13rem;
        }
`

export const BurguerButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    margin-right: 2rem;
    &:hover{
        filter: brightness(.9);
    }
`