import styled from 'styled-components';

export const Cell = styled.div`
  align-self: flex-end;
  text-align: center;
  grid-column: ${({ start, end }) => `${start}/${end}`};
  padding:1rem;
&:first-child {
  background-color:red;
  bottom:0;
  display:flex;
  justify-content:center;
  position:relative;
  margin: 0%;
  font-size:1.2rem;
  &::before {
    content: "👑";
    top:0px;
    position: absolute;
  }}
&:nth-child(2) {
  position:relative;
  background-color:red;
  display:flex;
  justify-content:center;
  align-items:flex-end;
  &::before{
    content: "🥈";
    position: absolute;
    top:-10px;
  }
}
&:nth-child(3) {
  position:relative;
  display:flex;
  background-color:red;
  justify-content:center;
  align-items:flex-end;
  &::before{
    content: "🥉";
    position:absolute;
    top: -10px;
  }
}
`

export const Pyramid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(4, 1fr);
  justify-items: center;
  align-content: flex-end;
  clip-path: polygon(50% 0, 100% 100%, 0% 100%);
  background-color: green;
  `
