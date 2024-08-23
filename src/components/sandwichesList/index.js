import Cards from "../cards";
import * as S from "./styles";
import React, { useEffect, useState } from "react";
import ModalSandwiche from "../modalSandwiche";

const SandwichesList = ({ recipes }) => {
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [modalSandwiche, setModalSandwiche] = useState(false);
  const [selectedSandwiche, setSelectedSandwiche] = useState(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState("");

  useEffect(() => {
    const localSelectedDifficulty = localStorage.getItem("recime:difficulty");

    if (localSelectedDifficulty) {
      setSelectedDifficulty(localSelectedDifficulty);
    }
  }, [selectedDifficulty]);

  const handleFilterChange = (difficulty) => {
    setIsFirstRender(false);

    localStorage.setItem("recime:difficulty", difficulty);

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

  const handleClick = (recipe) => {
    setSelectedSandwiche(recipe);
    setModalSandwiche(true);
  };

  return (
    <S.Container>
      <S.Content className="fadeUp">
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
      </S.Content>

      <S.CardGroup>
        {sortedRecipes?.map((recipe, index) => (
          <li
            onClick={() => handleClick(recipe)}
            key={`${recipe.id}-${selectedDifficulty}-${index}`}
          >
            <Cards
              index={index}
              recipe={recipe}
              isFirstRender={isFirstRender}
              selectedDifficulty={selectedDifficulty}
            />
          </li>
        ))}
      </S.CardGroup>
      {modalSandwiche && (
        <ModalSandwiche
          sandwiche={selectedSandwiche}
          modalSandwiche={modalSandwiche}
          setModalSandwiche={setModalSandwiche}
        />
      )}
    </S.Container>
  );
};

export default SandwichesList;
