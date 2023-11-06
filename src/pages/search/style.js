import styled from 'styled-components'

export const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: grid;
    grid-template-rows: 
    10rem auto;
    grid-template-areas: "header" "content";

    
`

export const Form = styled.form`
    background:  ${({theme}) => theme.colors.loginBgForm };
    padding: 4rem 2rem;
    
    >h1{
        font-size: 3.8rem;

    }
`

export const MainContent = styled.div`
    width: min(90rem, 90%);
    margin: 3rem auto;
`