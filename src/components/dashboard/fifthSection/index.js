import React, {useEffect, useState} from 'react';

import {getWindowDimensions} from '../../../utils/function';

import AnimationLoader from '../../../assets/animations/loader';

const FifthSection = ({focus}) => {
  const [toggle, setToggle] = useState(false);
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    let interval
    if (focus === 4) {
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
      <p className="title">A coffee here, a tree there</p>
      <p className="description">
        Keep doing all the stuff you’d usually do, like shopping, banking, or paying bills, via our ekko app, and you’ll make a tangible difference to our climate
      </p>
      {toggle && (
        <div className="animation-container">
          <AnimationLoader
            name="goodVibes"
            width='100%'
            height={calculateHeight()}
          />
        </div>
      )}
    </>
  );
};

export default FifthSection;
