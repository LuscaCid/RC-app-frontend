import styled from 'styled-components'

export const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: grid;
    grid-template-rows: 9rem auto;
    grid-template-areas: 
    "Header"
    "content";
    >main{
        display: grid;
    grid-area: content;
    overflow-y: auto;
    }

`
export const Form = styled.form`
    
`