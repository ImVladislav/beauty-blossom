import styled from "styled-components";
import { ReactComponent as userIcon } from "../../../images/newUser.svg";
import { Field } from "formik";

export const Link = styled.button`
  padding: 3px;
  border: none;
  background: transparent;
  cursor: pointer;
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
  top: 70%;
  right: 1%;
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
`;

export const ListItem = styled.li`
  a {
    display: block;
    color: ${(p) => p.theme.colors.textColor};
    text-decoration: none;
    padding: 8px 0;

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
  padding: 8px 0;
  border: none;
  background: transparent;
  &:hover {
    background-color: ${(p) => p.theme.colors.accentColor};
    color: ${(p) => p.theme.colors.white};
  }
`;

export const Modal = styled.div`
  /* width: 500px;
  height: 329px; */
  padding: 30px;
  border: 1px solid ${(p) => p.theme.colors.border};
  border-radius: 4px;
  position: fixed; /* Замініть 'relative' на 'fixed' для розміщення модального вікна відносно вікна браузера */
  top: 50%; /* Розміщення в вертикальному центрі сторінки */
  left: 50%; /* Розміщення в горизонтальному центрі сторінки */
  transform: translate(-50%, -50%); /* Вирівнювання вікна по центру */
  background-color: ${(p) => p.theme.colors.white};
  box-shadow: 0 5px 35px rgba(0, 0, 0, 0.75);
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
  font-weight: bold;
`;

export const LoginModalText = styled.p`
  font-weight: bold;
  display: flex;
  align-self: center;
  font-size: 25px;
`;
export const FormikInput = styled(Field)`
  margin: 10px;
  border-radius: 12px;
  /* color: #b2b2b2; */
  border-color: ${(p) => p.theme.colors.border};
  padding: 10px;
  /* &:focus-visible{
            border-color: ${(p) => p.theme.colors.accentColor} !important;
        } */
`;
