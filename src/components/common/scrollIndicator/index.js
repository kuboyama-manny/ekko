import React from 'react';

let items = [];
for (let i = 0; i < 9; i++) {
  items.push(i);
}

const ScrollIndicator = ({focus}) => {
  return (
    <div className="scroll-indicator-wrapper">
      <div className="scroll-indicator">
        {items.map((item, index) => {
          return (
            <div
              key={index.toString()}
              className={`dot ${item === focus ? 'active' : ''}`}
              onClick={() => window.fullpage_api.moveTo(item + 1)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ScrollIndicator;
