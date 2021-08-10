import React from 'react';

const Input = ({ value, name, onChange, title }) => {
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
      <label className="label-name">
        <span className="content-name">{title}</span>
      </label>
    </div>
  );
};

export default Input;
