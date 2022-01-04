import { useState } from "react";
import styled from "styled-components";

export const ModalContainer = styled.div`
  margin: 8em;
  display: flex;
  justify-content: center;
`;

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: grey;
`;
export const ModalBtn = styled.button`
  background-color: #4000c7;
  text-decoration: none;
  border: none;
  padding: 20px;
  color: white;
  border-radius: 30px;
  cursor: pointer;
`;

export const ModalView = styled.div.attrs((props) => ({
  // attrs 메소드를 이용해서 아래와 같이 div 엘리먼트에 속성을 추가할 수 있습니다.
  role: "dialog",
}))`
  position: relative;
  width: 16rem;
  height: 8rem;
  background-color: #fff;
  color: #4000c7;
  font-size: 1.5em;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ModalContainer onClick={openModalHandler}>
        <ModalBtn onClick={openModalHandler}>
          {isOpen ? "Opened!" : "Open Modal"}

          {isOpen ? (
            <ModalBackdrop>
              <ModalView>
                <div onClick={openModalHandler}></div>
                클릭 시 모달이 닫힙니다.
              </ModalView>
            </ModalBackdrop>
          ) : null}
        </ModalBtn>
      </ModalContainer>
    </>
  );
};
