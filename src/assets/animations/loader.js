import React from 'react';
import Lottie from 'react-lottie';

import animationData from '.';

const LottieLoader = ({name, width, height}) => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: name ? animationData[name] : animationData.easyBeingGreen,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return (
    <Lottie
      options={defaultOptions}
      height={width}
      width={height}
    />
  )
};

export default LottieLoader;
