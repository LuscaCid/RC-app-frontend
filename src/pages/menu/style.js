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
    
    >img { 
        position: absolute;
        top: 20rem;
        right: 0;
        left: 0;
        margin: 0 auto;
     
    }
`
