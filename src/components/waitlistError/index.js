import React, {useState, useEffect} from 'react';

import {waitlistErrors} from '../../utils/variable';
import {getWindowDimensions} from '../../utils/function';

import AnimationLoader from '../../assets/animations/loader';

const WaitlistErrorHandling = ({location, history}) => {
  const [toggle, setToggle] = useState(false);
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  const [errorStatus, setErrorStatus] = useState('');

  useEffect(() => {
    if (location) {
      const query = new URLSearchParams(location.search);
      const errorStatus = query.get('error');
      console.log('error status', errorStatus === '500');
      setErrorStatus(errorStatus);
    }
  }, [location]);
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
      return 810;
    } else {
      if (windowDimensions.width > windowDimensions.height) {
        return windowDimensions.height * 0.8;
      }
      return windowDimensions.width * 0.8;
    }
  };

  return (
    <div className="waitlist-error-container">
      {errorStatus && <p className="title">{waitlistErrors[errorStatus] && waitlistErrors[errorStatus].title}</p>}
      {errorStatus && <p className="description">{waitlistErrors[errorStatus] && waitlistErrors[errorStatus].description}</p>}
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

export default WaitlistErrorHandling;
