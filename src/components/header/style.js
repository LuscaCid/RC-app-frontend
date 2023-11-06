import styled from 'styled-components'
import { Link } from 'react-router-dom'
export const Container = styled.header`
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