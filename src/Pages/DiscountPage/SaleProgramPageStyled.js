import styled from "styled-components";

export const Title= styled.h2`

    display: flex;
    justify-content: center;
    font-size: 2.2em;
    font-weight: bold;
    margin-top: 40px;
    color: #FF49AB;
`
export const Container= styled.div`

    position: relative;
    background: #e8dfd8;
    color: #333;
    font-size: 12px;
    padding: 30px 0 60px;
`

export const SubTitle= styled.h3`
    color: #FF49AB;
    display: flex;
    justify-content: center;
    font-size: 1.8em;
    font-weight: bold;
    margin: 30px;
`

export const ConditionsTitle= styled.h4`

    display: flex;
    font-size: 1.8em;
    font-weight: bold;
    padding: 20px 0px;

    margin-left: 34px;
    color: #FF49AB;
`
export const Text= styled.p`
    font-weight: bold;
    
`

export const ListItems= styled.li`
    margin-left: 10px;
     list-style-type: decimal;
`



export const ConditionsList= styled.ul`

    display: block;

    margin: 15px 0px 15px 25px;
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
    margin-bottom: 50px;
    cursor: pointer;
    

`
export const CloseModal= styled.button`

`