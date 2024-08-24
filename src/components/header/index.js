import React from "react";
import * as S from "./styles";
import Image from "next/image";
import useMedia from "@/hooks/useMedia";

const Header = () => {
  const isMobile = useMedia("(max-width:767px)");

  return (
    <S.Container>
      <S.Content className="fadeLeft">
        <p>Recipes</p>
        <Image
          priority
          height={70}
          width={isMobile ? 150 : 180}
          src="/logo.svg"
          alt="Logo ReciMe"
        />
      </S.Content>
    </S.Container>
  );
};

export default Header;
