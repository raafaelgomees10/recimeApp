import styled, { keyframes } from "styled-components";
import Image from "next/image";

const fadeIn = keyframes`
0% {
    opacity: 0;
}
100% {
    opacity: 1;
    visibility: visible;
}
`;

const fadeImage = keyframes`

 0% {
   transform: scale(0);
   opacity: 0.0;
 }
 60% {
   transform: scale(1.05);
 }
 80% {
   transform: scale(0.95);
   opacity: 1;
 }
 100% {
   transform: scale(1);
   opacity: 1;
 } 
`;

export const Container = styled.div`
  align-items: center;
  animation: ${fadeIn} 0.5s ease-in-out;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
`;

export const Modal = styled.div`
  background-color: ${(props) => props.theme.colors.bg};
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  max-width: 90%;
  overflow: hidden;
  padding: 20px;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    overflow-y: auto;
    max-height: 90vh;
    width: 90%;
  }
`;

export const Content = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Img = styled(Image)`
  animation: ${fadeImage} 0.75s ease-in-out;
  border-radius: 5px;
  height: auto;
  max-width: 50%;
  object-fit: cover;

  @media (max-width: 768px) {
    max-height: 45vh;
    max-width: 100%;
    align-self: center;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: auto;
  padding: 0 20px;

  @media (max-width: 768px) {
    padding: 12px 0 0;
  }
`;

export const Title = styled.h2`
  font-size: 3rem;
  text-align: center;
`;

export const Text = styled.p`
  font-size: 1.4rem;
  margin-top: 1rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  @media (max-width: 768px) {
    padding-top: 24px;
  }
`;

export const Button = styled.button`
  align-items: center;
  background: linear-gradient(
    315deg,
    rgb(255, 122, 0) 0%,
    rgb(255, 197, 49) 100%
  );
  border: none;
  border-radius: 16px;
  color: #fff;
  cursor: pointer;
  display: flex;
  font-size: 1.4rem;
  justify-content: center;
  padding: 6px 12px;
  width: 100px;
  transition: opacity 0.2s linear;

  &:hover {
    opacity: 0.8;
  }
`;
