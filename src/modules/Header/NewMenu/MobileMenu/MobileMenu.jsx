import React, { useState, useMemo, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import { setfilter } from "../../../../redux/filter/slice";
import { selectGoods } from "../../../../redux/products/selectors";
import { loggedInSelector } from "../../../../redux/auth/selectors";

import { transliterate } from "../../../../shared/components/transliterate";
import Contacts from "../../Contacts/Contacts";

import {
  AuthenticatedLink,
  BrandStyleLink,
  BurgerIcon,
  BurgerWrapper,
  CloseBtn,
  ContactBtn,
  DownIcon,
  ExpandButton,
  InfoLink,
  LinkStyled,
  MobileMenuWrapper,
  MobileNav,
  NavItem,
  Backdrop,
  NavLinkStyled,
  SubMenu,
} from "./mobileMenu.styled";

const menuData = [
  {
    href: "#category",
    mobileTo: "#category",
    text: "категорії",
    mobileText: "категорії",
  },
  {
    to: "/brands",
    text: "бренди",
    mobileText: "бренди",
  },
  {
    to: "/novynky",
    text: "новинки",
    mobileText: "нове постачання",
  },
  {
    to: "/aktsii",
    text: "акції",
    mobileText: "товари зі зниженою ціною",
  },
  {
    to: "/kliientam",
    text: "клієнтам",
    mobileText: "оптова програма",
  },
];

const RecursiveMobileMenu = ({ items, parentPath = "", toggleMenu }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const handleClick = (text) => {
    dispatch(setfilter(text.toLowerCase().trim()));
    navigate("/katehoriji");
    toggleMenu();
  };




  return (
    <SubMenu>
      {items.map((item, index) => {
        const currentPath = `${parentPath}/${transliterate(item.text)}`;
        const hasChildren = item.children?.length > 0;

        return (
          <NavItem key={index}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <NavLinkStyled
                to={`/katehoriji${currentPath}`}
                onClick={() => handleClick(item.text)}
              >
                {item.text}
              </NavLinkStyled>
              {hasChildren && (
                <ExpandButton onClick={() => toggleExpand(index)}>
                  {expandedIndex === index ? (
                    <DownIcon
                      style={{ transform: "rotate(-90deg)", color: "#ff63b8" }}
                    />
                  ) : (
                    <DownIcon />
                  )}
                </ExpandButton>
              )}
            </div>

            {hasChildren && expandedIndex === index && (
              <RecursiveMobileMenu
                items={item.children}
                parentPath={currentPath}
                toggleMenu={toggleMenu}
              />
            )}
          </NavItem>
        );
      })}
    </SubMenu>
  );
};

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showCategory, setShowCategory] = useState(false);
  const [showBrands, setShowBrands] = useState(false);
  const [contacts, setContacts] = useState(false);

  const isLogin = useSelector(loggedInSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const isBrandActive = location.pathname.startsWith("/brands/");
  const isCategoryActive = location.pathname.startsWith("/katehoriji/");

  const toggleMenu = () => {
    setIsOpen((prev) => {
      const newState = !prev;
      if (!newState) {
        setShowCategory(false);
        setShowBrands(false);
      }
      return newState;
    });
  };

  const allItems = useSelector(selectGoods);

  const CATEGORY_ORDER = [
    "догляд для обличчя",
    "макіяж",
    "догляд для волосся",
    "догляд для тіла",
    "аксесуари для догляду",
    "захист від сонця",
    "пробники",
    "набори",
  ];
  
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
      const exists = subObj.children.find((ss) => ss.subSubCategory === subsub);
      if (!exists) {
        subObj.children.push({ subSubCategory: subsub });
      }
    });
  
    const sortByPredefinedOrder = (list, key, order) => {
      return [...list].sort((a, b) => {
        const aIndex = order.indexOf(a[key]);
        const bIndex = order.indexOf(b[key]);
  
        if (aIndex !== -1 && bIndex !== -1) return aIndex - bIndex;
        if (aIndex !== -1) return -1;
        if (bIndex !== -1) return 1;
        return a[key].localeCompare(b[key]);
      });
    };
  
    const sortedResult = sortByPredefinedOrder(result, "category", CATEGORY_ORDER);
  
    sortedResult.forEach((cat) => {
      cat.children = sortByPredefinedOrder(cat.children, "subCategory", CATEGORY_ORDER);
      cat.children.forEach((sub) => {
        sub.children.sort((a, b) => a.subSubCategory.localeCompare(b.subSubCategory));
      });
    });
  
    return sortedResult;
  }, [allItems]);

  const brands = useMemo(() => {
    return [
      ...new Set(allItems.map((item) => item.brand.toUpperCase().trim())),
    ].sort();
  }, [allItems]);

  const handleClick = (e) => {
    const name = e.target.innerText;
    dispatch(setfilter(name.toLowerCase().trim()));
  };

  const handleContactToggle = () => {
    setContacts((prev) => !prev);
  };

  const recursiveCategoryItems = useMemo(() => {
    return allCategory.map((cat) => ({
      text: cat.category,
      children: cat.children.map((sub) => ({
        text: sub.subCategory,
        children: sub.children.map((subSub) => ({
          text: subSub.subSubCategory,
        })),
      })),
    }));
  }, [allCategory]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);



  return (
    <BurgerWrapper>
      <BurgerIcon onClick={toggleMenu}>
        <AiOutlineMenu />
      </BurgerIcon>
      {isOpen && <Backdrop onClick={toggleMenu} />}
      <MobileMenuWrapper isOpen={isOpen}>

        <CloseBtn onClick={toggleMenu}>
          <AiOutlineClose />
        </CloseBtn>

        <MobileNav>
          {menuData.map((item) => {
            if (item.mobileTo === "#category") {
              return (
                <NavItem key={item.text}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <LinkStyled
                      className={isCategoryActive ? "active" : ""}
                      href="#category"
                      onClick={() => {
                        toggleMenu();
                        navigate("/");
                        setTimeout(() => {
                          document
                            .getElementById("category")
                            ?.scrollIntoView({ behavior: "smooth" });
                        }, 300);
                      }}
                    >
                      {item.mobileText}
                    </LinkStyled>
                    <ExpandButton
                      onClick={() => setShowCategory((prev) => !prev)}
                    >
                      {showCategory ? (
                        <DownIcon
                          style={{
                            transform: "rotate(-90deg)",
                            color: "#ff63b8",
                          }}
                        />
                      ) : (
                        <DownIcon />
                      )}
                    </ExpandButton>
                  </div>
                  {showCategory && (
                    <RecursiveMobileMenu
                      toggleMenu={toggleMenu}
                      items={recursiveCategoryItems}
                    />
                  )}
                </NavItem>
              );
            }

            if (item.to === "/brands") {
              return (
                <NavItem key={item.text}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <NavLinkStyled
                      to={item.to}
                      className={isBrandActive ? "active" : ""}
                      onClick={() => {
                        toggleMenu();
                        navigate("/brands");
                      }}
                    >
                      {item.mobileText}
                    </NavLinkStyled>
                    <ExpandButton
                      onClick={() => setShowBrands((prev) => !prev)}
                    >
                      {showBrands ? (
                        <DownIcon
                          style={{
                            transform: "rotate(-90deg)",
                            color: "#ff63b8",
                          }}
                        />
                      ) : (
                        <DownIcon />
                      )}
                    </ExpandButton>
                  </div>
                  {showBrands && brands.length > 0 && (
                    <SubMenu>
                      {brands.map((name) => (
                        <NavItem key={name}>
                          <BrandStyleLink
                            to={`/brands/${name.toLowerCase().trim()}`}
                            onClick={(e) => {
                              toggleMenu();
                              handleClick(e);
                            }}
                          >
                            {name}
                          </BrandStyleLink>
                        </NavItem>
                      ))}
                    </SubMenu>
                  )}
                </NavItem>
              );
            }

            return (
              <NavItem key={item.text}>
                <NavLinkStyled
                  to={item.to}
                  onClick={() => {
                    toggleMenu();
                    navigate(item.to);
                  }}
                >
                  {item.mobileText}
                </NavLinkStyled>
              </NavItem>
            );
          })}

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "45px",
            }}
          >
            {isLogin && (
              <>
                <AuthenticatedLink to="/cabinet/userData">
                  Особистий кабінет
                </AuthenticatedLink>
                <AuthenticatedLink onClick={toggleMenu} to="/cabinet/history">
                  Історія замовлень
                </AuthenticatedLink>
              </>
            )}
            <InfoLink onClick={toggleMenu} href="/kliientam/#return">
              Повернення та обмін
            </InfoLink>
            <InfoLink onClick={toggleMenu} href="/kliientam/#payment">
              Оплата і доставка
            </InfoLink>
            <InfoLink onClick={toggleMenu} href="/kliientam/#about">
              Про нас
            </InfoLink>
            <ContactBtn onClick={handleContactToggle}>Контакти</ContactBtn>
            {contacts && (
              <>
                <Contacts
                  burger
                  title="+ 380 50 052 9100"
                  to="tel:+380500529100"
                  icon="phone"
                />
                <Contacts
                  burger
                  title="beautyblossom.opt@gmail.com"
                  to="mailto:beautyblossom.opt@gmail.com"
                  icon="mail"
                />
                <Contacts
                  burger
                  title="beauty_blossom_opt"
                  to="https://www.instagram.com/beauty_blossom_opt"
                  icon="instagram"
                />
                <Contacts
                  burger
                  title="beauty_blossom"
                  to="https://t.me/+Eejgotzs-ktiMTIy"
                  icon="telegram"
                />
              </>
            )}
          </div>
        </MobileNav>
      </MobileMenuWrapper>
    </BurgerWrapper>
  );
};

export default MobileMenu;
