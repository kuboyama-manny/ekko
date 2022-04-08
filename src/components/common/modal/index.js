import React from 'react';
import {Modal} from 'react-responsive-modal';

const BaseModal = ({
  children,
  isOpenModal,
  className,
  closeModal,
}) => {
  return (
    <div className='base-modal-container'>
      <Modal
        open={isOpenModal}
        onClose={closeModal}
        center
        classNames={{
          modal: `custom-ekko-modal ${className || ''}`,
          overlay: `custom-ekko-modal-overlay`
        }}
        // showCloseIcon={false}
      >
        {children}
      </Modal>
    </div>
  )
};

export default BaseModal;
