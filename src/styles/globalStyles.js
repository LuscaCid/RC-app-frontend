import {createGlobalStyle} from 'styled-components'

export default  createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        background: ${({theme}) => theme.colors.background_100};
        width: 100%;
        height: 100vh;
        
    }   
    :root{
        font-size: 62.5%;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    *, body, input, textarea, button {
        font-family: 'Roboto Slab', serif;
    }
`