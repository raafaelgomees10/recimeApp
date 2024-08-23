import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: center;
  padding: 16px;
  width: 100%;
`;

export const Content = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  max-width: 1100px;
  margin: 0 auto;
  width: 100%;
  > p {
    font-size: 3.2rem;
    font-weight: 600;
  }
`;
