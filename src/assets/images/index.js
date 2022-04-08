import ekkoLogo from './header/ekko_logo.svg';
import ekkoLogoMobile from './header/ekko_logo_mobile.svg';
import ekkoLogoDark from './header/ekko_logo_dark.svg';
import ekkoLogoDarkMobile from './header/ekko_logo_dark_mobile.svg';
import hamburger from './header/hamburger.svg';
import hamburgerDark from './header/hamburger_dark.svg';
import cross from './header/cross.svg';

import arrowBottom from './dashboard/arrow_bottom.svg';
import arrowBottomGradient from './dashboard/arrow_bottom_gradient.svg';
import arrowTop from './dashboard/arrow_top.svg';
import userIcon from './dashboard/user_icon.svg';
import masterCard from './dashboard/master_card.svg';
import plantIcon from './dashboard/plant_icon.svg';
import plasticIcon from './dashboard/plastic_icon.svg';
import ekkoLogoIcon from './dashboard/ekko_logo_icon.svg';
import expandIcon from './dashboard/expand_icon.svg';
import shrinkIcon from './dashboard/shrink_icon.svg';
import facebookIcon from './dashboard/facebook_icon.svg';
import twitterIcon from './dashboard/twitter_icon.svg';
import cupIcon from './dashboard/cup_icon.svg';
import treeIcon from './dashboard/tree_icon.svg';
// import ekkoCard from './dashboard/ekko_card.svg';
import howItWorks from './dashboard/how_it_works.svg';
import treeBottleImg from './dashboard/trees_bottles.svg';
import signUpBg from './dashboard/signup_bg.png';

/**
 * get device resolution
 */
const getResolution = () => {
  const retinaSuffix = window.devicePixelRatio;
  if (retinaSuffix === 1) {
    return 1;
  } else if (2 >= retinaSuffix && retinaSuffix > 1) {
    return 2;
  } else if (3 >= retinaSuffix && retinaSuffix > 2) {
    return 3;
  } else {
    return 3;
  }
};

// const signUpBg = require(`./dashboard/signup_bg@${getResolution()}x.png`);
const fourthAnimation = require(`./dashboard/fourth_animation@${getResolution()}x.png`);
const ekkoCard = require(`./dashboard/card-master@${getResolution()}x.png`);

export default {
  ekkoLogo,
  ekkoLogoMobile,
  ekkoLogoDark,
  ekkoLogoDarkMobile,
  arrowBottom,
  arrowBottomGradient,
  arrowTop,
  userIcon,
  cupIcon,
  treeIcon,
  masterCard,
  plantIcon,
  plasticIcon,
  signUpBg,
  ekkoLogoIcon,
  expandIcon,
  shrinkIcon,
  facebookIcon,
  twitterIcon,
  ekkoCard,
  hamburger,
  hamburgerDark,
  cross,
  fourthAnimation,
  howItWorks,
  treeBottleImg,
}
