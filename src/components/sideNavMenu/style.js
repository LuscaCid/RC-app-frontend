import styled from 'styled-components'

export const Container = styled.div`
   
    background:  ${({theme}) => theme.colors.background_900};
    border-top: 1px solid gray;
    width: fit-content;
    padding: 5rem 0rem;
    display: flex;
    flex-direction: column;
    gap: 1.4rem;
    align-items: center;
    justify-content: flex-start;
`