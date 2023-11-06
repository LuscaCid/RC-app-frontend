import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row-reverse;
    background: ${({theme}) => theme.colors.loginBg};
    

`

export const Content = styled.div`
    width: min(104rem, 93%);
    background: ${({theme}) => theme.colors.loginBgForm};
    margin: auto;
    border-radius: 0.7rem;
    display: flex;
` 

export const Form = styled.form`
    width: 40%;
    padding: 5rem 3rem;
    display: flex;
    flex-direction: column;
    gap: 0.1rem;
    >h1{
        margin-bottom: 2rem;
        border-bottom: 1px solid black;
        padding-bottom: 1rem;
        font-weight: 700;
        font-size: 4.2rem;
    }
    >label{
        font-weight: 700;
        font-size: 2.1rem;
    }
    >a{
        font-size: 1.7rem;
        color: #000;
        margin-bottom: .7rem;
    }
`

export const StyledSide = styled.div`
    padding: 3rem;
    width: 80%;
    border-radius: .5rem 0 0 .5rem ;
    background: linear-gradient(130deg ,rgb(0,0,0, 0.7), #E1AA1F);
    color: white;
    >.logo{
        align-items: flex-start;
        justify-content: space-between;
        display: flex;
        .texts{
            height: 19rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            h1{
            font-size: 5.6rem;
            }
            >p{ 
                
                font-size: 2.1rem;
            }
            

        }
        .img{
            >img{
                margin-top: -5rem;
                width: 22rem;
            }
        }
            
    }
`