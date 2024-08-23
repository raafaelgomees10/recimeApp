import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.h2`
  font-size: 2rem;
`;

export const Level = styled.div`
  font-size: 1.6rem;
  margin: 12px 0 0;
  font-weight: 600;
  text-transform: capitalize;
`;

export const Text = styled.span`
  font-size: 1.4rem;
  display: block;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 24px 0 32px;
`;

export const Buttons = styled.button`
  font-size: 1.4rem;
  background: transparent;
  border: 2px solid ${(props) => props.theme.fontColor.darkGray};
  border-left-width: 0;
  padding: 8px 16px;
  cursor: pointer;

  &:first-child {
    border-width: 2px;
    border-radius: 8px 0 0 8px;
  }

  &:last-child {
    border-radius: 0 8px 8px 0;
  }

  ${(props) =>
    props.$isSelected &&
    css`
      border-color: ${(props) => props.theme.fontColor.secondary};
      color: ${(props) => props.theme.fontColor.secondary};
    `}
`;

export const CardGroup = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px 16px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 768px) and (max-width: 1199px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
