import styled from "styled-components";

export const Card = styled.div`
  border-radius: 16px;
  border: 1px solid black;
  padding-bottom: 12px;

  > img {
    margin-top: -1px;
    border-top-right-radius: 16px;
    border-top-left-radius: 16px;
  }
`;
export const Details = styled.div`
  padding: 8px;
`;
export const Title = styled.div`
  font-size: 1.4rem;
  font-weight: 600;
`;
export const Level = styled.div`
  color: #c5c5c5;
  font-size: 1.2rem;
`;
