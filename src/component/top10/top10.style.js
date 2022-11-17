import styled from 'styled-components';

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: aliceblue;
  padding: 10px;
  gap: 1rem;
  h1 {
    position: relative;
    &::after {
      content: " ";
      background-image: url('./top.jpg');
      background-size: cover;
      height: 50px;
      width: 50px;
      position: absolute;
    }
  }
`
