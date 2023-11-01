import styled from 'styled-components'

export const Container = styled.textarea`
    resize: none;
    background: ${({theme}) => theme.colors.background_100};
    border-radius: .6rem ;

    font-size: 1.6rem;
    padding: 2rem;
    border: none;
    height: 10rem;
    >svg {
        position: absolute;
    }

`