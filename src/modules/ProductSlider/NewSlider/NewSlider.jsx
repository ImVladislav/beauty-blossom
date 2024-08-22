import ProductCard from "../../../shared/components/ProductCard/ProductCard";
// import { Container } from "../../../shared/styles/Container";

import { Container, List, Title, TitleLine } from "./NewSlider.styled";

const NewSlider = ({ items, title }) => {
  return (
    <Container>
      <TitleLine />
      <Title>{title}</Title>
      <List>
        {items.map((item) => (
          <ProductCard key={item.id} products={item} />
        ))}
      </List>
    </Container>
  );
};

export default NewSlider;
