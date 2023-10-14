import styled from 'styled-components';

export const ModalTitle= styled.h2`

    font-size: 32px;
    font-weight: normal;
    margin: -6px 0 12px -2px;
`

export const ModalClose= styled.button`
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
export const ModalText= styled.p`
    line-height: 1.55;
    margin-bottom: 23px;
`
export const ModalForm= styled.form`
    display: inline-grid ;
        text-align: end;
`
export const FormInput= styled.input`
    margin-bottom: 20px;
`
export const ModalSend= styled.button`
    color: #f9f8f6;
    border: 0;
    background: ${(p) => p.theme.colors.accentColor};
    box-shadow: none;
    width: 135px;
    height: 40px;
    border-radius: 7px;
    margin-left: auto;
    margin-right: auto;
    cursor: pointer;
  &:hover {
    color: #ff0000; /* Змініть колір при наведенні */
  }

`

