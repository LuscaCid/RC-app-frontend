import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    
    background: ${({theme}) => theme.colors.loginBg};
    padding: 10rem;

`

export const Content = styled.div`
    width: 94rem;
    background: ${({theme}) => theme.colors.loginBgForm};
    margin: auto;
    border-radius: 0.7rem;
    display: flex;
` 

export const Form = styled.form`
    width: 40%;
    padding: 7rem 3rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    >h1{
        font-weight: 700;
        font-size: 3.2rem;
    }
    >label{
        font-weight: 700;
        font-size: 1.5rem;
    }
    >a{
        font-size: 1.4rem;
        color: #000;

    }
`

export const StyledSide = styled.div`
    padding: 3rem;
    width: 100%;
    border-radius:  0 .5rem .5rem 0;
    background: linear-gradient(130deg ,rgb(0,0,0, 0.7), #E1AA1F);
    color: white;
    >.logo{
        align-items: flex-start;
        justify-content: space-between;
        display: flex;
        .texts{
            height: 35rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            h1{
            font-size: 3.6rem;
            }
            >p{ 
                
                font-size: 1.8rem;
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