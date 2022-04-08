import React from 'react';

const Footer = ({setOpenModal}) => {

  const openExternalLink = (route) => {
    window.open(
      route,
      'blank'
    );
  };

  return (
    <div className="footer-container">
      <div className="link-groups">
        <div className="social-media__mobile">
          <div className="img-wrapper" onClick={() => openExternalLink('https://twitter.com/joinekko_earth')}>
            <i className="fab fa-twitter" />
          </div>
          <div className="img-wrapper" onClick={() => openExternalLink('https://www.facebook.com/joinekko.earth/')}>
            <i className="fab fa-facebook-f" />
          </div>
          <div className="img-wrapper" onClick={() => openExternalLink('https://www.linkedin.com/company/joinekko-earth/')}>
            <i className="fab fa-linkedin-in" />
          </div>
          <div className="img-wrapper" onClick={() => openExternalLink('https://www.instagram.com/joinekko.earth/')}>
            <i className="fab fa-instagram" />
          </div>
        </div>
        <div className="terms-policy">
          <div className="terms-item">© ekko 2021</div>
          <div
            className="terms-item"
            onClick={() => setOpenModal('privacy')}
          >
            privacy
          </div>
          <div
            className="terms-item"
            onClick={() => setOpenModal('terms')}
          >
            terms
          </div>
        </div>
        <div className="social-media">
          <div className="img-wrapper" onClick={() => openExternalLink('https://twitter.com/joinekko_earth')}>
            <i className="fab fa-twitter" />
          </div>
          <div className="img-wrapper" onClick={() => openExternalLink('https://www.facebook.com/joinekko.earth/')}>
            <i className="fab fa-facebook-f" />
          </div>
          <div className="img-wrapper" onClick={() => openExternalLink('https://www.linkedin.com/company/joinekko-earth/')}>
            <i className="fab fa-linkedin-in" />
          </div>
          <div className="img-wrapper" onClick={() => openExternalLink('https://www.instagram.com/joinekko.earth/')}>
            <i className="fab fa-instagram" />
          </div>
        </div>
      </div>
      <p className="footer-description">
        ekko's account and debit card is issued by Paynetics, a licensed e-money issuer and a payment institution within the United Kingdom and European Union under RN 900785 
        by Financial Conduct Authority (FCA). Paynetics is a principal member of Mastercard.
      </p>
    </div>
  );
};

export default Footer;
