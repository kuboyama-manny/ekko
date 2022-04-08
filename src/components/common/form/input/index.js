import React, {useState} from 'react';

const NormalInput = ({placeholder, value, onChange, type = 'text'}) => {
  const [focus, setFocus] = useState(false);
  return (
    <div className="input-container">
      <input
        value={value}
        onChange={(e) => onChange(e.currentTarget.value)}
        placeholder={placeholder}
        type={type}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
      <div className={`border ${focus ? 'focus' : ''}`} />
    </div>
  );
};

export default NormalInput;
