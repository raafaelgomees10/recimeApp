import React, { useState } from "react";
import * as S from "./styles";
import Cards from "../cards";
import Loading from "../loading/loading";

const SandwichesList = ({ recipes }) => {
  const [selectedDifficulty, setSelectedDifficulty] = useState("easy");

  const handleFilterChange = (difficulty) => {
    setSelectedDifficulty(difficulty);
  };

  const sortedRecipes = recipes.sort((a, b) => {
    if (
      a.difficulty === selectedDifficulty &&
      b.difficulty !== selectedDifficulty
    ) {
      return -1;
    } else if (
      a.difficulty !== selectedDifficulty &&
      b.difficulty === selectedDifficulty
    ) {
      return 1;
    }
    return a.position - b.position;
  });

  return (
    <S.Container>
      <div className="fadeUp">
        <S.Title>Trending Recipes</S.Title>
        <S.Level>{selectedDifficulty}</S.Level>
        <S.Text>You can filter recipes by difficulty.</S.Text>
        <S.ButtonGroup>
          <S.Buttons
            $isSelected={selectedDifficulty === "easy"}
            onClick={() => handleFilterChange("easy")}
          >
            Easy
          </S.Buttons>
          <S.Buttons
            $isSelected={selectedDifficulty === "medium"}
            onClick={() => handleFilterChange("medium")}
          >
            Medium
          </S.Buttons>
          <S.Buttons
            $isSelected={selectedDifficulty === "hard"}
            onClick={() => handleFilterChange("hard")}
          >
            Hard
          </S.Buttons>
        </S.ButtonGroup>
      </div>

      <S.CardGroup>
        {sortedRecipes?.map((recipe, index) => (
          <li key={recipe.id}>
            <Cards
              recipe={recipe}
              index={index}
              selectedDifficulty={selectedDifficulty}
            />
          </li>
        ))}
      </S.CardGroup>
    </S.Container>
  );
};

export default SandwichesList;
