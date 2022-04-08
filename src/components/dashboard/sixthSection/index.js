import React, {useMemo} from 'react';
// import ReactPlayer from 'react-player';

// import howItWorks from '../../../assets/videos/how_it_work.mp4';
import Images from '../../../assets/images';
import {howItWorksData} from '../../../utils/variable';

const SixthSection = ({focus}) => {
  const memorizedValue = useMemo(() => howItWorksData)
  return (
    <>
      <p className="title">How it works</p>
      <p className="title__mobile">How it works</p>
      {/* <div className="video-container">
        <ReactPlayer
          url={[{ src: howItWorks, type: 'video/mp4' }]}
          className='how-it-works'
          playing={focus === 5}
          loop={false}
          muted
          id='video'
        />
      </div> */}
      <div className="image-wrapper">
        <img src={Images.howItWorks} alt="" />
      </div>
      <div className="how-it-works">
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
    </>
  );
};

export default SixthSection;
