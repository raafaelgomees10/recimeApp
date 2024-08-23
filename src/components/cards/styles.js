import styled, { css, keyframes } from "styled-components";

const fadeDown = keyframes`
0% {
  opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Card = styled.div`
  animation: ${fadeDown} 0.5s ease-out forwards;
  animation-delay: ${(props) => props.$delay || "0ms"};
  border: 1px solid
    ${(props) =>
      props.$isSelected
        ? props.theme.fontColor.secondary
        : props.theme.fontColor.primary};
  border-radius: 16px;
  opacity: 0;
  padding-bottom: 12px;

  > img {
    border-top-right-radius: 16px;
    border-top-left-radius: 16px;
    margin-top: -1px;
  }
`;

export const Details = styled.div`
  padding: 8px;
`;

export const Title = styled.div`
  font-size: 1.4rem;
  font-weight: 600;

  ${(props) =>
    props.$isSelected &&
    css`
      color: ${(props) => props.theme.fontColor.secondary};
    `};
`;

export const Level = styled.div`
  color: #c5c5c5;
  font-size: 1.2rem;
  text-transform: capitalize;
`;
