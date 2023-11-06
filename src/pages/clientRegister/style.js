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

`
export const Form = styled.form`
    width: 100%;
    
    .inputs{
        gap: 1.2rem;
        width: 100%;
        display: flex;
        >div{
        width: 100%;

        }
    }
    background: ${({theme}) => theme.colors.loginBgForm};
    border-radius: 0.7rem .7rem 0 0;
    padding: 4rem 2rem;
    >h1{
        border-bottom: 1px solid ${({theme}) => theme.colors.background_900};
        padding-bottom: 1rem;
        font-size: 4.2rem;
        font-weight: 800;
    }
`
export const MainContent = styled.div`
    border-radius: 0.7rem;
    width: min(90rem, 90%);
    margin: 3rem auto;
`