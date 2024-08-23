import React from "react";
import * as S from "./styles";
import Image from "next/image";

const Header = () => {
  return (
    <S.Container>
      <S.Content className="fadeLeft">
        <p>Recipes</p>
        <Image
          priority
          height={70}
          width={180}
          src="/logo.svg"
          alt="Logo ReciMe"
        />
      </S.Content>
    </S.Container>
  );
};

export default Header;
