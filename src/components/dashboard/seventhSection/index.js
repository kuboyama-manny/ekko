import React, {useMemo} from 'react';

import Images from '../../../assets/images';
import {treesData} from '../../../utils/variable';

const SeventhSection = () => {
  const memorizedValue = useMemo(() => treesData)
  return (
    <div className="seventh-wrapper">
      <p className="title">Our trees, our bottles</p>
      <div className="bg-img-wrapper">
        <img src={Images.treeBottleImg} alt="" />
      </div>
      <div className="trees-bottles">
        {memorizedValue.map((item, index) => {
          return (
            <div key={index.toString()} className="card-item">
              <div className="img-wrapper">
                <img src={item.imageUrl} alt="icon" />
              </div>
              <p className="card-title">{item.title}</p>
              <p className="card-description">{item.description}</p>
              <p className="card-description__mobile">{item.mobileDescription}</p>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default SeventhSection;
