import styled from "styled-components";
import { ReactComponent as userIcon } from "../../../images/newUser.svg";
import { Field } from "formik";

export const LinkBtn = styled.button`
  padding: 3px;
  border: none;
  background: transparent;
  cursor: pointer;
  text-align: center;
  color: #504056;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 102.312%; /* 15.347px */
  letter-spacing: 0.225px;
  text-transform: uppercase;
  &:hover,
  &:focus {
    color: ${(p) => p.theme.colors.accentColor};
    & div {
      background: ${(p) => p.theme.colors.accentColor};
    }
  }
  &.activ {
    color: ${(p) => p.theme.colors.accentColor};
    & div {
      background: ${(p) => p.theme.colors.accentColor};
    }
  }
  &.none {
    display: none;
  }
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
  @media screen and (min-width: 1024px) {
    text-align: center;

    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: 102.312%; /* 25.578px */
    letter-spacing: 0.375px;
    text-transform: uppercase;
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const WrapLink = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 10px;
  @media screen and (min-width: 768px) {
    margin-bottom: 20px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 30px;
  }
`;

export const LogInElips = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid ${(p) => p.theme.colors.border};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px;

  &:hover,
  &:focus {
    border: 1px solid ${(p) => p.theme.colors.accentColor};
    & svg {
      color: ${(p) => p.theme.colors.accentColor};
    }
  }
`;

export const LogInIcon = styled(userIcon)`
  width: 28px;
  height: 28px;
  fill: ${(p) => p.theme.colors.textColor};
  &:hover {
    fill: ${(p) => p.theme.colors.accentColor};
  }
