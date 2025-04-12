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
    name: "догляд для волосся",
    text: "догляд для волосся",
    srcImage: hairCareImage,
    to: "/katehorii/dohliad%20dlia%20volossia",
  },
  {
    id: "2",
    name: "сироватки",
    text: "сироватка",
    srcImage: serumImage,
    to: "/katehorii/dohliad%20dlia%20oblychchia/zvolozhennia/syrovatka%20dlia%20oblychchia",
  },
  {
    id: "3",
    name: "крема",
    text: "крем для обличчя",
    srcImage: creamImage,
    to: "/katehorii/dohliad%20dlia%20oblychchia/zvolozhennia/krem%20dlia%20oblychchia",
  },
  {
    id: "4",
    name: "зволоження",
    text: "зволоження",
    srcImage: moisturizingImage,
    to: "/katehorii/dohliad%20dlia%20oblychchia/zvolozhennia",
  },
  {
    id: "5",
    name: "туш для вій",
    text: "туш",
    srcImage: mascaraForEyelashesImage,
    to: "/katehorii/makiiazh/dlia%20ochei/tush",
  },
  {
    id: "6",
    name: "крем для очей",
    text: "крем під очі",
    srcImage: eyeCreamImage,
    to: "/katehorii/dohliad%20dlia%20oblychchia/dlia%20shkiry%20pid%20ochyma/krem%20pid%20ochi",
  },
  {
    id: "7",
    name: "маски для обличчя",
    text: "маски для обличчя",
    srcImage: faceMasksImage,
    to: "/katehorii/dohliad%20dlia%20oblychchia/masky%20dlia%20oblychchia",
  },
  {
    id: "8",
    name: "крем для рук",
    text: "крем для рук",
    srcImage: handCreamImage,
    to: "/katehorii/dohliad%20dlia%20tila/kosmetyka%20dlia%20ruk/krem%20dlia%20ruk",
  },
];

const CategoryList = () => {
  const dispatch = useDispatch();

  const handleClick = (name) => {
    dispatch(setfilter(name));
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
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
