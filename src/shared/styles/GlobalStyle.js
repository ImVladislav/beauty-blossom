import { createGlobalStyle } from "styled-components";
import "modern-normalize";
import "bootstrap/dist/css/bootstrap.min.css";

export const GlobalStyle = createGlobalStyle`

body {
  margin: 0;

  font-family: 'Noto Sans', sans-serif;
  font-size: 18px;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #504056;
  scroll-behavior: smooth;
 
}




main {
  min-height: 50vh;
}


code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

*,
::after,
::before {
  box-sizing: border-box;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

ul,
ol {
  list-style: none;
  margin: 0;
  padding: 0;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

a,
button,
input {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

.hidden {
  opacity: 0;
  overflow: hidden;
  height: 0;
  width: 0;
  padding: 0;
  margin: 0;
  line-height: 0;
}
/* Додайте transition, щоб забезпечити плавний перехід при анімації */
.WrapListProduct {
  transition: transform 0.5s linear;
}

/* Додайте клас active для ефекту "зжимання" */
.WrapListProduct.active {
  transform: translateY(-100%);
}
`;
