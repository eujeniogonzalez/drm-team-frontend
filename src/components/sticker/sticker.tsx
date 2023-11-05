import './sticker.scss';
import React from 'react';

type StickerPropsType = {
  text: string,
  isStickerShouldBeShown: boolean
};

function Sticker({ text, isStickerShouldBeShown }: StickerPropsType) {
  if (!isStickerShouldBeShown) return;

  return <div className='sticker'>{text}</div>;
}

export default Sticker;
