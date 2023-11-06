import styled from 'styled-components'

export const Container = styled.button`
    background: ${({theme,isForm})=> isForm? theme.colors.buttonBg : '#000'} ;
    width: 100%;
    padding:${({isForm})=> isForm? '2.3rem' : '1.5rem'};
    color: ${({theme})=> theme.colors.wordBg};
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: ${({isForm})=> isForm ? '0 0 .7rem .7rem' : ".7rem;" };
    font-size:${({isForm})=> isForm? '2.3rem' : '1.5rem'};
    font-weight: 700;
    gap: .5rem;
    >span{
        color: white;
    }
    cursor: pointer;
    transition: transform 0.5s;
    &:hover{
        filter: brightness(1.1);
    }
`