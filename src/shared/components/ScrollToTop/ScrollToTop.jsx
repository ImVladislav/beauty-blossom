import React, { useState, useEffect } from "react";
import { ScrollToTopButton, Icon } from "./ScrollToTop.styled";

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
    const scrollStep = -window.scrollY / 5; // Змінена швидкість прокрутки
    const scrollInterval = requestAnimationFrame(function step() {
      if (window.scrollY === 0) {
        cancelAnimationFrame(scrollInterval);
      } else {
        window.scrollBy(0, scrollStep);
        requestAnimationFrame(step);
      }
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
      <Icon />
      {/* &#9650; */}
    </ScrollToTopButton>
  );
};

export default ScrollToTop;
