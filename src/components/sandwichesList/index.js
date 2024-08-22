import React from "react";
import * as S from "./styles";
import Cards from "../cards";

const SandwichesList = () => {
  return (
    <S.Container>
      <S.Title>Trending Recipes</S.Title>
      <S.Level>Medium</S.Level>
      <S.Text>You can filter recipes by difficulty.</S.Text>

      <S.ButtonGroup>
        <S.Buttons>Easy</S.Buttons>
        <S.Buttons>Medium</S.Buttons>
        <S.Buttons>Difficulty</S.Buttons>
      </S.ButtonGroup>

      <S.CardGroup>
        <li>
          <Cards />
        </li>
        <li>
          <Cards />
        </li>
        <li>
          <Cards />
        </li>
        <li>
          <Cards />
        </li>
        <li>
          <Cards />
        </li>
        <li>
          <Cards />
        </li>
        <li>
          <Cards />
        </li>
        <li>
          <Cards />
        </li>
      </S.CardGroup>
    </S.Container>
  );
};

export default SandwichesList;
