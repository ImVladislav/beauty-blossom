import React from "react";
// import { useSelector } from "react-redux";

import { Container } from "../Container";
import { Link } from "react-router-dom";
// import { getProducts } from "../../../redux/products/selectors";

const AllBrands = () => {
  //   const items = useSelector(getProducts);
  //   console.log(items);
  //   const brand = items.map((item) => item.brand);
  // console.log(brand);

  return (
    <main>
      <Container>
        <ul>
          <li>
            <h3>A</h3>
            <Link></Link>
          </li>
        </ul>
      </Container>
    </main>
  );
};

export default AllBrands;
