import styled from 'styled-components'

export const Container = styled.button`
    border: none;
    background: transparent;
    color: ${({theme}) => theme.colors.buttonTextBg};
    text-decoration: underline;
    cursor: pointer;
    font-size: 1.8rem;
    padding: 1rem 2rem;
    color: ${({theme, isActive}) => isActive? theme.colors.buttonTextBg : "#fff"};
`