import styled from "styled-components";
import { ReactComponent as userIcon } from "../../components/Images/newUser.svg";
import { ReactComponent as corzinaIcon } from "../../components/Images/newCorzina.svg";

export const UserIcon = styled(userIcon)`
  width: 28px;
  height: 28px;
  fill: ${(p) => p.theme.colors.color504056};
    &:hover {
 fill: ${(p) => p.theme.colors.accentColor};
    }
`;
export const CorzinaIcon = styled(corzinaIcon)`
  width: 32px;
  height: 32px;
  fill: ${(p) => p.theme.colors.color504056};
    &:hover {
 fill: ${(p) => p.theme.colors.accentColor};
    }
`;