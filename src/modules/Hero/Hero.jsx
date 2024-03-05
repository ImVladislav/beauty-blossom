import React from "react";
import { useMedia } from "../../hooks/useMedia.js";
import Sprite from "../../images/sprite.svg";
import titleMob from "../../images/match8/mob/Spring Holidays.png";
import subTitleMob from "../../images/match8/mob/z 06.03 no 08.03.png";
import subsubTitleMob from "../../images/match8/mob/subsubsubmob.png";
import flowerPinkMob from "../../images/match8/mob/flower pink.png";
import leaf2 from "../../images/match8/mob/leaf-2.png";
import leaf from "../../images/match8/mob/leaf.png";
import floweryellowMob from "../../images/match8/mob/flower yellow.png";
import floweryellowMob1 from "../../images/match8/mob/flower yellow 1.png";
import cream1 from "../../images/match8/mob/cream 2.png";
import cream2 from "../../images/match8/mob/cream 4.png";
import cream3 from "../../images/match8/mob/cream 5.png";

import FlowerpinkDesc from "../../images/match8/desctop/flower pink.png";
import SpringHolidays from "../../images/match8/desctop/Spring Holidays.png";
import cream1descr from "../../images/match8/desctop/cream 1.png";
import cream2descr from "../../images/match8/desctop/cream 2.png";
import cream3descr from "../../images/match8/desctop/cream 3.png";
import cream4descr from "../../images/match8/desctop/cream 4.png";
import cream5descr from "../../images/match8/desctop/cream 5.png";
import leaf1desc from "../../images/match8/desctop/leaf-1.png";
import leaf2desc from "../../images/match8/desctop/leaf-2.png";
import leaf3desc from "../../images/match8/desctop/leaf-3.png";
import leaf4desc from "../../images/match8/desctop/leaf-4.png";
import leaf5desc from "../../images/match8/desctop/leaf-5.png";
import leaf6desc from "../../images/match8/desctop/leaf-6.png";
import leaf7desc from "../../images/match8/desctop/leaf.png";

import FlowerYellowkDesc from "../../images/match8/desctop/flower yellow.png";
import FlowerYellowkDesc1 from "../../images/match8/desctop/flower yellow2.png";
import subsubsubdesc from "../../images/match8/desctop/subsubsubdesc.png";
// import cream3 from "../../images/match8/desctop/bg sky (1).png";

// import baner from "../../images/masil-desktop.png";
// import products from "../../images/masil-desktop-groupe.png";
// import banerMobile from "../../images/masil-mobile.png";
// import productsMobile from "../../images/masil-mobile-groupe_3.png";
import products from "../../images/purito-new.png";
import productsMobile from "../../images/purito-new-mobile.png";
import {
  // WrapBackground,
  // Background,
  // HeroWrap,
  // Product,
  // Wraper,
  // TextWrap,
  // Title,
  // TextSecond,
  // LinkBtn,
  // TextConditions,
  // Banner,
  // WraperLink,
  BackgroundColor,
  ImageBanner,
  ContainerBanner,
  TitleBanner,
  TextBanner,
  SloganBanner,
  InnerContentBanner,
  ListBanner,
  ItemBanner,
  LinkStyledBanner,
  FlowerPinkmMob,
  Leaf2,
  Leaf,
  Leaf3,
  FloweryellowMob,
  FloweryellowMob1,
  Cream1,
  Cream2,
  Cream3,
  Leafdesc1,
  Leafdesc2,
  Leafdesc3,
  Leafdesc4,
  Leafdesc5,
  Leafdesc6,
  FloweryellowDesc,
  FloweryellowDesc2,
  Cream1desc,
  Cream2desc,
  Cream3desc,
  Cream4desc,
  Cream5desc,
  RedFlower,
  TitleImg,
  SubTitleImg,
  SubSubTitleImg,
  Leafdesc7,
  Leafdesc8,
} from "./Hero.styled.js";

