import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useParams, useLocation } from "react-router-dom";
import { setfilter } from "../../redux/filter/slice";

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
import { Container } from "../../shared/styles/Container";
import { Loader } from "../../shared/components/Loader/Loader";

import {
  ProductContainer,
  ImageContainer,
  Image,
  ProductNameWrapper,
  ProductName,
  ProductPrice,
  InfoContainer,
  ButtonIncDec,
  CounterBlock,
  InputIncDec,
  ProductTags,
  UlHistoryList,
  LinkHistoryLink,
  LiHistoryItem,
  ProductFeaturesWrapper,
  AboutProductWrapper,
  ProductInner,
  AboutProductWrapperMobile,
  ProductDescriptionList,
  ProductPriceName,
  AboutProductText,
  ProductAdminForm,
  Breadcrumbs,
  ProductBuyWrapper,
  ProductDescriptionItem,
  ProductPriceWrapper,
  ProductDescriptionWrap,
  ProductDescriptionTitle,
  ProductPriceSale,
} from "./ProductPage.styled";
import { Helmet } from "react-helmet";

import categoryLinks from "../../modules/Header/menuItems.json";
import { SimilarProducts } from "../../modules/SimilarProducts/SimilarProducts";

import {
  getProductPath,
  getSubProductPath,
  getSubSubProductPath,
  getCategoryUrl,
  getCategoryUrl2,
} from "./ProductUtils";
import NewSticker from "../../shared/components/Sticker/NewSticker";
import { trackAddToCart } from "../../facebookInt/FacebookPixelEvent";
import { transliterate } from "../../shared/components/transliterate";

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
  const [isDescription, setiIsDescription] = useState(true);

  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`/goods`);
        console.log(response);
        
        if (response.data) {
          setProducts(response.data.goods);
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);
  console.log("products", products);
  const product = products?.find(
    (item) => +item.id === +id || +item.productId === +id
  );
  const productCartFind = productCart?.find(
    (item) => +item.id === +id || +item.productId === +id
  );

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
          scrollToTop();
        } catch (error) {
          console.error("Помилка додавання товару в кошик:", error);
        }
      }
    }
  };

  const changeAmount = (event) => {
    setAmount(event.target.value);
  };

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

  const handleLinkClick = (filterValue) => {
    dispatch(setfilter(filterValue));
  };

  // Обробка події "Назад" у браузері

  const handlePopState = (filterValue) => {
    const urlParams = new URLSearchParams(window.location.search);
    // const filterValue = urlParams.get("category") || ""; // Отримати категорію з URL
    filterValue =
      product.subSubCategory || product.subCategory || product.category;

    dispatch(setfilter(filterValue)); // Оновлюємо фільтр у Redux
    handleLinkClick(filterValue); // Викликаємо функцію з оновленим значенням
  };

  window.addEventListener("popstate", handlePopState);

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
  // transliterate(product.name);

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
          <section>
            <Breadcrumbs>
              <UlHistoryList>
                <LiHistoryItem>
                  <LinkHistoryLink to="/">головна сторінка</LinkHistoryLink>
                  <span>/</span>
                </LiHistoryItem>
                <LiHistoryItem>
                  <LinkHistoryLink
                    to={`/katehoriji/${transliterate(product.category)}`}
                    onClick={() => handleLinkClick(product.category)}
                  >
                    {product.category}
                  </LinkHistoryLink>
                  <span>/</span>
                </LiHistoryItem>

                <LiHistoryItem>
                  {product.subSubCategory && (
                    <>
                      <LinkHistoryLink
                        to={`/katehoriji/${transliterate(
                          product.category
                        )}/${transliterate(product.subCategory)}`}
                        onClick={() => handleLinkClick(product.subCategory)}
                      >
                        {product.subCategory}
                      </LinkHistoryLink>
                      <span>/</span>
                    </>
                  )}
                </LiHistoryItem>
                <LiHistoryItem>
                  {product.subSubCategory && (
                    <>
                      <LinkHistoryLink
                        to={`/katehoriji/${transliterate(
                          product.category
                        )}/${transliterate(
                          product.subCategory
                        )}/${transliterate(product.subSubCategory)}`}
                        onClick={() => handleLinkClick(product.subSubCategory)}
                      >
                        {product.subSubCategory}
                      </LinkHistoryLink>
                      <span>/</span>
                    </>
                  )}
                </LiHistoryItem>

                <LiHistoryItem>
                  <LinkHistoryLink
                    to={`/brands/${product.brand.toLowerCase().trim()}`}
                    onClick={() => handleLinkClick(product.brand)}
                  >
                    {product.brand.toLowerCase().trim()}
                  </LinkHistoryLink>
                  {/* <span>/</span> */}
                </LiHistoryItem>

                <LiHistoryItem>
                  {/* <PHistoryName>{product.name}</PHistoryName> */}
                </LiHistoryItem>
              </UlHistoryList>
            </Breadcrumbs>
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
            <ProductContainer>
              {/* image */}
              <ImageContainer>
                <Image
                  itemProp="image"
                  src={product.images}
                  alt={product.name}
                />
                <ProductTags>
                  {product.new && <NewSticker text="New" product />}
                  {product.sale && <NewSticker text="Sale" sale product />}
                </ProductTags>
              </ImageContainer>
              {/* info */}
              <InfoContainer>
                <ProductNameWrapper>
                  <div itemScope itemType="https://schema.org/Product"></div>
                  <ProductName itemProp="name">{product.name}</ProductName>
                </ProductNameWrapper>
                <ProductFeaturesWrapper>
                  <ProductInner className="inner">
                    {optUser ? (
                      <ProductPriceWrapper>
                        <ProductPriceName>оптова ціна</ProductPriceName>
                        <div>
                          {product.priceOldOPT && product.sale === true && (
                            <ProductPriceSale>
                              {product.priceOldOPT} грн
                            </ProductPriceSale>
                          )}
                          <ProductPrice>
                            {product.priceOPT}
                            <span>грн</span>
                          </ProductPrice>
                        </div>
                      </ProductPriceWrapper>
                    ) : (
                      <ProductPriceWrapper>
                        <ProductPriceName>роздрібна ціна</ProductPriceName>
                        <div>
                          {product.priceOldOPT && product.sale === true && (
                            <ProductPriceSale>
                              {product.priceOld} грн
                            </ProductPriceSale>
                          )}

                          <ProductPrice>
                            {product.price}
                            <span>грн</span>
                          </ProductPrice>
                        </div>
                      </ProductPriceWrapper>
                    )}
                    <AboutProductWrapperMobile>
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
                          <AboutProductText>немає в наявності</AboutProductText>
                        )}
                      </div>
                    </AboutProductWrapperMobile>
                    <ProductBuyWrapper>
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
                    </ProductBuyWrapper>
                    {isAdmin && (
                      <ProductAdminForm onSubmit={handleChange}>
                        <CounterBlock>
                          <InputIncDec
                            type="number"
                            value={amount}
                            onChange={changeAmount}
                          />
                        </CounterBlock>
                        <Button
                          type="submit"
                          list
                          text={"оновити"}
                          // onClick={handleChange}
                        />
                      </ProductAdminForm>
                    )}
                  </ProductInner>
                  <AboutProductWrapper>
                    <div>
                      <AboutProductText>Бренд :</AboutProductText>
                      <AboutProductText>Країна :</AboutProductText>
                      <AboutProductText>Штрихкод :</AboutProductText>
                      <AboutProductText>Артикул :</AboutProductText>
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
                  </AboutProductWrapper>
                </ProductFeaturesWrapper>
                {product.compound ? (
                  <ProductDescriptionWrap>
                    <ProductDescriptionTitle
                      className={isDescription && "active"}
                      onClick={() => {
                        setiIsDescription(true);
                      }}
                    >
                      опис товару
                    </ProductDescriptionTitle>
                    <ProductDescriptionTitle
                      className={!isDescription && "active"}
                      onClick={() => {
                        setiIsDescription(false);
                      }}
                    >
                      склад
                    </ProductDescriptionTitle>
                  </ProductDescriptionWrap>
                ) : (
                  <ProductDescriptionWrap>
                    <ProductDescriptionTitle
                      onClick={() => {
                        setiIsDescription(true);
                      }}
                    >
                      опис товару
                    </ProductDescriptionTitle>
                  </ProductDescriptionWrap>
                )}

                {isDescription ? (
                  <ProductDescriptionList itemProp="description">
                    {paragraphs.map((paragraph, index) => (
                      <React.Fragment key={index}>
                        {paragraph.map((p, i) => (
                          <ProductDescriptionItem key={i}>
                            {p}
                          </ProductDescriptionItem>
                        ))}
                      </React.Fragment>
                    ))}
                  </ProductDescriptionList>
                ) : (
                  <ProductDescriptionList itemProp="compound">
                    <ProductDescriptionItem>
                      <p>{product.compound}</p>
                    </ProductDescriptionItem>
                  </ProductDescriptionList>
                )}

                {product && (
                  <SimilarProducts
                    setQuantity={setQuantity}
                    brand={product.brand}
                    productId={product.id}
                  />
                )}
                {isModalOpen && <QuickOrderModal onClose={toggleModal} />}
              </InfoContainer>
              {/* <QuickOrderModal
                isOpen={isModalOpen}
                onRequestClose={toggleModal}
                product={product}
              /> */}
            </ProductContainer>
          </section>
        </div>
      )}
    </Container>
  );
};

export default ProductPage;
