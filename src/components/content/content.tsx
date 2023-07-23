import './content.scss';
import React from 'react';



function Content({children}: {children: JSX.Element[] | JSX.Element}) {
  return (
    <div className="page-content">
      {children}
    </div>
  );
}

export default Content;