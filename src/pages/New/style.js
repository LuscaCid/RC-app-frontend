import styled from 'styled-components'

export const Container = styled.div`
    height: 100vh;
    width: 100%;
    
`

export const Form = styled.form`
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
    width: min(80rem, 90%);
    background: ${({theme}) => theme.colors.loginBgForm};
    padding: 4rem 2rem;
    margin: auto;
    border-radius: .8rem;
    
    label{
        width: fit-content;
        font-size: 1.5rem;
        font-weight: 700;
    }
    
`