import React from "react";
import * as S from "./styles";

const ModalSandwiche = ({ setModalSandwiche, sandwiche }) => {
  const handleClose = () => {
    setModalSandwiche(false);
  };

  console.log(sandwiche);
  return (
    <>
      <S.Container id="modalContainer">
        <S.Modal className="modal">
          <S.Content>
            <S.Img
              src={sandwiche.imageUrl}
              alt="Imagem"
              width={300}
              height={250}
            />
            <S.Details className="modal-content">
              <div>
                <S.Title>{sandwiche.title}</S.Title>
                <S.Text
                  dangerouslySetInnerHTML={{
                    __html: sandwiche.description,
                  }}
                />
              </div>
              <S.ButtonWrapper>
                <S.Button onClick={handleClose}>Close</S.Button>
              </S.ButtonWrapper>
            </S.Details>
          </S.Content>
        </S.Modal>
      </S.Container>
    </>
  );
};

export default ModalSandwiche;
