import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";

import axios from "axios";
import { toast } from "react-toastify";
import { addToCart } from "../../redux/cart/slice";
import { selectGoods } from "../../redux/products/selectors";
import {
  isAdminSelector,
  loggedInSelector,
  optUserSelector,
} from "../../redux/auth/selectors";
import { selectCart } from "../../redux/cart/selectors";

import Button from "../../shared/components/Button/Button";
// import SecondButton from "../../shared/components/SecondButton/SecondButton";
import QuickOrderModal from "../../modules/QuickOrderModal/QuickOrderModal";
import Sticker from "../../shared/components/Sticker/Sticker";
import { Container } from "../../shared/styles/Container";
import { Loader } from "../../shared/components/Loader/Loader";

import {
  PageContainer,
  ImageWrap,
  ProductImage,
  WrapName,
  ProductName,
  ProductArticle,
  ProductBrand,
  ProductPrice,
  ProductDescription,
  ProductTitleDescription,
  Info,
  ButtonIncDec,
  CounterBlock,
  InputIncDec,
  ProductCode,
  ProductArticleSpan,
  ProductTags,
  ProductCountry,
  UlHistoryList,
} from "./ProductPage.styled";
import { Helmet } from "react-helmet-async";

import categoryLinks from "../../modules/Header/menuItems.json";

const ProductPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // стейт для модалки - швидке замовлення
  const [quantity, setQuantity] = useState(1);
  const [amount, setAmount] = useState(null);
  const { id } = useParams();
  const dispatch = useDispatch();
  const products = useSelector(selectGoods);
  const productCart = useSelector(selectCart);
  const optUser = useSelector(optUserSelector);
  const [loading, setLoading] = useState(true);
  const loggedIn = useSelector(loggedInSelector);
  const isAdmin = useSelector(isAdminSelector);
  useEffect(() => {
    setLoading(false);
  }, []);

  const product = products?.find(
    (item) => +item.id === +id || +item.productId === +id
  );
  const productCartFind = productCart?.find(
    (item) => +item.id === +id || +item.productId === +id
  );
  const location = useLocation();

  console.log(window.location.pathname);
  // const structuredProduct = {
  //   "@context": "http://schema.org",
  //   "@type": "Product",
  //   name: product.name,
  //   description: product.description,
  //   image: product.images, // URL зображення продукту
  //   // Додайте інші властивості, які ви хочете включити
  // };

  const handleAddToCart = async () => {
    if (!productCartFind) {
      dispatch(addToCart({ ...product, quantity }));
      if (loggedIn) {
        try {
          await axios.post(`/basket`, {
            name: product.name,
            article: product.article,
            code: product.code,
            amount: product.amount,
            description: product.description,
            priceOPT: product.priceOPT,
            quantity: quantity,
            price: product.price,
            brand: product.brand,
            images: product.images,
            new: product.new,
            sale: product.sale,
            category: product.category,
            subCategory: product.subCategory,
            subSubCategory: product.subSubCategory,
            productId: product.id,
          });
        } catch (error) {
          console.error("Помилка додавання товару в кошик:", error);
        }
      }
    }
  };

  const changeAmount = (event) => {
    setAmount(event.target.value);
  };

  useEffect(() => {
    setAmount(product.amount);
  }, [product.amount]);

  const changeProductAmount = async (productItem) => {
    try {
      await axios.put(`/goods/${productItem._id}`, {
        name: productItem.name,
        article: productItem.article,
        code: productItem.code,
        amount: amount,
        description: productItem.description,
        priceOPT: productItem.priceOPT,
        price: productItem.price,
        brand: productItem.brand,
        images: productItem.images,
        country: productItem.country,
        new: productItem.new,
        sale: productItem.sale,
        category: productItem.category,
        subCategory: productItem.subCategory,
      });
    } catch (error) {
      console.error("Помилка зміни кількості товару", error);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    changeProductAmount(product);
  };

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10);
    if (
      !isNaN(newQuantity) &&
      newQuantity >= 1 &&
      newQuantity <= product.amount
    ) {
      setQuantity(newQuantity);
    }
  };

  const incrementQuantity = () => {
    if (product.amount > quantity) {
      setQuantity(quantity + 1);
    } else {
      toast.error("Обмежена кількість товару на складі!");
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // функція для відкриття модалки швидкого замовлення
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  function getProductPath(productName, categories) {
    let productPath = "";

    // Перебираємо всі категорії
    for (let i = 0; i < categories.length; i++) {
      const category = categories[i];
      console.log(category);
      if (category.children && category.children.length > 0) {
        for (let j = 0; j < category.children.length; j++) {
          const subCategory = category.children[j];
          console.log(subCategory);

          const product = subCategory.children.find(
            (item) => item.text === productName
          );

          if (product) {
            productPath = `${category.to || ""}`;
            console.log(productPath);
            break;
          }
        }
      }

      if (productPath) {
        break;
      }
    }

    // Повертаємо шлях категорії
    return productPath;
  }

  function getSubProductPath(productName, categories) {
    let productPath = "";

    console.log(categoryLinks[0].children);

    // Перебираємо всі категорії
    for (let i = 0; i < categories.length; i++) {
      const category = categories[i];

      if (category.children && category.children.length > 0) {
        for (let j = 0; j < category.children.length; j++) {
          const subCategory = category.children[j];
          console.log(subCategory);

          const product = subCategory.children.find(
            (item) => item.text === productName
          );

          if (product) {
            productPath = `${subCategory.to || ""}`;
            console.log(productPath);
            break;
          }
        }
      }

      if (productPath) {
        break;
      }
    }

    // Повертаємо шлях категорії
    return productPath;
  }

  function getSubSubProductPath(productName, categories) {
    let productPath = "";
    let category = null;

    console.log(categoryLinks[0].children);
    // Перебираємо всі категорії
    for (let i = 0; i < categories.length; i++) {
      category = categories[i];

      if (category.children && category.children.length > 0) {
        for (let j = 0; j < category.children.length; j++) {
          const subCategory = category.children[j];
          const product = subCategory.children.find(
            (item) => item.text === productName
          );
          if (product) {
            productPath = product.to;
            break;
          }
        }
      }
      // setCategory(category);
      if (productPath) {
        break;
      }
    }

    // Якщо шлях вже знайдено, виходимо з зовнішнього циклу
    return productPath;
  }

  const subCategories = categoryLinks[0].children;
  const productSubSubCategory =
    product.subSubCategory || product.subCategory || product.category;

  const productPath = getProductPath(productSubSubCategory, subCategories);

  const productSubPath = getSubProductPath(
    productSubSubCategory,
    subCategories
  );
  const producttSubSubPath = getSubSubProductPath(
    productSubSubCategory,
    subCategories
  );

  function getCategoryUrl(categoryName, nodes) {
    const findCategoryUrl = (name, nodes, parentUrl = "") => {
      for (const node of nodes) {
        const currentUrl = `${node.to || ""}`;

        if (node.children && node.children.length > 0) {
          const subCategoryUrl = findCategoryUrl(
            name,
            node.children,
            currentUrl
          );

          if (subCategoryUrl) {
            return subCategoryUrl;
          }
        } else if (node.text === name) {
          return currentUrl;
        }
      }

      return null;
    };

    return findCategoryUrl(categoryName, nodes);
  }

  function getCategoryUrl2(categoryName, nodes) {
    const findCategoryUrl = (name, nodes, parentUrl = "") => {
      for (const node of nodes) {
        const currentUrl = `${node.to || ""}`;

        if (node.children && node.children.length > 0) {
          const subCategoryUrl = findCategoryUrl(
            name,
            node.children,
            currentUrl
          );

          if (subCategoryUrl) {
            return subCategoryUrl;
          }
        } else if (node.text === name) {
          // Find the last index of '/' in the currentUrl
          const lastSlashIndex = currentUrl.lastIndexOf("/");

          // Return the URL up to the last slash
          return lastSlashIndex !== -1
            ? currentUrl.substring(0, lastSlashIndex)
            : currentUrl;
        }
      }

      return null;
    };

    return findCategoryUrl(categoryName, nodes);
  }

  const categoryUrl2 = getCategoryUrl2(productSubSubCategory, categoryLinks);

  console.log(categoryUrl2);

  const categoryUrl = getCategoryUrl(productSubSubCategory, categoryLinks);

  console.log(categoryUrl);

  console.log(subCategories);
  console.log(producttSubSubPath);
  console.log(productSubPath);
  console.log(productPath);

  console.log(product.subSubCategory);
  console.log(product.subCategory);
  console.log(product.category);

  console.log(categoryLinks[0].children);
  console.log(categoryLinks);
  return (
    <Container>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <div>
            <UlHistoryList>
              <li>
                <Link to="/">Повернутись на головну сторінку</Link>
              </li>
              <li>
                <Link
                  to={
                    productPath ||
                    (categoryUrl2 === "/category" ? categoryUrl : categoryUrl2)
                  }
                >
                  {product.category}
                </Link>
              </li>
              <li>
                <Link to={`${productSubPath}` || `${categoryUrl}`}>
                  {product.subCategory}
                </Link>
              </li>
              <li>
                <Link to={`${producttSubSubPath}`}>
                  {product.subSubCategory}
                </Link>
              </li>
              <li>
                <Link to={window.location.pathname}>{product.name}</Link>
              </li>
            </UlHistoryList>
          </div>
          <PageContainer>
            <Helmet>
              <meta charSet="utf-8" />
              <title>{product.name}</title>

              <meta name="description" content={product.description} />
            </Helmet>
            <section>
              <h1 className="hidden">{product.name}</h1>
            </section>
            <ImageWrap>
              <ProductImage
                itemProp="image"
                src={product.images}
                alt={product.name}
              />
              <ProductTags>
                {product.new && <Sticker text="Новинка" />}
                {product.sale && <Sticker text="Знижка" sale />}
              </ProductTags>
            </ImageWrap>
            <Info>
              <WrapName>
                <div itemScope itemType="https://schema.org/Product"></div>
                <ProductName itemProp="name">{product.name}</ProductName>

                <ProductArticle>
                  <ProductArticleSpan>Артикул</ProductArticleSpan>
                  {product.article}
                </ProductArticle>
              </WrapName>
              <ProductCode>Штрих-код: {product.code}</ProductCode>
              <ProductCountry>Країна виробник {product.country}</ProductCountry>
              <ProductBrand> {product.brand}</ProductBrand>
              {optUser ? (
                <ProductPrice>{product.priceOPT} ₴</ProductPrice>
              ) : (
                <ProductPrice>{product.price} ₴</ProductPrice>
              )}
              {product.amount <= 0 ||
                (!productCartFind && (
                  <CounterBlock>
                    <ButtonIncDec onClick={decrementQuantity}>–</ButtonIncDec>
                    <InputIncDec
                      type="number"
                      min="1"
                      max={product.amount}
                      value={quantity}
                      onChange={handleQuantityChange}
                      // readOnly={true}
                    />
                    <ButtonIncDec onClick={incrementQuantity}>+</ButtonIncDec>
                  </CounterBlock>
                ))}

              {isAdmin && (
                <form style={{ margin: "5px 0" }} onSubmit={handleChange}>
                  <CounterBlock>
                    <InputIncDec
                      type="number"
                      value={amount}
                      onChange={changeAmount}
                    />
                  </CounterBlock>
                  <Button
                    type="submit"
                    goods
                    text={"Обновити кілкість товару"}
                    // onClick={handleChange}
                  />
                </form>
              )}

              <Button
                goods
                text={
                  product.amount <= 0
                    ? "Немає в наявності"
                    : productCartFind
                    ? "У кошику"
                    : "Купити"
                }
                onClick={handleAddToCart}
                disabled={productCartFind || product.amount <= 0}
              />

              {/* Швидке замовлення */}
              {/* <SecondButton
            text="Швидке замовлення"
            onClick={toggleModal}
            disabled={product.amount <= 0}
          ></SecondButton> */}

              <ProductTitleDescription>Опис</ProductTitleDescription>
              <ProductDescription itemProp="description">
                {product.description}
              </ProductDescription>

              {isModalOpen && <QuickOrderModal onClose={toggleModal} />}
            </Info>
          </PageContainer>
        </div>
      )}
    </Container>
  );
};

export default ProductPage;
