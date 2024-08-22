import React from "react";
import * as S from "./styles";
import Image from "next/image";

const Cards = () => {
  return (
    <S.Card>
      <Image
        width={120}
        height={140}
        src="https://ddg0cip9uom1w.cloudfront.net/code-challenge/burger.jpg"
        alt={`Name`}
      />
      <S.Details>
        <S.Title></S.Title>
        <S.Level></S.Level>
      </S.Details>
    </S.Card>
  );
};

export default Cards;
