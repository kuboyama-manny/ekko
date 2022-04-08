import React, {useEffect, useState} from 'react';

import {getWindowDimensions} from '../../../utils/function';

import AnimationLoader from '../../../assets/animations/loader';

const FirstSection = ({focus}) => {
  const [toggle, setToggle] = useState(false);
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    let interval
    if (focus === 0) {
      setTimeout(() =>  {
        setToggle(true)
      }, 500);
    }

    return () => {
      setToggle(false);
      interval && clearInterval(interval);
    }
  }, [focus]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleResize = () => {
    setWindowDimensions(getWindowDimensions());
  };

  const calculateHeight = () => {
    if (windowDimensions.width >= 1000 && windowDimensions.height >= 850) {
      return 810
    } else {
      if (windowDimensions.width > windowDimensions.height) {
        return windowDimensions.height * 0.8;
      }
      return windowDimensions.width * 0.8
    }
  };

  return (
    <>
      <p className="title">Kermit was wrong.</p>
      {toggle && (
        <div className="animation-container">
          <AnimationLoader
            name="easyBeingGreen"
            height={calculateHeight()}
          />
        </div>
      )}
    </>
  );
};

export default FirstSection;
