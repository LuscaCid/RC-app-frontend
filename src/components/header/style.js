import styled from 'styled-components'

export const Container = styled.header`
    width: 100%;
    padding: 0 2rem;
    height: 9rem;
    background: ${({theme}) => theme.colors.background_900};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: white;
    >img{
        width: 13rem;
    }
`