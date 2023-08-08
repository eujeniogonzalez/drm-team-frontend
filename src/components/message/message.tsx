import './message.scss';
import React from 'react';
import { MessageProps } from '../../types/message-props-type';

function Message({ message }: MessageProps) {
  return (
    <div className="message">
      <div className="message-text">{message}</div>
    </div>
  );
}

export default Message;
