import Image from "next/image";
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
        ? props.theme.colors.secondary
        : props.theme.colors.primary};
  border-radius: 16px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  opacity: 0;
  overflow: hidden;
  padding-bottom: 12px;
  position: relative;
  transition: scale 0.5s ease-out;

  &:hover {
    scale: 1.1;
  }
`;

export const Img = styled(Image)`
  border-top-right-radius: 16px;
  border-top-left-radius: 16px;
  margin-top: -1px;
  object-fit: cover;
  transition: 0.4s all ease-in-out;

  ${Card}:hover & {
    transform: scale(1.07);
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
      color: ${(props) => props.theme.colors.secondary};
    `};
`;

export const Level = styled.div`
  color: ${(props) => props.theme.colors.gray};
  font-size: 1.2rem;
  text-transform: capitalize;
`;