import { useDispatch } from "react-redux";
import { setfilter } from "../../redux/filter/slice.js";
const Hero = () => {
  const { isMobileScreen } = useMedia();
  const dispatch = useDispatch();

  const handleClick = (e) => {
    const name = e.currentTarget.name;
    dispatch(setfilter(name));
  };
  return (
    <>
      <BackgroundColor>
        <ContainerBanner>
          {/* <ImageBanner
            src={isMobileScreen ? productsMobile : products}
            alt="purito"
          /> */}
          {isMobileScreen ? (
            <InnerContentBanner>
              {/* <TitleBanner>Purito</TitleBanner> */}
              <img style={{ width: "260px" }} src={titleMob} alt="title" />
              <img style={{ width: "150px" }} src={subTitleMob} alt="title" />
              <img
                style={{ marginTop: "8px", width: "170px" }}
                src={subsubTitleMob}
                alt="title"
              />
              {/* <SloganBanner> */}
              {/* Tурбота про здоров'я {isMobileScreen && <br />}твоєї шкіри */}
              {/* </SloganBanner> */}
              <LinkStyledBanner
                to="/brands/purito"
                name="purito"
                onClick={handleClick}
              >
                До покупок
                <svg>
                  <use href={`${Sprite}#icon-Vector-1`} />
                </svg>
              </LinkStyledBanner>
              <FlowerPinkmMob src={flowerPinkMob} alt="flowerPinkMob" />
              <Leaf2 src={leaf2} alt="leaf2" />
              {/* <Leaf src={leaf} alt="leaf" /> */}
              <Leaf3 src={leaf2} alt="leaf" />
              <FloweryellowMob1 src={floweryellowMob1} alt="floweryellowMob1" />
              <FloweryellowMob src={floweryellowMob} alt="floweryellowMob" />
              <Cream1 src={cream1} alt="Cream1" />
              <Cream2 src={cream2} alt="Cream2" />
              <Cream3 src={cream3} alt="Cream3" />
            </InnerContentBanner>
          ) : (
            <InnerContentBanner>
              {/* <TitleBanner>Purito</TitleBanner> */}
              <TitleImg src={titleMob} alt="title" />
              <SubTitleImg src={subTitleMob} alt="title" />
              <SubSubTitleImg src={subsubsubdesc} alt="title" />
              {/* <SloganBanner> */}
              {/* Tурбота про здоров'я {isMobileScreen && <br />}твоєї шкіри */}
              {/* </SloganBanner> */}
              <LinkStyledBanner
                to="/brands/purito"
                name="purito"
                onClick={handleClick}
              >
                До покупок
                <svg>
                  <use href={`${Sprite}#icon-Vector-1`} />
                </svg>
              </LinkStyledBanner>
              <FloweryellowDesc src={FlowerYellowkDesc} alt="leaf" />
              <FloweryellowDesc2 src={FlowerYellowkDesc1} alt="leaf" />
              <Leafdesc1 src={leaf1desc} alt="leaf" />
              <Leafdesc2 src={leaf4desc} alt="leaf" />
              <Leafdesc3 src={leaf5desc} alt="leaf" />
              <Leafdesc4 src={leaf7desc} alt="leaf" />
              <Leafdesc5 src={leaf2desc} alt="leaf" />
              <Leafdesc6 src={leaf3desc} alt="leaf" />
              <Leafdesc7 src={leaf1desc} alt="leaf" />
              <Leafdesc8 src={leaf5desc} alt="leaf" />
              <Cream1desc src={cream1descr} alt="leaf" />
              <Cream2desc src={cream2descr} alt="leaf" />
              <Cream3desc src={cream3descr} alt="leaf" />
              <Cream4desc src={cream4descr} alt="leaf" />
              <Cream5desc src={cream5descr} alt="leaf" />
              <RedFlower src={FlowerpinkDesc} alt="leaf" />
            </InnerContentBanner>
          )}
        </ContainerBanner>
      </BackgroundColor>
    </>
  );
};

