import styled from 'styled-components'

export const Container = styled.div`
    background: #fff;
    border-radius: 999px;
    width: 100%;
    padding: .8rem 1.9rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: transform 0.4s, filter 0.5s;
    cursor: pointer;

    &:hover{
        transform: translateY(-4px);
        filter: brightness(0.9);
    }

    .info{
        h2 {
            font-size: 1.8rem;
        }
        p{
            font-size: 1.4rem;
        }
    }
    .buttons{
        display: flex;
        gap: 1rem;
        >button{
            background: none;
            border: none;
            font-size: 1.8rem;
            cursor: pointer;
            transition: transform 0.3s;
            &:hover{
                transform: scale(1.2);
            }
        }
    }
`