import styled from "styled-components";

export const ProductStickerWrap = styled.div`
  position: absolute;
  left: 10px;

  bottom: ${(p) => (p.newproduct ? "0" : "33px")};
  line-height: 1;
`;

export const ProductSticker = styled.div`
  position: relative;
  z-index: 1;
  display: table;
  height: 24px;
  line-height: 24px;
  margin-top: 2px;
  padding: 0 9px;
  border-radius: 2px 2px 2px 0;
  color: ${(p) => (p.saleproduct ? "#e93f11" : "#7baf35")};
  background: currentColor;
  font-size: 14px;
  &::before {
    content: "";
    position: absolute;
    top: 100%;
    left: 0;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 8px 8px 0;
    border-color: transparent currentColor transparent transparent;
  }
  &:after {
    content: "";
    position: absolute;
    top: 100%;
    left: 0;
    width: 8px;
    height: 8px;
    background: url("data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%208%208%22%20width%3D%228%22%20height%3D%228%22%3E%3ClinearGradient%20id%3D%22flag2-shadow%22%20gradientUnits%3D%22userSpaceOnUse%22%20x1%3D%224%22%20y1%3D%227%22%20x2%3D%224%22%3E%3Cstop%20offset%3D%220%22%20stop-opacity%3D%220%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-opacity%3D%22.4%22%2F%3E%3C%2FlinearGradient%3E%3Cpath%20d%3D%22M0%200c.1.3.2.5.5.8l5.7%205.7c.7.7%201.8.8%201.8-.6V0H0z%22%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20fill%3D%22url%28%23flag2-shadow%29%22%2F%3E%3C%2Fsvg%3E")
      0 0 no-repeat;
  }
`;

export const StickerText = styled.span`
  color: ${(p) => p.theme.colors.white};
  font-weight: bold;
  font-size: 14px;
  text-align: center;
`;
