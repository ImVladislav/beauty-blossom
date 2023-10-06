import { CgClose } from "react-icons/cg";
import { ModalClose } from "./CloseButtonStyled";

export const CloseButton = ({ close }) => {
  return (
      <ModalClose onClick={close}>
        <CgClose style={{width: "24px", height: "24px"}} />
      </ModalClose>
  )
}

