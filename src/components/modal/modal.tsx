import './modal.scss';
import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getIsModalShouldBeShown, } from '../../store/processes/modal-process/modal-selectors';
import { hideModal } from '../../store/processes/modal-process/modal-process';

type ModalPropsType = {
  children: JSX.Element | JSX.Element[]
};

function Modal({children}: ModalPropsType) {
  const isModalShouldBeShown = useAppSelector(getIsModalShouldBeShown);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        dispatch(hideModal());
      }
    };

    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  if (!isModalShouldBeShown) return;

  const modalOverlayClickHandler = (e: React.MouseEvent<HTMLElement>) => {
    const isModalOverlay = (e.target as Element).classList.contains('modal');
    
    if (!isModalOverlay) return;

    dispatch(hideModal());
  };

  const closeModalButtonClickHandler = () => {
    dispatch(hideModal());
  };

  const modalElement = (
    <div className='modal' onClick={modalOverlayClickHandler}>
      <div className='modal-wrapper'>
        <span className='modal-close-button' onClick={closeModalButtonClickHandler}></span>
        <div className='modal-content'>
          {children}
        </div>
      </div>
    </div>
  );

  return createPortal(modalElement, document.body);
}

export default Modal;
