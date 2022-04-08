import React, {useState, useEffect} from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

import Header from './header';
import FirstSection from './firstSection';
import SecondSection from './secondSection';
import ThirdSection from './thirdSection';
import FourthSection from './fourthSection';
import FifthSection from './fifthSection';
import SixthSection from './sixthSection';
import SeventhSection from './seventhSection';
import EighthSection from './eighthSection';
import FaqSection from './faqSection';

import Modal from '../common/modal';
import PrivacyPolicy from '../common/modal/privacy';
import Terms from '../common/modal/terms';
import ScrollIndicator from '../common/scrollIndicator';

import Images from '../../assets/images';

const Dashboard = ({currentScrollFocus, changeScrollFocus, subscribeWaitlist}) => {
  const [isOpenModal, setOpenModal] = useState('');

  const afterLoad = (origin, destination, direction) => {
    changeScrollFocus(destination.index);
  }

  return (
    <div className="dashboard-container">
      <Header isOpenModal={isOpenModal} focus={currentScrollFocus} moveToScroll={(value) => window.fullpage_api.moveTo(value)} />
      <ReactFullpage
        scrollOverflow={true}
        navigation={false}
        fadingEffect
        licenseKey="123"
        afterLoad={afterLoad}
        dragAndMove
        normalScrollElements='.react-responsive-modal-root'
        render={({ state, fullpageApi }) => {
          return (
            <div id="fullpage-wrapper">
              <div className="section first">
                <FirstSection focus={currentScrollFocus} />
              </div>
              <div className="section second">
                <SecondSection />
              </div>
              <div className="section third">
                <ThirdSection focus={currentScrollFocus} />
              </div>
              <div className="section fourth">
                <FourthSection focus={currentScrollFocus} />
              </div>
              <div className="section fifth">
                <FifthSection focus={currentScrollFocus} />
              </div>
              <div className="section sixth">
                <SixthSection focus={currentScrollFocus} />
              </div>
              <div className="section seventh">
                <SeventhSection />
              </div>
              <div className="section eighth">
                <EighthSection subscribeWaitlist={subscribeWaitlist} />
              </div>
              <div className="section faq">
                <FaqSection
                  isOpenModal={isOpenModal}
                  setOpenModal={setOpenModal}
                />
              </div>
            </div>
          );
        }}
      />
      {currentScrollFocus !== 8 && <ScrollIndicator focus={currentScrollFocus} />}
      {currentScrollFocus !== 8 ? (
        <div className="bottom-indicator" onClick={() => window.fullpage_api.moveTo(9)}>
          <img
            src={currentScrollFocus === 7 ? Images.arrowBottomGradient : Images.arrowBottom}
            alt="arrow bottom"
          />
        </div>
      ) : (
        <div className="bottom-indicator" onClick={() => window.fullpage_api.moveTo(1)}>
          <img
            src={Images.arrowTop}
            alt="arrow bottom"
          />
        </div>
      )}
      <Modal
        isOpenModal={isOpenModal}
        setOpenModal={setOpenModal}
        className="privacy"
        closeModal={() => setOpenModal('')}
      >
        {isOpenModal === 'privacy' ? <PrivacyPolicy /> : <Terms />}
      </Modal>
    </div>
  );
};

export default Dashboard;
