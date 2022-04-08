import React from 'react';

import Images from '../../../assets/images';

const SecondSection = () => {
  return (
    <div className="second-wrapper">
      <p className="title">This is not a bank card. It’s positive change.</p>
      <div className="image-wrapper">
        <img src={Images.ekkoCard.default} alt="" />
      </div>
    </div>
  );
};

export default SecondSection;
