import React from 'react';

import Images from '../../assets/images';

const Header = ({history}) => {
  const moveToMain = () => {
    history.push('/');
  }

  return (
    <div className="header-container-parent">
      <div className="header-container">
        <img
          src={Images.ekkoLogo}
          className="ekko-logo"
          alt="ekko logo"
          onClick={moveToMain}
        />
        <img
          src={Images.ekkoLogoMobile}
          className="ekko-logo-mobile"
          alt="ekko logo"
          onClick={moveToMain}
        />
      </div>
    </div>
  )
};

export default Header;
