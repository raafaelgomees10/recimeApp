import styled, { css } from "styled-components";

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 32px;
`;

export const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.h2`
  font-size: 2rem;
`;

export const Level = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  margin: 12px 0 0;
  text-transform: capitalize;
`;

export const Text = styled.span`
  display: block;
  font-size: 1.4rem;
`;

export const ButtonGroup = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 24px 0 32px;
`;

export const Buttons = styled.button`
  background: transparent;
  border: 2px solid ${(props) => props.theme.colors.darkGray};
  border-left-width: 0;
  cursor: pointer;
  font-size: 1.4rem;
  padding: 8px 16px;

  &:first-child {
    border-radius: 8px 0 0 8px;
    border-width: 2px;
  }

  &:last-child {
    border-radius: 0 8px 8px 0;
  }

  ${(props) =>
    props.$isSelected &&
    css`
      border-color: ${(props) => props.theme.colors.secondary};
      color: ${(props) => props.theme.colors.secondary};
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
