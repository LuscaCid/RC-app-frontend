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
    padding: 5rem 3rem;
    border-radius: .7rem .7rem 0 0;
    >h1{
        margin-bottom: 2rem;
        font-size: 4.2rem;
        padding-bottom: 1rem;
        border-bottom: 1px solid ${({theme})=> theme.colors.background_900};
    }
`

export const MainContent = styled.div`
    width: min(90rem, 90%);
    margin: 3rem auto;
`