import { LoaderColors, LoaderSizes } from '../../const/loader-const';
import './loader.scss';
import React from 'react';

type LoaderProps = {
  size: LoaderSizes;
  color: LoaderColors;
};

function Loader({ size, color }: LoaderProps) {
  return (
    <div className='loader'>
      <div className={`${size} ${color}`}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Loader;
