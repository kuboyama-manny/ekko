import React from 'react';

const PrimaryBtn = ({title, onClick, className, disabled = false}) => {
  return (
    <button className={`btn primary ${className}`} onClick={onClick} disabled={disabled}>
      {title}
    </button>
  )
};

export default PrimaryBtn;
