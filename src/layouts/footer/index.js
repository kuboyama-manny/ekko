import React from 'react';

const Footer = ({location}) => {
  const renderClassName = () => {
    if (
      location.pathname === '/' ||
      location.pathname === '/confirm/waitlist' ||
      location.pathname === '/waitlist' ||
      location.pathname === '/error-404'
    ) {
      return 'd-none';
    }
    return '';
  };

  return (
    <div className={`footer-container ${renderClassName()}`}>
      this is footer
    </div>
  );
};

export default Footer;