`;

export const DropDown = styled.div`
  position: absolute;
  top: 78px;
  right: 0;
  display: block;
  background: ${(p) => p.theme.colors.white};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 10px;
  z-index: 1;

  ${LogInElips}:hover & {
    display: block;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  ${LogInElips}:hover & ul {
    display: block;
  }
  @media screen and (min-width: 768px) {
    top: 81px;
  }

  @media screen and (min-width: 1024px) {
    top: 84px;
  }

  @media screen and (min-width: 1440px) {
    top: 88px;
  }
`;

export const ListItem = styled.li`
  padding: 8px 0;
  a {
    display: block;
    color: ${(p) => p.theme.colors.textColor};
    text-decoration: none;

    &:hover {
      background-color: ${(p) => p.theme.colors.accentColor};
      color: ${(p) => p.theme.colors.white};
    }
  }
`;

export const LogOut = styled.button`
  display: block;
  color: ${(p) => p.theme.colors.textColor};
  text-decoration: none;
  padding: 0;
  border: none;
  background: transparent;
  &:hover {
    background-color: ${(p) => p.theme.colors.accentColor};
    color: ${(p) => p.theme.colors.white};
  }
`;

export const Modal = styled.div`
  max-width: 90%;
  max-height: 90%;
  padding: 10px;
  border: 1px solid ${(p) => p.theme.colors.border};
  border-radius: 4px;
  position: fixed; /* Замініть 'relative' на 'fixed' для розміщення модального вікна відносно вікна браузера */
  top: 50%; /* Розміщення в вертикальному центрі сторінки */
  left: 50%; /* Розміщення в горизонтальному центрі сторінки */
  transform: translate(-50%, -50%); /* Вирівнювання вікна по центру */
  /* background-color: ${(p) => p.theme.colors.white}; */
  background: ${(p) => p.theme.colors.white};
  box-shadow: 0 5px 35px rgba(0, 0, 0, 0.75);
  @media screen and (min-width: 768px) {
    padding: 20px;
  }

  @media screen and (min-width: 1440px) {
    /* width: 500px;
  height: 329px; */
    padding: 30px;
  }
`;

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Півпрозорий чорний фон */
  display: flex;
  justify-content: center; /* Центруємо горизонтально */
  align-items: center; /* Центруємо вертикально */
  z-index: 3;
`;

export const FormLogin = styled.form`
  display: table-caption;
  position: relative;
`;
export const LoginPasswordToggle = styled.h3`
  color: #504056;

  text-align: center;

  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 102.312%; /* 15.347px */
  letter-spacing: 0.225px;
  text-transform: uppercase;
  &:hover,
  &:focus {
    color: ${(p) => p.theme.colors.accentColor};
  }
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
    text-align: center;

    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: 102.312%; /* 25.578px */
    letter-spacing: 0.375px;
    text-transform: uppercase;
  }
`;

export const LoginModalText = styled.p`
  color: #504056;
  display: flex;
  margin-left: 10px;
  /* text-align: center; */
  align-self: center;

  font-size: 9px;

  /* font-size: 16px; */

  font-style: normal;
  font-weight: 400;
  line-height: 102.312%; /* 15.347px */
  letter-spacing: 0.225px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
  @media screen and (min-width: 1024px) {
    font-size: 16px;
  }

  /* min-width: 400px; */
  @media (min-width: 1024px) and (max-width: 1439px) {
    display: flex;
    justify-content: center;
    /* font-size: 20px; */
    margin: 12px 0;
    font-family: Century Gothic;
    font-style: normal;
    font-weight: 700;
    line-height: 102.312%; /* 25.578px */
    letter-spacing: 0.375px;
    font-weight: bold;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    display: flex;
    justify-content: center;
    /* font-size: 18px; */
    margin: 8px 0;

    font-family: Century Gothic;
    font-style: normal;
    font-weight: 700;
    line-height: 102.312%; /* 25.578px */
    letter-spacing: 0.375px;
    font-weight: bold;
  }
  @media (max-width: 767px) {
    display: flex;
    justify-content: center;
    /* font-size: 18px; */
    margin: 8px 0;

    font-family: Century Gothic;
    font-style: normal;
    font-weight: 700;
    line-height: 102.312%; /* 25.578px */
    letter-spacing: 0.375px;
    font-weight: bold;
  }

  @media screen and (min-width: 1440px) {
    margin-left: 30px;
    text-align: center;

    font-size: 18px;
    font-style: normal;
    /* font-weight: 700; */
    line-height: 102.312%; /* 25.578px */
    letter-spacing: 0.375px;
    /* text-transform: uppercase; */
    /* font-weight: bold; */
    display: flex;
    align-self: center;
  }
`;
export const LableInput = styled.p`
  color: #504056;
  display: flex;
  margin-left: 10px;
  /* text-align: center; */
  align-self: center;
  font-size: 9px;

  font-style: normal;
  font-weight: 400;
  line-height: 102.312%; /* 15.347px */
  letter-spacing: 0.225px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1024px) {
    font-size: 16px;
  }

  @media screen and (min-width: 1440px) {
    margin-left: 30px;
    text-align: center;

    font-size: 18px;
    font-style: normal;
    /* font-weight: 700; */
    line-height: 102.312%; /* 25.578px */
    letter-spacing: 0.375px;
    /* text-transform: uppercase; */
    /* font-weight: bold; */
    display: flex;
    align-self: center;
  }
`;




export const FormikInput = styled(Field)`
  margin: 3px 3px 3px 0;

  max-width: 150px;
  min-width: 130px;
  /* max-height: 20px; */

  border-radius: 4px;
  border: 1px solid ${(p) => p.theme.colors.borderCard};
  border-radius: 25px;
  padding: 3px 10px;
  outline: none;
  /* text-align: center;
font-family: Century Gothic; */
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 102.312%; /* 12.955px */
  letter-spacing: 0.19px;
  &:hover,
  &:focus {
    /* outline: 1px solid ${(p) => p.theme.colors.accentColor}; */
    border: 1px solid ${(p) => p.theme.colors.accentColor};
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1024px) {
    max-width: 300px;
    min-width: 280px;
    font-size: 18px;
    padding: 5px 15px;
  }

  @media screen and (min-width: 1440px) {
    /* min-width: 300px; */
    max-width: 400px;
    min-width: 350px;

    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 102.312%; /* 25.578px */
    letter-spacing: 0.375px;

    margin: 10px;
    border-radius: 25px;
    /* color: #b2b2b2; */
    border-color: ${(p) => p.theme.colors.borderCard};
    padding: 10px 30px;
    /* &:focus-visible{
            border-color: ${(p) => p.theme.colors.accentColor} !important;
        } */
  }

  @media (min-width: 1440px) {
    max-width: 100%;
    max-height: 35px;
    margin: 5px;

    font-size: 22px;
  }

  @media (min-width: 1024px) and (max-width: 1439px) {
    width: 350px;
    height: 45px;
    font-size: 26px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    width: 250px;
    height: 40px;
    font-size: 16px;
  }

  @media (max-width: 767px) {
    max-width: 100%;
    height: 45px;
    margin: 5px;

    font-size: 20px;
  }
`;
export const InputField = styled(Field)`
  margin: 3px 3px 3px 0;
  max-width: 150px;
  min-width: 130px;
  /* max-height: 20px; */
  border-radius: 4px;
  border: 1px solid ${(p) => p.theme.colors.borderCard};
  border-radius: 25px;
  padding: 3px 10px;
  outline: none;

  /* text-align: center;
font-family: Century Gothic; */
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 102.312%; /* 12.955px */
  letter-spacing: 0.19px;
  &:hover,
  &:focus {
    /* outline: 1px solid ${(p) => p.theme.colors.accentColor}; */
    border: 1px solid ${(p) => p.theme.colors.accentColor};
  }

  @media screen and (min-width: 768px) {
    max-width: 220px;
    min-width: 200px;
    font-size: 14px;
  }
  @media screen and (min-width: 1024px) {
    max-width: 300px;
    min-width: 280px;
    font-size: 18px;
    padding: 5px 15px;
  }

  @media screen and (min-width: 1440px) {
    /* min-width: 300px; */
    max-width: 400px;
    min-width: 350px;

    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 102.312%; /* 25.578px */
    letter-spacing: 0.375px;

    margin: 10px;
    border-radius: 25px;
    /* color: #b2b2b2; */
    border-color: ${(p) => p.theme.colors.borderCard};
    padding: 10px 30px;
    /* &:focus-visible{
            border-color: ${(p) => p.theme.colors.accentColor} !important;
        } */
  }
`;

export const Underline = styled.div`
  flex: 1;
  height: 1px;
  background-color: #000; /* You can change the color to your preference */
  /* margin-left: 20px; Adjust the spacing between the title and the line */
`;

export const WrapInput = styled.div`
  display: flex;
  gap: 5px;
  margin-bottom: 15px;
  @media screen and (min-width: 768px) {
    margin-bottom: 20px;
  }
  @media screen and (min-width: 1024px) {
    gap: 10px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 30px;
  }
`
export const WrapInputOrders = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
  @media screen and (max-width: 768px) {
    margin-bottom: 20px;

    flex-direction: column;
    align-items: center;
  }
  @media screen and (min-width: 1024px) {
    gap: 10px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 30px;
  }

`;
export const WrapPhone = styled.div`
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    margin-bottom: 30px;
  }
  @media screen and (min-width: 1024px) {
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 40px;
  }
