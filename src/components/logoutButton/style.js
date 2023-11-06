import styled from 'styled-components'
import { Link } from 'react-router-dom'
export const Container= styled(Link)`
  background: none;
  border: none;
  cursor: pointer;
  &:hover{
    filter: brightness(.9);
  }
`