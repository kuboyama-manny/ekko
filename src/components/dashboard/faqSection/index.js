import React, {useState} from 'react';

import Footer from '../footer';
import FaqItem from './faqItem';
import {faqs} from '../../../utils/variable';

const FaqSection = ({isOpenModal, setOpenModal}) => {
  const [isOpen, setOpen] = useState(0);
  return (
    <>
      <div className="faq-content-wrapper">
        <p className="title">FAQs</p>
        <div className="faqs-content">
          {faqs.map((item, index) => {
            return (
              <div key={index.toString()}>
                <FaqItem
                  item={item}
                  current={index + 1}
                  isOpen={isOpen}
                  setOpen={setOpen}
                />
                <div className={`item-graident ${index === faqs.length - 1 ? 'd-none' : ''}`} />
              </div>
            )
          })}
        </div>
      </div>
      <Footer
        isOpenModal={isOpenModal}
        setOpenModal={setOpenModal}
      />
    </>
  )
};

export default FaqSection;
