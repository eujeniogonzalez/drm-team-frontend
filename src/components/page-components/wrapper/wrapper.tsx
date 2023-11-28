import './wrapper.scss';
import React, { useEffect, useRef, useState } from 'react';

type WrapperPropsType = {
  children: JSX.Element | JSX.Element[],
  minHeight: number
};

function Wrapper({ children, minHeight }: WrapperPropsType) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [isWrapperShouldBeShown, setIsWrapperShouldBeShown] = useState<boolean>(true);

  useEffect(() =>{
      const isWrapperEmpty = wrapperRef.current?.childNodes.length === 0;

      if (isWrapperEmpty) setIsWrapperShouldBeShown(false);
  });

  if (!isWrapperShouldBeShown) return;

  return (
    <div className='wrapper' style={{ minHeight: `${minHeight}px` }} ref={wrapperRef}>
      {children}
    </div>
  );
}

export default Wrapper;
