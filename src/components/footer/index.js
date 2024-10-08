import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Container = styled.footer`
  border-top: 1px solid ${(props) => props.theme.colors.primary};
  color: #fff;
  padding: 16px;
  text-align: center;
  width: 100%;
`;

const Text = styled.p`
  font-size: 1.8rem;
  margin: 0;

  > a {
    font-size: 1.8rem;

    transition: color 0.2s;

    &:hover {
      color: ${(props) => props.theme.colors.link};
    }
  }
`;

const Footer = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  return (
    <Container>
      <Text>
        Developed with {isDarkMode ? "💜" : "💛"} by{" "}
        <a href="https://rafaelgomes.netlify.app?utm_source=recimeApp">
          Rafael Gomes
        </a>
      </Text>
    </Container>
  );
};

export default Footer;
