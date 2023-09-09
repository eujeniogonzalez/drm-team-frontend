import './toast.scss';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getIsToastShouldBeShown, getToastMessage } from '../../store/processes/toast-process/toast-selectors';
import React, { useEffect } from 'react';
import { hideToast } from '../../store/processes/toast-process/toast-process';
import { useLocation } from 'react-router-dom';

function Toast() {
  const dispatch = useAppDispatch();
  const toastMessage = useAppSelector(getToastMessage);
  const isToastShouldBeShown = useAppSelector(getIsToastShouldBeShown);
  const location = useLocation();

  useEffect(() => {
    dispatch(hideToast());
  }, [location]);

  if (!isToastShouldBeShown || toastMessage.length === 0) return;

  const closeButtonClickHandler = () => dispatch(hideToast());

  return (
    <div className='toast-wrapper'>
      <div className='toast'>
        <div className='toast-close-button' onClick={closeButtonClickHandler}></div>
        <div className='toast-message'>{toastMessage}</div>
      </div>
    </div>
  );
}

export default Toast;