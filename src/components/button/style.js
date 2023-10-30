import styled from 'styled-components'

export const Container = styled.button`
    background: #000;
    width: 100%;
    padding: 1.2rem 0;
    color: ${({theme})=> theme.colors.wordBg};
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: .7rem;
    font-size: 1.6rem;
    font-weight: 700;
    gap: .5rem;
    >span{
        color: white;
    }
    cursor: pointer;
    transition: transform 0.5s;
    &:hover{
        transform: translateY(-3px);
    }
`