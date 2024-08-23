import React from "react";
import * as S from "./styles";
import Image from "next/image";

const Cards = ({ recipe, selectedDifficulty }) => {
  const isSelected = selectedDifficulty === recipe.difficulty;

  return (
    <S.Card $isSelected={isSelected}>
      <Image
        width={140}
        height={150}
        src={recipe.imageUrl}
        alt={`${recipe.title} photo`}
      />
      <S.Details>
        <S.Title $isSelected={isSelected}>{recipe.title}</S.Title>
        <S.Level>{recipe.difficulty}</S.Level>
      </S.Details>
    </S.Card>
  );
};

export default Cards;
