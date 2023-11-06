import styled from 'styled-components'

export const Container = styled.textarea`
    resize: none;
    background: ${({theme}) => theme.colors.background_100};
    border-radius: .7rem ;
    width: 100%;
    font-size: 1.6rem;
    padding: 1.2rem;
    border: none;
    height: 9rem;
    >svg {
        position: absolute;
    }

`