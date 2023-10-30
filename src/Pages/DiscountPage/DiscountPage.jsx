import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { selectSale } from "../../redux/products/selectors";

import { Container } from "../../shared/styles/Container";
import ProductsList from "../../shared/components/ProductsList/ProductsList";
import { Loader } from "../../shared/components/Loader/Loader";

const DiscountPage = () => {
  const items = useSelector(selectSale);
  const sortedItems = [...items].sort((a, b) => b.amount - a.amount);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <main>
      <Container>
        {loading ? <Loader /> : <ProductsList items={sortedItems} />}
      </Container>
    </main>
  );
};

export default DiscountPage;
