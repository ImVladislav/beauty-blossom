import { setfilter } from "../../redux/filter/slice";
import { useDispatch } from "react-redux";

import hairCareImage from "../../images/category/hairCare.png";
import serumImage from "../../images/category/serum.png";
import creamImage from "../../images/category/cream.png";
import moisturizingImage from "../../images/category/moisturizing.png";
import mascaraForEyelashesImage from "../../images/category/mascaraForEyelashes.png";
import eyeCreamImage from "../../images/category/eyeCream.png";
import faceMasksImage from "../../images/category/faceMasks.png";
import handCreamImage from "../../images/category/handCream.png";

import {
  Container,
  Item,
  LinkStyle,
  List,
  Name,
  Title,
  WramImg,
} from "./CategoryList.styled";

const data = [
  {
    id: "1",
    name: "Догляд для волосся",
    text: "догляд для волосся",
    srcImage: hairCareImage,
    to: "/category/hairCare",
  },
  {
    id: "2",
    name: "сироватки",
    text: "Сироватка",
    srcImage: serumImage,
    to: "/category/facial/moisturizing/serum",
  },
  {
    id: "3",
    name: "Крема",
    text: "Крем для обличчя",
    srcImage: creamImage,
    to: "/category/facial/moisturizing/cream",
  },
  {
    id: "4",
    name: "зволоження",
    text: "Зволоження",
    srcImage: moisturizingImage,
    to: "/category/facial/moisturizing",
  },
  {
    id: "5",
    name: "туш для вій",
    text: "туш",
    srcImage: mascaraForEyelashesImage,
    to: "/category/makeup/forEyes/inadvertently",
  },
  {
    id: "6",
    name: "крем для очей",
    text: "Крем під очі",
    srcImage: eyeCreamImage,
    to: "/category/facial/forSkinUnderTheEyes/creamUnderTheEyes",
  },
  {
    id: "7",
    name: "маски для обличчя",
    srcImage: faceMasksImage,
    to: "/category/facial/masks",
  },
  {
    id: "8",
    name: "крем для рук",
    text: "Крем для рук",
    srcImage: handCreamImage,
    to: "/category/bodyCare/handCosmetics/handCream",
  },
];

const CategoryList = () => {
  const dispatch = useDispatch();

  const handleClick = (name) => {
    dispatch(setfilter(name));
  };
  return (
    <Container>
      <Title>категорії товарів</Title>
      <List>
        {data.map((item) => (
          <Item key={item.id}>
            <LinkStyle to={item.to} onClick={() => handleClick(item.text)}>
              <WramImg>
                <img src={item.srcImage} alt={item.name} />
              </WramImg>
              <Name>{item.name}</Name>
            </LinkStyle>
          </Item>
        ))}
      </List>
    </Container>
  );
};

export default CategoryList;
