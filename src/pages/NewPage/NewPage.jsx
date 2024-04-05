import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { selectNew } from "../../redux/products/selectors";

import ProductsList from "../../shared/components/ProductsList/ProductsList";
import { Loader } from "../../shared/components/Loader/Loader";

import { Container } from "../../shared/styles/Container";
import { Helmet } from "react-helmet";

const NewPage = () => {
  const items = useSelector(selectNew);
  const sortedItems = [...items].sort((a, b) => b.amount - a.amount);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <main>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Beauty Blossom | Новинки</title>
        <meta name="description" content="Новинки косметики" />
      </Helmet>
      <Container>
        {loading ? <Loader /> : <ProductsList items={sortedItems} />}
      </Container>
    </main>
  );
};

export default NewPage;
