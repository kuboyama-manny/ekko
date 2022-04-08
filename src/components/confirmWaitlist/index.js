import React, {useEffect, useState} from 'react';

import {getWindowDimensions} from '../../utils/function';

import AnimationLoader from '../../assets/animations/loader';

const ConfirmWaitlist = () => {
  const [toggle, setToggle] = useState(false);
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  useEffect(() => {
    let interval
    setTimeout(() =>  {
      setToggle(true)
    }, 500);

    return () => {
      setToggle(false);
      interval && clearInterval(interval);
    }
  }, []);

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
    <div className="confirm-waitlist-container">
      <p className="title">Thank you!</p>
      <p className="description">
        Your email address has been confirmed. You will hear from us soon when it's your turn to change the world
      </p>
      {toggle && (
        <div className="animation-container">
          <AnimationLoader
            name="easyBeingGreen"
            height={calculateHeight()}
          />
        </div>
      )}
    </div>
  )
};

export default ConfirmWaitlist;
