import './message.scss';
import React from 'react';
import { MessageProps } from '../../types/message-props-type';
import LinksBlock from '../links-block/links-block';

function Message({ message, links }: MessageProps) {
  const showLinks = () => {
    if (!links) return;

    return <LinksBlock links={links} />
  };

  return (
    <div className='message'>
      <div className='message-text'>{message}</div>
      {showLinks()}
    </div>
  );
}

export default Message;
