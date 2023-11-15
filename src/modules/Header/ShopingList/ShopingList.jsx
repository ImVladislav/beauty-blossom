import React, { useEffect, useState } from "react";
import { ModalBackground, OpenModal } from "./ShopingListStyled";
import CartModal from "./CartModal";
import { CorzinaIcon } from "../../../shared/components/ReusebleCompoments/StyleSVGIcons";

const ShoppingCart = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
  if (isModalOpen) {
    document.body.classList.add('modal-open');
  } else {
    document.body.classList.remove('modal-open');
  }

  return () => {
    document.body.classList.remove('modal-open');
  };
  }, [isModalOpen]);
  
  const handelDropClose = (e) => {
    if (e.target.tagName === "SECTION") {
      setIsModalOpen(false);

    }
  }

  return (
    <div>
      <OpenModal onClick={openModal}>
        <CorzinaIcon />
      </OpenModal>
      {isModalOpen && (
        <ModalBackground onClick={handelDropClose}>
          <CartModal closeModal={closeModal} />
        </ModalBackground>
      )}
    </div>
  );
};

export default ShoppingCart;
