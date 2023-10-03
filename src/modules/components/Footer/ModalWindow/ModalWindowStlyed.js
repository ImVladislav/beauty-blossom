import Modal from "react-modal";
import styled from 'styled-components';

export const ModalStyle = styled(Modal)`

& .ReactModal__Overlay.ReactModal__Overlay--after-open{
    position: fixed;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.7)!important;
    z-index: 999;
  }

    & .ReactModal__Content {
    width: 400px;
    margin: auto;
    padding: 20px;
    /* background: white; */
    border: 1px solid #ccc;
    border-radius: 4px;
  }

`;

