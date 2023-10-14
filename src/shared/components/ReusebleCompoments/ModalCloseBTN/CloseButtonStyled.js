import styled from "styled-components"

export const ModalClose = styled.button`
    z-index: 100;
    top: 9px;
    right: 9px;
    cursor: pointer;
    transition: color .5s;
    position: absolute;
  color: #b2b2b2;
  background: transparent; /* Додайте прозорий фон */
  border: none; /* Видаліть границю кнопки */

  &:hover {
    color: #ff0000; /* Змініть колір при наведенні */
  }
  `