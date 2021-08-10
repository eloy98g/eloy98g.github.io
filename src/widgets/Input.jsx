import React from 'react';

const Input = ({ value, name, onChange, title }) => {
  // const handleColor = () => {
  //   console.log('handlecolor')
  // }

  return (
    <div className="form">
      <input
        value={value}
        className="text-input"
        type="text"
        autoComplete="off"
        name={name}
        required
        onChange={onChange}
      />
      <label className="sub-section-title">
        <span className="content-title">{title}</span>
        {/* <div className={`color-${name}`} /> */}
        <div className="color" />
      </label>
    </div>
  );
};

export default Input;
