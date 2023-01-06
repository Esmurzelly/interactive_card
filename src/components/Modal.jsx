import React from 'react'
import styled from 'styled-components';

const ModalShow = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.4);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    pointer-events: none;
    transition: 0.5s;

    &.active {
        opacity: 1;
        pointer-events: all;
    }
`;

const Modal__content = styled.div`
    padding: 20px;
    border-radius: 12px;
    background-color: white;
    width: 50vw;
    transform: scale(0.5);
    transition: 0.4s all;

    &.active {
        transform: scale(1);   
    }
`;

const Modal = ({active, setActive, children}) => {
    return ( 
        <ModalShow className={active ? "active" : ""} onClick={() => setActive(false)}>
            <Modal__content className={active ? "active" : ""} onClick={e => e.stopPropagation()}>
                {children}
            </Modal__content>
        </ModalShow>
     );
}
 
export default Modal;