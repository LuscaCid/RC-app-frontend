import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    grid-template-rows: 10rem auto;
    grid-template-areas: 
    "header",
    "sidenav"
    ;
    width: 100%;
    height: 100vh;
    >img { 
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        margin: 32rem auto;
    }
`