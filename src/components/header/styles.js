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
`;

export const Text = styled.div`
  display: flex;
  align-items: center;

  > p {
    font-size: 3.2rem;
    font-weight: 600;
    margin-right: 24px;

    @media (max-width: 768px) {
      font-size: 2.8rem;
    }
  }
`;
