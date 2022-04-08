import React, {useEffect, useState} from 'react';

import {getWindowDimensions} from '../../../utils/function';

import AnimationLoader from '../../../assets/animations/loader';

const FourthSection = ({focus}) => {
  const [toggle, setToggle] = useState(false);
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    let interval
    if (focus === 3) {
      setTimeout(() =>  {
        setToggle(true)
      }, 500);
    }

    return () => {
      setToggle(false);
      interval && clearInterval(interval);
    }
  }, [focus])

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleResize = () => {
    setWindowDimensions(getWindowDimensions());
  };

  const calculateHeight = () => {
    if (windowDimensions.width >= 1000 && windowDimensions.height >= 850) {
      return 750
    } else {
      if (windowDimensions.width > windowDimensions.height) {
        return windowDimensions.height * 0.7;
      }
      return windowDimensions.width * 0.7;
    }
  };

  return (
    <>
      <p className="title">Do nothing, do good</p>
      <p className="description">
        We’ve combined smart banking, marketplace and retail in one transformative app - where every transaction has a positive reaction.
      </p>
      {toggle && (
        <div className="animation-container">
          <AnimationLoader
            name="everyTap"
            height={calculateHeight()}
          />
        </div>
      )}
    </>
  );
};

export default FourthSection;