`;

export const InputErrors = styled.div`
  font-size: 12px;
  display: flex;
  justify-content: center;
`;

export const InputBlock = styled.div`
  @media (min-width: 1440px) {
    padding: 25px;
  }

  @media (min-width: 1024px) and (max-width: 1439px) {
    padding: 25px;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    padding: 15px;
  }
  @media (max-width: 768px) {
  }
`;

//     min-width: 400px;
//     @media (min-width: 1024px) and (max-width: 1439px) {
//   min-width: 300px;
// }
// @media (min-width: 768px) and (max-width: 1023px) {
//   min-width: 250px;
// }
// @media (max-width: 768px) {
//   min-width: 200px;
// }
export const LoginBlock= styled.div`
height: 50dvh;

  `



export const FormikInputOrders = styled(Field)`
  margin: 3px 3px 3px 0;


  /* max-height: 20px; */

  border-radius: 4px;
  border: 1px solid ${(p) => p.theme.colors.borderCard};
  border-radius: 25px;
  padding: 3px 10px;
  outline: none;
  /* text-align: center;
font-family: Century Gothic; */
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 102.312%; /* 12.955px */
  letter-spacing: 0.19px;
  &:hover,
  &:focus {
    /* outline: 1px solid ${(p) => p.theme.colors.accentColor}; */
    border: 1px solid ${(p) => p.theme.colors.accentColor};
  }


  @media (min-width: 1440px) {
    max-width: 100%;
    max-height: 35px;
    margin: 5px;

    font-size: 22px;
  }

  @media (min-width: 1024px) and (max-width: 1439px) {
    width: 350px;
    height: 45px;
    font-size: 26px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    width: 250px;
    height: 40px;
    font-size: 22px;
  }

  @media (max-width: 767px) {
    max-width: 100%;
    height: 40px;

    font-size: 20px;
    margin-bottom: 14px;
  }
  `

  export const LableInputOreders = styled.p`
  color: #504056;
  display: flex;
  margin-left: 10px;
  /* text-align: center; */
  align-self: center;
  font-size: 9px;

  font-style: normal;
  font-weight: 400;
  line-height: 102.312%; /* 15.347px */
  letter-spacing: 0.225px;

  @media screen and (max-width: 767px) {
    font-size: 18px;
    justify-content:center;
  }
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 16px;
  }

  @media screen and (min-width: 1440px) {
    margin-left: 30px;
    text-align: center;

    font-size: 18px;
    font-style: normal;
    /* font-weight: 700; */
    line-height: 102.312%; /* 25.578px */
    letter-spacing: 0.375px;
    /* text-transform: uppercase; */
    /* font-weight: bold; */
    display: flex;
    align-self: center;
  }
`;