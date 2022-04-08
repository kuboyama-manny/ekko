import React, {useEffect, useState} from 'react';

import {getWindowDimensions} from '../../../utils/function';

import AnimationLoader from '../../../assets/animations/loader';

const ThirdSection = ({focus}) => {
  const [toggle, setToggle] = useState(false);
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    let interval
    if (focus === 2) {
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
      <p className="title">Hey beautiful people</p>
      <p className="description">
        Welcome to the transformative app that turns the tide on climate change, without you doing anything different.
        If saving the world without breaking a sweat is your bag.
      </p>
      {toggle && (
        <div className="animation-container">
          <AnimationLoader
            name="positiveChange"
            height={calculateHeight()}
          />
        </div>
      )}
    </>
  );
};

export default ThirdSection;
