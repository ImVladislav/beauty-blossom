// import React from "react";
// // import { useSelector } from "react-redux";

// import { Container } from "../../shared/styles/Container";
// import { Link } from "react-router-dom";
// // import { getProducts } from "../../../redux/products/selectors";

// const AllBrands = () => {
//   //   const items = useSelector(getProducts);
//   //   console.log(items);
//   //   const brand = items.map((item) => item.brand);
//   // console.log(brand);

//   return (
//     <main>
//       <Container>
//         <ul>
//           <li>
//             <h3>A</h3>
//             <Link></Link>
//           </li>
//         </ul>
//       </Container>
//     </main>
//   );
// };

// export default AllBrands;

// ------------------------------------
import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectFilterBrand } from "../../redux/filter/selectors";
import { selectorGoods } from "../../redux/products/selectors";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setfilter } from "../../redux/filter/slice";

const BrandPageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const BrandCard = styled.div`
  /* border: 1px solid #ccc; */
  border-radius: 8px;
  margin: 10px;
  padding: 16px;
  max-width: 200px;
`;

const BrandName = styled(NavLink)`
  font-size: 1.5rem;
  margin: 0;
`;

// Сортування брендів за алфавітом
// Brands.sort((a, b) => a.name.localeCompare(b.name));

const AllBrands = () => {
  const items = useSelector(selectorGoods);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    const name = e.target.innerText;
    console.log(name);
    dispatch(setfilter(name));
  };
  // console.log(items);

  const brand = items
    ?.map((item) => item.brand)
    .reduce((accumulator, current) => {
      if (!accumulator.includes(current)) {
        accumulator.push(current);
      }
      return accumulator;
    }, [])
    .sort((a, b) => a.localeCompare(b));

  // console.log(brand);
  // console.log(items.map((item) => join(" ")));
  // console.log(item.brand.toLowerCase());
  // ``;
  return (
    <BrandPageContainer>
      {brand.map((item, index) => (
        <BrandCard key={index}>
          <BrandName
            to={`/brands/${item.toLowerCase().trim()}`}
            onClick={handleClick}
          >
            {item}
          </BrandName>
        </BrandCard>
      ))}
    </BrandPageContainer>
  );
};

export default AllBrands;
