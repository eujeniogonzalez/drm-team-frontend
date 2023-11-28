import './links-block.scss';
import { Link } from 'react-router-dom';
import React from 'react';
import { LinksBlockPropsType } from '../../../types/links-block-props-type';

function LinksBlock({ links, alignment }: LinksBlockPropsType) {
  const getLinks = () => links.map((link, i) => (
    <Link
      key={`linkID-${i}`}
      className='dark-link links-blocks-item'
      to={link.route}
    >
      {link.anchor}
    </Link>
  ));

  return (
    <div className={`links-blocks-${alignment}`}>
      {getLinks()}
    </div>
  );
}

export default LinksBlock;