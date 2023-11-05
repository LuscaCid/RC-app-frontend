import styled from 'styled-components'

export const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: grid;
    grid-template-rows: 11rem auto;
    grid-template-areas: 
    "Header"
    "content";
    >main{
        display: grid;
    grid-area: content;
    overflow-y: auto;
    }
`

export const Form = styled.form`
   
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: min(120rem, 90%);
    background: ${({theme}) => theme.colors.loginBgForm};
    padding: 6rem 4rem;
    margin: 2rem auto;
    border-radius: .8rem;
    >h1 {
        font-size: 3.6rem;
        margin-bottom: 1.2rem;
        padding: 0 0 2rem;
        border-bottom: 1px solid black;
    }
    >.flex {
        gap: 2rem;
        display: flex;
        width: 100%;
        justify-content: space-between;
    }
    label{
        width: fit-content;
        font-size: 2.1rem;
        font-weight: 700;
    }
    section{
        width: 100%;
    }
    .two-inputs{
        display: flex;
        flex-direction: row;

    }
    footer{
        width: 100%;
        gap: 2rem;
        display: flex;
        flex-direction: column;
    }
    footer + footer {
        margin-left: 2rem;
    }
    
`