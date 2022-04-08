import React, {useEffect, useState} from 'react';

import {getWindowDimensions} from '../../../utils/function';
import Images from '../../../assets/images';

import PrimaryBtn from '../../common/form/buttons/primary';

const Header = ({focus, moveToScroll, isOpenModal}) => {
  const [isOpen, setOpen] = useState(false);
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleResize = () => {
    setWindowDimensions(getWindowDimensions());
  };

  const moveToSection = (index) => {
    setOpen(false);
    moveToScroll(index);
  };

  const renderClassName = () => {
    switch (focus) {
      case 0:
        return 'first';
      case 1:
        return 'second';
      case 2:
        return 'third';
      case 3:
        return 'fourth';
      case 4:
        return 'fifth';
      case 5:
        return 'sixth';
      case 6:
        return 'seventh';
      case 7:
        return 'eighth';
      case 8:
        return 'faq';
      default:
        return 'first';
    }
  };

  return (
    <div className={`header-container-parent ${renderClassName()} ${isOpenModal ? 'open-modal' : ''}`}>
      <div className="header-container">
        <div className="left">
          <div className={`anchor-btn ${focus === 7 ? 'dark' : ''}`} onClick={() => moveToScroll(6)}>How it works</div>
          <div className={`anchor-btn ${focus === 7 ? 'dark' : ''}`} onClick={() => moveToScroll(2)}>Positive change</div>
        </div>
        {windowDimensions.width > 768 ? (
          <img
            src={focus === 7 ? Images.ekkoLogoDark : Images.ekkoLogo}
            className="ekko-logo"
            alt="ekko logo"
          />
        ) : (
          <img
            src={focus === 7 ? Images.ekkoLogoDarkMobile : Images.ekkoLogoMobile}
            className="ekko-logo-mobile"
            alt="ekko logo"
          />  
        )}
        <div className="right">
          <div className={`anchor-btn ${focus === 7 ? 'dark' : ''}`} onClick={() => moveToScroll(9)}>FAQs</div>
          <div className={`anchor-btn ${focus === 7 ? 'dark' : ''}`} onClick={() => moveToScroll(8)}>Sign up</div>
        </div>
        {windowDimensions.width <= 768 && (
          <div className="hamburger" onClick={() => setOpen(true)}>
            <img
              src={isOpen ? Images.cross : focus === 7 ? Images.hamburgerDark : Images.hamburger}
              alt=""
            />
          </div>
        )}
        {isOpen && (
          <div className="mobile-menu">
            <div className="mobile-header">
              <img
                src={Images.ekkoLogoMobile}
                className="ekko-logo-mobile open"
                alt="ekko logo"
              />
              <div className="mobile-hamburger" onClick={() => setOpen(false)}>
                <img
                  src={isOpen ? Images.cross : Images.hamburger}
                  alt=""
                />
              </div>
            </div>
            <div className="mobile-content">
              <div className="mobile-link" onClick={() => moveToSection(6)}>
                How it works
              </div>
              <div className="mobile-link" onClick={() => moveToSection(2)}>
                Positive change
              </div>
              <div className="mobile-link" onClick={() => moveToSection(9)}>
                FAQs
              </div>
              <div className="btn-container">
                <PrimaryBtn title="Sign up" onClick={() => moveToSection(8)} className="" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
};

export default Header;
