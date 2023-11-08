import styled from 'styled-components'
import {FiCamera} from 'react-icons/fi'
export const Container = styled.div`
    >input {
        background: url(FiCamera);
        display: none;
        
    }

    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    img {
        margin-top: -7rem;
        border-radius: 50%;
        width: 13rem;
        
        } 
    >header{
        height: 10rem;
        padding: 0 5rem;
        box-shadow: 0 1rem 2rem -1rem rgb(0,0,0, 0.48);
        background: ${({theme}) => theme.colors.background_900};
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    } 
`
export const Form = styled.form`
    width: 40rem;
    margin-top: 1rem;
    background: ${({theme}) => theme.colors.loginBgForm};
    padding: 3rem 2.4rem;
    border-radius: 1.4rem;
    align-items: flex-start;
    
    
    h1{
        font-size: 3.2rem;
    }
    >:nth-child(3){
        margin-bottom: 2.3rem;
    }
`