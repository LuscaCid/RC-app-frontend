import styled from 'styled-components'

export const Container = styled.button`
    border: none;
    background: transparent;
    color: ${({theme}) => theme.colors.buttonTextBg};
    text-decoration: underline;
    cursor: pointer;
    
`