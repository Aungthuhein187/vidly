import React from 'react';

const Input = ({ name, label, value, type, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        value={value}
        onChange={onChange}
        name={name}
        id={name}
        type={type}
        className="form-control"
        autoFocus
      />
    </div>
  );
};

export default Input;
