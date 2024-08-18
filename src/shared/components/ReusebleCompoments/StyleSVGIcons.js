import styled from "styled-components";
import { ReactComponent as userIcon } from "../../../images/newUser.svg";
import { ReactComponent as corzinaIcon } from "../../../images/newCorzina.svg";

export const UserIcon = styled(userIcon)`
  width: 28px;
  height: 28px;
  fill: #616161;
  &:hover {
    fill: #ff96cf;
  }
`;
export const CorzinaIcon = styled(corzinaIcon)`
  width: 32px;
  height: 32px;
  fill: ${(p) => p.theme.colors.textColor};
  &:hover {
    fill: ${(p) => p.theme.colors.accentColor};
  }
`;
