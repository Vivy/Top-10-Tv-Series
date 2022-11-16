import styled from 'styled-components';

export const Cell = styled.div`
  align-self: center;
  text-align: center;
  grid-column: ${({ start, end }) => `${start}/${end}`};
&:first-child {
  &::before {
    content: "👑"
  }}
&:nth-child(2) {
  &::before{
    content: "🥈"
  }
}
&:nth-child(3) {
  &::before{
    content: "🥉"
  }
}
`

export const Pyramid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(4, 1fr);
  justify-items: center;
  `


