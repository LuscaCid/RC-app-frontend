import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
   
    background: ${({theme}) => theme.colors.loginBg};
    padding: 14rem;

`

export const Content = styled.div`
    width: 80rem;
    background: ${({theme}) => theme.colors.loginBgForm};
    margin: auto;
    
    
` 

export const Form = styled.form`


`