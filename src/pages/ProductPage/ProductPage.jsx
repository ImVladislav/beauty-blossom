import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AiOutlineCheck } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

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
  ProductPrice,
  ProductTitleDescription,
  Info,
  ButtonIncDec,
  CounterBlock,
  InputIncDec,
  ProductTags,
  UlHistoryList,
  LinkHistoryLink,
  LiHistoryList,
  DivProductDescr,
  DivAboutProduct,
  PHistoryName,
  DivPriceCounterProduct,
  DivAboutProductMobile,
  DivAvableProduct,
  ProductDescriptionWrap,
  PriceName,
  AboutProductText,
} from "./ProductPage.styled";
import { Helmet } from "react-helmet";

import categoryLinks from "../../modules/Header/menuItems.json";
import { setfilter } from "../../redux/filter/slice";
// import { SimilarProducts } from "../../modules/SimilarProducts/SimilarProducts";

import {
  getProductPath,
  getSubProductPath,
  getSubSubProductPath,
  getCategoryUrl,
  getCategoryUrl2,
} from "./ProductUtils";
import NewSticker from "../../shared/components/Sticker/NewSticker";

const ProductPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // стейт для модалки - швидке замовлення
  const [quantity, setQuantity] = useState(1);
  const [amount, setAmount] = useState(null);
  const { id } = useParams();
  const dispatch = useDispatch();
  const prod = useSelector(selectGoods);
  const [products, setProducts] = useState(prod);
  const productCart = useSelector(selectCart);
  const optUser = useSelector(optUserSelector);
  const [loading, setLoading] = useState(true);
  const loggedIn = useSelector(loggedInSelector);
  const isAdmin = useSelector(isAdminSelector);

  // console.log(products);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`/goods`);
        if (response.data) {
          setProducts(response.data);
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);
  const product = products?.find(
    (item) => +item.id === +id || +item.productId === +id
  );
  const productCartFind = productCart?.find(
    (item) => +item.id === +id || +item.productId === +id
  );
  // console.log(products);
  useEffect(() => {
    if (product) {
      setAmount(product.amount);
    }
  }, [product]);

  if (loading) {
    return (
      <Container>
        <Loader />
      </Container>
    );
  }

  if (!product) {
    return (
      <Container>
        <p>Product not found</p>
      </Container>
    );
  }

  const subCategories = categoryLinks[0]?.children || [];
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
  const categoryUrl2 = getCategoryUrl2(productSubSubCategory, categoryLinks);
  const categoryUrl = getCategoryUrl(productSubSubCategory, categoryLinks);

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

  // useEffect(() => {
  //   setAmount(product.amount || 0);
  // }, [product.amount]);

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

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // const subCategories = categoryLinks[0].children;
  // const productSubSubCategory =
  //   product.subSubCategory || product.subCategory || product.category;

  // const productPath = getProductPath(productSubSubCategory, subCategories);
  // const productSubPath = getSubProductPath(
  //   productSubSubCategory,
  //   subCategories
  // );
  // const producttSubSubPath = getSubSubProductPath(
  //   productSubSubCategory,
  //   subCategories
  // );
  // const categoryUrl2 = getCategoryUrl2(productSubSubCategory, categoryLinks);
  // const categoryUrl = getCategoryUrl(productSubSubCategory, categoryLinks);

  const handleLinkClick = (filterValue) => {
    dispatch(setfilter(filterValue));
  };
  function addParagraphTags(textWithoutParagraphs) {
    const lines = textWithoutParagraphs.split("\n");
    const paragraphs = lines.map((line) => {
      const trimmedLine = line.trim();
      const lineArray = trimmedLine.split("\n");
      return lineArray.map((line) => <p>{line}</p>);
    });

    return paragraphs;
  }
  const paragraphs = addParagraphTags(product.description);

  return (
    <Container>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{product.name}</title>
        <meta name="description" content={product.description} />
      </Helmet>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <div>
            <UlHistoryList>
              <LiHistoryList>
                <LinkHistoryLink to="/">головна сторінка /</LinkHistoryLink>
              </LiHistoryList>
              <LiHistoryList>
                <LinkHistoryLink
                  to={
                    productPath ||
                    (categoryUrl2 === "/category" ? categoryUrl : categoryUrl2)
                  }
                  onClick={() => handleLinkClick(product.category)}
                >
                  {product.category} /
                </LinkHistoryLink>
              </LiHistoryList>

              <LiHistoryList>
                {product.subSubCategory && (
                  <LinkHistoryLink
                    to={productSubPath || categoryUrl}
                    onClick={() => handleLinkClick(product.subCategory)}
                  >
                    {product.subCategory} /
                  </LinkHistoryLink>
                )}
              </LiHistoryList>
              <LiHistoryList>
                {product.subSubCategory && (
                  <LinkHistoryLink
                    to={producttSubSubPath}
                    onClick={() => handleLinkClick(product.subSubCategory)}
                  >
                    {product.subSubCategory} /
                  </LinkHistoryLink>
                )}
              </LiHistoryList>

              <LiHistoryList>
                <LinkHistoryLink
                  to={`/brands/${product.brand}`}
                  onClick={() => handleLinkClick(product.subSubCategory)}
                >
                  {product.brand} /
                </LinkHistoryLink>
              </LiHistoryList>

              <LiHistoryList>
                <PHistoryName>{product.name}</PHistoryName>
              </LiHistoryList>
            </UlHistoryList>
          </div>
          <section>
            <PageContainer>
              {/* <Helmet>
                <meta charSet="utf-8" />
                <title>{product.name}</title>

                <meta name="description" content={product.description} />
                <meta name="keywords" content={product.description} />
              </Helmet> */}
              <Helmet>
                <meta charSet="utf-8" />
                <title>{product.name}</title>
                <meta name="description" content={product.description} />
              </Helmet>

              <h1 className="hidden">{product.name}</h1>

              <ImageWrap>
                <ProductImage
                  itemProp="image"
                  src={product.images}
                  alt={product.name}
                />
                <ProductTags>
                  {product.new && <NewSticker text="New" />}
                  {product.sale && <NewSticker text="Sale" sale />}
                </ProductTags>
              </ImageWrap>
              <Info>
                <WrapName>
                  <div itemScope itemType="https://schema.org/Product"></div>
                  <ProductName itemProp="name">{product.name}</ProductName>
                </WrapName>
                <DivProductDescr>
                  <DivPriceCounterProduct>
                    {optUser ? (
                      <>
                        <PriceName>оптова ціна</PriceName>
                        <ProductPrice>{product.priceOPT} грн</ProductPrice>
                      </>
                    ) : (
                      <>
                        <PriceName>роздрібна ціна</PriceName>
                        <ProductPrice>{product.price} грн</ProductPrice>
                      </>
                    )}
                    <DivAboutProductMobile>
                      <div>
                        <AboutProductText>Бренд :</AboutProductText>
                        <AboutProductText>Країна :</AboutProductText>
                        <AboutProductText>Штрихкод :</AboutProductText>
                        <AboutProductText>Артикул :</AboutProductText>
                        <AboutProductText>Наявність :</AboutProductText>
                      </div>
                      <div>
                        <AboutProductText> {product.brand}</AboutProductText>
                        <AboutProductText> {product.country}</AboutProductText>
                        <AboutProductText>{product.code}</AboutProductText>
                        <AboutProductText>{product.article}</AboutProductText>
                        {product.amount > 0 ? (
                          <AboutProductText style={{ color: "#008205" }}>
                            в наявності
                          </AboutProductText>
                        ) : (
                          <AboutProductText style={{ color: "#f00" }}>
                            немає в наявності
                          </AboutProductText>
                        )}
                      </div>
                    </DivAboutProductMobile>
                    <DivProductDescr>
                      {product.amount <= 0 ||
                        (!productCartFind && (
                          <CounterBlock>
                            <ButtonIncDec onClick={decrementQuantity}>
                              –
                            </ButtonIncDec>
                            <InputIncDec
                              type="number"
                              min="1"
                              max={product.amount}
                              value={quantity}
                              onChange={handleQuantityChange}
                              // readOnly={true}
                            />
                            <ButtonIncDec onClick={incrementQuantity}>
                              +
                            </ButtonIncDec>
                          </CounterBlock>
                        ))}

                      <Button
                        goods
                        text={
                          product.amount <= 0
                            ? "немає в наявності"
                            : productCartFind
                            ? "у кошику"
                            : "додати до кошика"
                        }
                        onClick={handleAddToCart}
                        disabled={productCartFind || product.amount <= 0}
                      />
                    </DivProductDescr>
                    {isAdmin && (
                      <form
                        style={{
                          display: "flex",
                          margin: "5px 0",
                          flexDirection: "column",
                        }}
                        onSubmit={handleChange}
                      >
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
                          text={"Оновити"}
                          // onClick={handleChange}
                        />
                      </form>
                    )}
                  </DivPriceCounterProduct>
                  <DivAboutProduct>
                    <div>
                      <AboutProductText>Бренд</AboutProductText>
                      <AboutProductText>Країна виробник</AboutProductText>
                      <AboutProductText>Штрихкод </AboutProductText>
                      <AboutProductText>Артикул</AboutProductText>
                      <AboutProductText>Наявність :</AboutProductText>
                    </div>
                    <div style={{ marginLeft: "20px" }}>
                      <AboutProductText> {product.brand}</AboutProductText>
                      <AboutProductText> {product.country}</AboutProductText>
                      <AboutProductText>{product.code}</AboutProductText>
                      <AboutProductText>{product.article}</AboutProductText>
                      {product.amount > 0 ? (
                        <AboutProductText style={{ color: "#008205" }}>
                          в наявності
                        </AboutProductText>
                      ) : (
                        <AboutProductText style={{ color: "#f00" }}>
                          немає в наявності
                        </AboutProductText>
                      )}
                    </div>
                  </DivAboutProduct>
                </DivProductDescr>

                <ProductTitleDescription>опис товару</ProductTitleDescription>
                <ProductDescriptionWrap itemProp="description">
                  {paragraphs.map((paragraph, index) => (
                    <React.Fragment key={index}>
                      {paragraph.map((p, i) => (
                        <React.Fragment key={i}>{p}</React.Fragment>
                      ))}
                    </React.Fragment>
                  ))}
                </ProductDescriptionWrap>

                {/* <SimilarProducts brand={product.brand} productId={product.id} /> */}
                {isModalOpen && <QuickOrderModal onClose={toggleModal} />}
              </Info>
              {/* <QuickOrderModal
                isOpen={isModalOpen}
                onRequestClose={toggleModal}
                product={product}
              /> */}
            </PageContainer>
          </section>
        </div>
      )}
    </Container>
  );
};

export default ProductPage;
