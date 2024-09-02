import ProductCard from "../../../shared/components/ProductCard/ProductCard";

import { Container, List, Title, TitleLine } from "./SliderDesktop.styled";

export const SliderDesktop = ({ items, title }) => {
  return (
    <Container>
      <TitleLine />
      <Title>{title}</Title>
      <List>
        {items?.map((item) => (
          <ProductCard key={item.id} products={item} />
        ))}
      </List>
    </Container>
  );
};
