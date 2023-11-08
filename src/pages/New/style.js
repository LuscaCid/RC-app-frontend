import styled from 'styled-components'

export const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: grid;
    grid-template-rows: 10rem auto;
    grid-template-areas: 
    "Header"
    "content";
    >main{
        display: grid;
    grid-area: content;
    overflow-y: auto;
    }
    position: relative;
    >:nth-child(2){
        position: absolute;
        top: 10rem;
        height: calc(100vh - 10rem);
        z-index: 2;
    }
`

export const Form = styled.form`
   
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    
    background: ${({theme}) => theme.colors.loginBgForm};
    padding: 5rem 3rem;
    margin: 0 auto;
    border-radius: .7rem .7rem 0 0 ;
    >h1 {
        font-weight: 800;
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

export const MainContent = styled.div`
    width: min(90rem, 90%);
    margin: 3rem auto;
`