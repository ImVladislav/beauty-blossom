import styled from "styled-components";

export const ContainerHeader = styled.header`
  position: relative;
  z-index: 102;
  margin-bottom: 30px;
`;

export const Container = styled.div`
  background: white;
`;
export const HeaderTop = styled.div`
  color: ${(p) => p.theme.colors.textColor};
`;
export const HeaderWrap = styled.div`
  max-width: 1440px;
  padding: 0 20px;
  margin: 0 auto;
`;
export const HeaderLayout = styled.div`
  height: 100px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const WrapTop = styled.div`
  padding-right: 12px;
  display: flex;
  align-items: center;
  max-width: 100%;
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
`;
export const WrapContacts = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LoginShipingThumb = styled.div`
  margin-left: 90px;
  display: flex;
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${(p) => p.theme.colors.textColor};
  &:hover,
  &:focus {
    color: ${(p) => p.theme.colors.accentColor};
  }
`;
export const MenuBottom = styled.div`
  position: relative;
  top: 20px;
  margin: -20px 0 20px;
  background: ${(p) => p.theme.colors.topHeaderLine};
  /* background: ${(p) => p.theme.colors.menuHover}; */
  color: ${(p) => p.theme.colors.textColor};
`;
export const MenuWrap = styled.div`
  max-width: 1440px;
  padding: 0 20px;
  margin: 0 auto;
`;
export const MenuLayout = styled.div`
  height: 40px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const MenuColumn = styled.div`
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1 9999 auto;
  height: 100%;
`;
export const MenuSection = styled.div`
  flex: 1 1 100%;
  max-width: 100%;
  display: inline-block;
  vertical-align: middle;
  font-size: 14px;
  text-align: left;
`;
export const MenuProducts = styled.div`
  position: relative;
  height: 100%;
  margin: 0 auto;
`;
