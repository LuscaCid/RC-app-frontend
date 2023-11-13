import styled from 'styled-components'

export const Container = styled.div`

height: 100vh;
    width: 100%;
    display: grid;
    grid-template-rows: 10rem  auto;
   
    grid-template-areas: 
    "Header"
    
    "content";
    position: relative;
    >:nth-child(2){
        position: absolute;
        top: 10rem;
        height: calc(100vh - 10rem);
        z-index: 2;
    }

    >main{
        display: grid;
        grid-area: content;
        overflow-y: auto;
    }
`
export const DetailsContainer = styled.div`

.hide{
    display: none;
    visibility: hidden;
    opacity: 0;
}
    width: 100%;
    .button{
        margin-top: 2rem;
    }
    padding: 3rem 2rem;
    .Details{
        width: 100%;
        >h1{
        font-size: 2.8rem;
        font-weight: 700;
        margin-bottom: 1.2rem;
        }
        display: flex;
        flex-direction: column;
        gap: .4rem;
            
        >label{
            font-size: 1.6rem;
        }
        >input{
            border: 1px solid ${({theme}) => theme.colors.background_100} ;
            background: transparent;
            padding: .4rem 1.2rem;
            border-radius: .7rem;
            width: 50%;
        }
    }
    
`

export const MainContent = styled.div`
    border-radius: 0.7rem;
    width: min(90rem, 90%);
    margin: 3rem auto;
    background: ${({theme}) => theme.colors.loginBgForm};
    display: flex;
  
    >nav{
        border-radius: .7rem 0 0 .7rem;
        padding: 1.4rem 2rem;
        >ul{
            width: 100%;
            padding: 0 auto;
        }
        width: fit-content;
        background: ${({theme}) => theme.colors.background_900};

    }
`