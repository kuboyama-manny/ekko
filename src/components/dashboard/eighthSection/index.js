import React, {useState} from 'react';

import Images from '../../../assets/images';

import TextInput from '../../common/form/input';
import PrimaryBtn from '../../common/form/buttons/primary';

const EighthSection = ({subscribeWaitlist}) => {
  const [fullName, onChangeFullName] = useState('');
  const [email, onChangeEmail] = useState('');
  const [isRequested, setRequest] = useState(false);

  const handleSubmit = () => {
    const data = {
      username: fullName,
      email: email,
    }
    subscribeWaitlist(data)
      .then(() => {
        onChangeEmail('');
        onChangeFullName('');
        setRequest(true);
      })
      .catch((error) => {
        onChangeEmail('');
        onChangeFullName('');
        setRequest(false);
      });
  };

  return (
    <div className="eighth-wrapper" style={{ backgroundImage: `url(${Images.signUpBg})`}}>
      <div className="sign-up__form">
        <div className="sign-up__logo">
          <img src={Images.ekkoLogoIcon} alt="logo icon" />
        </div>
        <p className="form-title">Come change the world</p>
        <p className="form-description">
          Become part of the ekko movement today. Join the wait list by simply entering your name and email address and we'll let you know when you’re next up. Right on.
        </p>
        <div className="full-name">
          <TextInput placeholder="Full Name" value={fullName} onChange={onChangeFullName} />
        </div>
        <div className="email">
          <TextInput placeholder="Email" value={email} onChange={onChangeEmail} />
        </div>
        <div className="btn-group">
          <PrimaryBtn
            title={isRequested ? "Please Check Your Email" : "Join Waitlist"}
            onClick={handleSubmit}
            className=""
            disabled={!fullName || !email || isRequested}
          />
        </div>
      </div>
    </div>
  )
};

export default EighthSection;