/* /* <ListBanner>
              {!isMobileScreen && (
                <ItemBanner>
                  <svg>
                    <use href={`${Sprite}#icon-icon-4`} />
                  </svg>
                  <TextBanner>Сертифікований продукт</TextBanner>
                </ItemBanner>
              )} */
/* <ItemBanner>
                <svg>
                  <use href={`${Sprite}#icon-icon-1`} />
                </svg>
                <TextBanner>Eco-Friendly пакування</TextBanner>
              </ItemBanner>
              <ItemBanner>
                <svg>
                  <use href={`${Sprite}#icon-icon-2`} />
                </svg>
                <TextBanner>100% веганська формула</TextBanner>
              </ItemBanner>
              <ItemBanner>
                <svg>
                  <use href={`${Sprite}#icon-icon-3`} />
                </svg>
                <TextBanner>Не тестується на тваринах</TextBanner>
              </ItemBanner> */
/* </ListBanner> */
//     </InnerContentBanner>
//   </ContainerBanner>
// </BackgroundColor>
// </>

export default Hero;

// <BackgroundColor>
//   <ContainerBanner>
//     <ImageBanner
//       src={isMobileScreen ? productsMobile : products}
//       alt="purito"
//     />
//     <InnerContentBanner>
//       <TitleBanner>Purito</TitleBanner>
//       <SloganBanner>
//         Tурбота про здоров'я {isMobileScreen && <br />}твоєї шкіри
//       </SloganBanner>
//       <LinkStyledBanner
//         to="/brands/purito"
//         name="purito"
//         onClick={handleClick}
//       >
//         Придбати
//         <svg>
//           <use href={`${Sprite}#icon-Vector-1`} />
//         </svg>
//       </LinkStyledBanner>
//       <ListBanner>
//         {!isMobileScreen && (
//           <ItemBanner>
//             <svg>
//               <use href={`${Sprite}#icon-icon-4`} />
//             </svg>
//             <TextBanner>Сертифікований продукт</TextBanner>
//           </ItemBanner>
//         )}
//         <ItemBanner>
//           <svg>
//             <use href={`${Sprite}#icon-icon-1`} />
//           </svg>
//           <TextBanner>Eco-Friendly пакування</TextBanner>
//         </ItemBanner>
//         <ItemBanner>
//           <svg>
//             <use href={`${Sprite}#icon-icon-2`} />
//           </svg>
//           <TextBanner>100% веганська формула</TextBanner>
//         </ItemBanner>
//         <ItemBanner>
//           <svg>
//             <use href={`${Sprite}#icon-icon-3`} />
//           </svg>
//           <TextBanner>Не тестується на тваринах</TextBanner>
//         </ItemBanner>
//       </ListBanner>
//     </InnerContentBanner>
//   </ContainerBanner>
// </BackgroundColor>;

// {
/* <WrapBackground>
        <Background>
          {isMobileScreen ? (
            <Banner src={banerMobile} alt="bannerOmh" />
          ) : (
            <Banner src={baner} alt="bannerOmh" />
          )}

          <HeroWrap>
            <Wraper>
              <TextWrap>
                <Title>MASIL</Title>
                <TextSecond>
                  Найкращий догляд для твого волосся вдома
                </TextSecond>
                <WraperLink>
                  <LinkBtn to="/wholesaleProgram">*Оптова Програма</LinkBtn>
                </WraperLink>
                {isMobileScreen && (
                  <TextConditions>*тисни, щоб дізнатись умови</TextConditions>
                )}
              </TextWrap>
              <div>
                {!isMobileScreen && (
                  <TextConditions>*тисни, щоб дізнатись умови</TextConditions>
                )}
              </div>
            </Wraper>
            {isMobileScreen ? (
              <Product src={productsMobile} alt="productBanner" />
            ) : (
              <Product src={products} alt="productBanner" />
            )}
          </HeroWrap>
        </Background>
      </WrapBackground> */
// } */}
