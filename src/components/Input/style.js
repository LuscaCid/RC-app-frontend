import styled from 'styled-components'

export const Container = styled.div`
    background: ${({theme}) => theme.colors.background_100};
    margin-bottom: 2rem;
    position: relative;
    border-radius: 0.6rem;
    width: 100%;
    >input{
        font-size: 1.6rem;
        width: 100%;
        padding: 1.2rem 3.4rem;
        border-radius: 0.6rem;
        border: none;
        background: transparent;
    }
    >svg{
        position: absolute;
        left: 1rem;
        top: .9rem
    }
`