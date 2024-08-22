import styled from "styled-components";

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
  border: 2px solid #7f8c8d;
  border-left-width: 0;
  padding: 8px 16px;
  cursor: pointer;

  &:first-child {
    border-left-width: 2px;
    border-radius: 20px 0 0 20px;
  }

  &:last-child {
    border-radius: 0 20px 20px 0;
  }
`;

export const CardGroup = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px 16px;
`;
