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
        align-items: baseline;
        display: flex;
        color: #fff;
        position: absolute;
        right: 6rem;
        top: 12rem;
        gap: 2rem;
        .clock{
            font-size: 3.2rem;
            font-weight: bold;
        }
        >:nth-child(2) {
            font-size: 2rem;
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
    display: flex;
    gap: .5rem;
    font-size: 1.9rem;
`