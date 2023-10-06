import styled from "styled-components";

export const Title= styled.h2`

    display: flex;
    justify-content: center;
    font-size: 1.8em;
    font-weight: bold;
    padding: 12px;
`
export const Container= styled.div`

    position: relative;
    background: #e8dfd8;
    color: #333;
    font-size: 12px;
    padding: 30px 0 60px;
`

export const SubTitle= styled.h3`

    display: flex;
    justify-content: center;
    font-size: 1.5em;
    font-weight: bold;
    padding: 8px;
`

export const ConditionsTitle= styled.h4`

    display: flex;
    font-size: 1.5em;
    font-weight: bold;
    padding: 8px;
`

export const ConditionsList= styled.ul`
    margin-left: 25px;
    display: block;
    margin-top: 5px;
`
export const ModalBackground= styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Півпрозорий чорний фон */
  display: flex;
  justify-content: center; /* Центруємо горизонтально */
  align-items: center; /* Центруємо вертикально */
`
export const ModalContent= styled.div`
  background: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  max-width: 80%;
  width: 400px;
  text-align: center;
  position: relative;
`

export const OpenModal= styled.button`
    width: 340px;
    height: 70px;
    background: #FF49AB;
    border-Radius: 25px;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    color: white;
    margin-left: auto;
    margin-right: auto;
    border: none;
    margin-top: 50px;
    cursor: pointer;
    

`
export const CloseModal= styled.button`

`