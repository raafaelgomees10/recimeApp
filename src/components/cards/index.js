import React from "react";
import * as S from "./styles";

const Cards = ({ recipe, selectedDifficulty, isFirstRender, index }) => {
  const isSelected = selectedDifficulty === recipe.difficulty;
  // 1100 is the time to make animation of the header title and buttons
  const delay = isFirstRender ? 1100 + index * 200 + "ms" : index * 200 + "ms";

  return (
    <S.Card $isSelected={isSelected} $delay={delay}>
      <S.Img
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
