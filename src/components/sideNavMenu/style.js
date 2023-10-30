import styled from 'styled-components'

export const Container = styled.div`
    height:calc(100vh - 9rem);
    background:  ${({theme}) => theme.colors.background_900};
    border-top: 1px solid gray;
    width: fit-content;
    padding: 5rem 0rem;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    align-items: center;
    justify-content: center;
`