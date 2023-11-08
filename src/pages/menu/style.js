import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    grid-template-rows: 10rem auto ;
    grid-template-areas: 
    "header",
    "main"
    
    ;

    width: 100%;
    height: 100vh;
    position: relative;
    .timing {
        position: absolute;
        right: 12rem;
        top: 12rem;
        .clock{
            font-size: 2.2rem;
        }
    }
    >img { 
        position: absolute;
        top: 20rem;
        right: 0;
        left: 0;
        margin: 0 auto;
     
    }
`
export const Calendar = styled.div`
`