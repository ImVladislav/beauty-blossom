import styled from "styled-components";

export const Title= styled.h2`

    display: flex;
    justify-content: center;
    font-size: 2.2em;
    font-weight: bold;
    margin-top: 40px;
    color: ${(p) => p.theme.colors.accentColor};
`
export const Container= styled.div`

    position: relative;
    background: #e8dfd8;
    color: #333;
    font-size: 12px;
    padding: 30px 0 60px;
`

export const SubTitle= styled.h3`
    color: ${(p) => p.theme.colors.accentColor};
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
    color: ${(p) => p.theme.colors.accentColor};
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
  z-index: 103;
`
export const ModalContent= styled.div`
  background: white;
  padding: 30px;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  max-width: 90%;

  text-align: center;
  position: relative;
`

export const OpenModal= styled.button`
    width: 340px;
    height: 70px;
    background: ${(p) => p.theme.colors.accentColor};
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
    font-weight: bold;
    font-size: 20px;

    background: ${(p) => p.theme.colors.accentColor};
    &:hover {
  color: #cccccc ;
  background: #f66d52;
  background: ${(p) => p.theme.colors.accentColor};;
    }

`
export const CloseModal= styled.button`

`

export const ModalForm= styled.form`

`

export const FormLavelBloks= styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 14px;
  position: 'relative';
`
export const Label = styled.label`
      
`

export const ModalText= styled.p`
    font-weight: bold;
`

export const ReqStar= styled.span`
    color: red;
    font-weight: bold;
`

export const Input = styled.input`
      margin: 10px;
        border-radius: 12px;
        /* color: #b2b2b2; */
        border-color: #b2b2b2;;
        padding: 10px;
        /* &:focus-visible{
            border-color: ${(p) => p.theme.colors.accentColor} !important;
        } */
        &.error{
            border: 2px solid red;
        }
`
export const ModalShopTypeItem= styled.li`
    display: flex;
    margin: 8px;
`

export const ModalShopTypeText= styled.p`
    margin-left: 8px;
`

export const CheckBox = styled.input`
      width: 20px;
      `
      
      export const ChekBoxThumb= styled.div`
    display: grid;
    justify-items: start;
`