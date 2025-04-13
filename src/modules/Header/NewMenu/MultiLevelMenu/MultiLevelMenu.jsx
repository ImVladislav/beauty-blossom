import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { setfilter } from "../../../../redux/filter/slice";
import { transliterate } from "../../../../shared/components/transliterate";
import { selectGoods } from "../../../../redux/products/selectors";

import {
  BrandLetter,
  DownIcon,
  Item,
  ItemBrands,
  LinkBrand,
  LinkStyle,
  ListBrand,
  MenuBrandList,
  MenuContainer,
  MenuItem,
  MenuLink,
  RightIcon,
  SubMenu,
} from "./multiLevelMenu.styled";

export const menuData = [
  { href: "#category", text: "категорії" },
  { to: "/brands", text: "бренди" },
  { to: "/novynky", text: "новинки" },
  { to: "/aktsii", text: "акції" },
  { to: "/kliientam", text: "клієнтам" },
  { href: "#contacts", text: "контакти" },
];

// === Якірний скрол ===
const handleAnchorScroll = (anchorId) => {
  const target = document.querySelector(anchorId);
  if (target) {
    target.scrollIntoView({ behavior: "smooth" });
  }
};

// === Рекурсивне меню ===
const RecursiveMenu = ({
  items,
  level = 1,
  parentPath = "",
  expandedItem,
  setExpandedItem,
  allCategory,
  brands,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const sortedBrands = useMemo(() => {
    return [...new Set(brands.map((b) => b.charAt(0).toUpperCase()))].sort();
  }, [brands]);

  const handleClick = (e) => {
    const name = e.target.innerText;
    dispatch(setfilter(name.toLowerCase().trim()));
    setExpandedItem(null);
  };

  const handleClickCategory = () => {
    navigate("/");
    setTimeout(() => {
      handleAnchorScroll("#category");
    }, 700);
  };

  const handleMouseEnter = (id) => {
    setExpandedItem(id);
  };

  const handleMouseLeave = () => {
    setExpandedItem(null);
  };

  return items.map((item, index) => {
    const hasChildren = item.children?.length > 0;
    const currentPath = `${parentPath}/${transliterate(item.text)}`;

    if (item.to === "/brands") {
      return (
        <Item
          key={item.to}
          onMouseEnter={() => handleMouseEnter("brands")}
          onMouseLeave={handleMouseLeave}
        >
          <LinkStyle to={item.to}>
            {item.text}
            {expandedItem === "brands" ? (
              <RightIcon
                style={{ transform: "rotate(90deg)", color: "#ff63b8" }}
              />
            ) : (
              <RightIcon />
            )}
          </LinkStyle>
          {expandedItem === "brands" && brands.length > 0 && (
            <MenuBrandList>
              {sortedBrands.map((letter) => (
                <ItemBrands key={letter}>
                  <BrandLetter>{letter}</BrandLetter>
                  <ListBrand>
                    {brands
                      .filter((b) => b.charAt(0).toUpperCase() === letter)
                      .map((b) => (
                        <li key={b}>
                          <LinkBrand
                            to={`/brands/${b.toLowerCase().trim()}`}
                            onClick={handleClick}
                          >
                            {b}
                          </LinkBrand>
                        </li>
                      ))}
                  </ListBrand>
                </ItemBrands>
              ))}
            </MenuBrandList>
          )}
        </Item>
      );
    }

    if (item.href === "#category") {
      return (
        <MenuItem
          key={item.text}
          onMouseEnter={() => handleMouseEnter(item.text)}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
        >
          <MenuLink as="a" href="#category" onClick={handleClickCategory}>
            {item.text}
            {allCategory.length > 0 &&
              (level === 1 ? (
                <RightIcon
                  style={
                    expandedItem === item.text
                      ? { transform: "rotate(90deg)", color: "#ff63b8" }
                      : undefined
                  }
                />
              ) : (
                <RightIcon />
              ))}
          </MenuLink>

          {expandedItem === item.text && (
            <SubMenu level={level}>
              <RecursiveMenu
                items={allCategory.map((cat) => ({
                  text: cat.category,
                  children: cat.children.map((sub) => ({
                    text: sub.subCategory,
                    children: sub.children.map((subSub) => ({
                      text: subSub.subSubCategory,
                    })),
                  })),
                }))}
                level={level + 1}
                parentPath={currentPath}
                expandedItem={expandedItem}
                setExpandedItem={setExpandedItem}
                allCategory={allCategory}
                brands={brands}
              />
            </SubMenu>
          )}
        </MenuItem>
      );
    }

    if (item.href === "#contacts") {
      return (
        <MenuItem key={item.text}>
          <MenuLink
            as="a"
            onClick={() => handleAnchorScroll("#contacts")}
            href="#contacts"
          >
            {item.text}
          </MenuLink>
        </MenuItem>
      );
    }

    return (
      <MenuItem key={item.text}>
        <MenuLink to={currentPath}>
          {item.text}
          {hasChildren && (level === 1 ? <DownIcon /> : <RightIcon />)}
        </MenuLink>

        {hasChildren && (
          <SubMenu level={level}>
            <RecursiveMenu
              items={item.children}
              level={level + 1}
              parentPath={currentPath}
              expandedItem={expandedItem}
              setExpandedItem={setExpandedItem}
              allCategory={allCategory}
              brands={brands}
            />
          </SubMenu>
        )}
      </MenuItem>
    );
  });
};

const MultiLevelMenu = () => {
  const [expandedItem, setExpandedItem] = useState(null);
  const allItems = useSelector(selectGoods);

  // === Категорії ===
  const allCategory = useMemo(() => {
    const result = [];

    allItems.forEach(({ category, subCategory, subSubCategory }) => {
      if (!category) return;

      const cat = category.toLowerCase().trim();
      const sub = subCategory?.toLowerCase().trim();
      const subsub = subSubCategory?.toLowerCase().trim();

      let catObj = result.find((c) => c.category === cat);
      if (!catObj) {
        catObj = { category: cat, children: [] };
        result.push(catObj);
      }

      if (!sub) return;

      let subObj = catObj.children.find((s) => s.subCategory === sub);
      if (!subObj) {
        subObj = { subCategory: sub, children: [] };
        catObj.children.push(subObj);
      }

      if (!subsub) return;

      const subsubExists = subObj.children.find(
        (ss) => ss.subSubCategory === subsub
      );
      if (!subsubExists) {
        subObj.children.push({ subSubCategory: subsub });
      }
    });

    return result;
  }, [allItems]);

  // === Бренди ===
  const brands = useMemo(() => {
    return [
      ...new Set(allItems.map((item) => item.brand.toUpperCase().trim())),
    ].sort();
  }, [allItems]);

  return (
    <MenuContainer>
      <RecursiveMenu
        items={menuData}
        expandedItem={expandedItem}
        setExpandedItem={setExpandedItem}
        allCategory={allCategory}
        brands={brands}
      />
    </MenuContainer>
  );
};

export default MultiLevelMenu;
