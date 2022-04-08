import React, {useState} from 'react';
import Collapsible from 'react-collapsible';

import Images from '../../../assets/images';

const FaqItem = ({item, current, isOpen, setOpen}) => {
  // const [isOpen, setOpen] = useState(false);
  return (
    <div className="faq-item">
      <div className="collapsible-row">
        <p className="question">{item.question}</p>
        <div className="collapse-icon" onClick={() => setOpen(current)}>
          <img
            src={isOpen === current ? Images.shrinkIcon : Images.expandIcon}
            alt="icon"
          />
        </div>
      </div>
      <Collapsible open={isOpen === current}>
        <p className="answer">{item.answer}</p>
      </Collapsible>
    </div>
  )
};

export default FaqItem;
