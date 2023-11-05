import './message.scss';
import React from 'react';
import { MessagePropsType } from '../../types/message-props-type';
import LinksBlock from '../links-block/links-block';
import { LinksBlockAlignment } from '../../const/common-const';

function Message({ message, links }: MessagePropsType) {
  const showLinks = () => {
    if (!links) return;

    return <LinksBlock links={links} alignment={LinksBlockAlignment.Horizontal} />
  };

  return (
    <div className='message'>
      <div className='message-text'>{message}</div>
      {showLinks()}
    </div>
  );
}

export default Message;
