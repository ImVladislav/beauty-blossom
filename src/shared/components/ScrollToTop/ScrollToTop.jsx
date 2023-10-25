import React, { useState, useEffect } from "react";
import { ScrollToTopButton } from "./ScrollToTop.styled";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    const scrollStep = -window.scrollY / (1000 / 10); // 10 мс - час для кожного кадру
    const scrollInterval = setInterval(function () {
      if (window.scrollY === 0) {
        clearInterval(scrollInterval);
      }
      window.scrollBy(0, scrollStep);
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <ScrollToTopButton
      className={isVisible ? "visible" : ""}
      onClick={scrollToTop}
    >
      &#9650;
    </ScrollToTopButton>
  );
};

export default ScrollToTop;